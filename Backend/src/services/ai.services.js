const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const apiKey = process.env.GOOGLE_GEMINI_APIKEY;
if (!apiKey) {
  console.error("ERROR: Missing API key. Make sure GOOGLE_GEMINI_APIKEY is set in your .env file");
}

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // Updated to a valid model name

async function generateContent(prompt) {
  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Error generating content:", error);
    throw error;
  }
}

module.exports = generateContent;