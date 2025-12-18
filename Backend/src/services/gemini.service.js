const { GoogleGenAI } =require("@google/genai");


const ai = new GoogleGenAI({});

async function captionCreation() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

module.exports= {captionCreation}