import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_APIKEY });
const model = genAI.getGenrativeModel({model:"gemini-2.0-flash"})

async function generateContent() {
const response = await ai.models.generateContent(prompt);

return response.response.text();
}


module.exports = generateContent ;