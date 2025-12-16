import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI(process.env.GoogleApiKey);

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3-pro-preview",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

await main();