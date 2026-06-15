import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

export async function getGeminiResponse(message) {
  if (!apiKey) {
    return "Gemini API key is missing.";
  }

  const prompt = `
DevKVasu Photography

Services:
- Wedding Photography
- Videography
- Pre-Wedding Shoots
- Birthday Events
- Album Designing

Location:
- Bangalore
- Hyderabad

Experience:
- 20 Years

Packages:
- Basic
- Standard
- Premium

User Question: ${message}

Answer only about DevKVasu Photography services and packages.
`;

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const result = await model.generateContent(prompt);
    const response = await result.response;

    return response.text();
  } catch (error) {
    console.error("Gemini Error:", error);
    console.log("Error Message:", error?.message);

    const errorMessage = String(error?.message ?? error);

    if (
      errorMessage.includes("401") ||
      errorMessage.toLowerCase().includes("api key")
    ) {
      return "Invalid Gemini API key.";
    }

    if (errorMessage.includes("429")) {
      return "Rate limit exceeded. Please try again later.";
    }

    return "Sorry, I couldn't process your request.";
  }
}