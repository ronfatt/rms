import { mkdir, readFile, writeFile } from "node:fs/promises";

function parseEnv(text) {
  return Object.fromEntries(
    text
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("#"))
      .map((line) => {
        const index = line.indexOf("=");
        return [line.slice(0, index), line.slice(index + 1).replace(/^"|"$/g, "")];
      }),
  );
}

const env = parseEnv(await readFile(".env.local", "utf8"));
const apiKey = env.OPENAI_API_KEY;
const model = env.OPENAI_IMAGE_MODEL || "gpt-image-1";

if (!apiKey) {
  throw new Error("OPENAI_API_KEY is missing in .env.local");
}

const assets = [
  {
    file: "public/ai/director-concept.png",
    prompt:
      "Premium cinematic AI director moodboard frame, dark luxury studio, abstract human silhouette behind glass, gold and electric blue accents, no text, no logo, vertical composition, high-end music video previsualization.",
  },
  {
    file: "public/ai/director-scene.png",
    prompt:
      "Cinematic AI-generated scene frame, futuristic Kuala Lumpur night ambience, moody light beams, premium music video look, soft grain, black charcoal palette with teal and gold highlights, no text, no logo, vertical composition.",
  },
  {
    file: "public/ai/director-sound.png",
    prompt:
      "Abstract premium sound identity artwork, glowing waveform architecture, dark studio environment, cinematic lighting, violet blue and warm gold accents, no text, no logo, vertical composition, luxury creative technology aesthetic.",
  },
];

await mkdir("public/ai", { recursive: true });

for (const asset of assets) {
  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      prompt: asset.prompt,
      size: "1024x1536",
      n: 1,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Image generation failed for ${asset.file}: ${error}`);
  }

  const json = await response.json();
  const b64 = json.data?.[0]?.b64_json;
  if (!b64) {
    throw new Error(`No image returned for ${asset.file}`);
  }

  await writeFile(asset.file, Buffer.from(b64, "base64"));
  console.log(`Generated ${asset.file}`);
}
