const { GoogleGenAI } = require('@google/genai');

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({
  apiKey:process.env.GoogleGenAIKEY
});

const UnderstandingImage = async(base64ImageFile)=>{
  const contents = [
  {
    inlineData: {
      mimeType: "image/jpeg",
      data: base64ImageFile,
    },
  },
  { text: "Short Caption with hastag for this image." },
];

const response = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  contents: contents,
  config:{
    systemInstruction:`You are an expert in generating captions for images.
    You grenrae single caption for the image.
    Your caption should be short and concise.
    You use hashtags and emojis in the caption.
    You write caption in tpori Hindi`,
  }
});
return(response.text);
}

module.exports = UnderstandingImage