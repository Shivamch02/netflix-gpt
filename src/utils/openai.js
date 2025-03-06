// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { OPENAI_KEY } from "./constants";

// const genAI = new GoogleGenerativeAI(OPENAI_KEY);

// // Use the latest free model available
// const model = genAI.getGenerativeModel({
//   model: "gemini-1.0-pro", // Updated model name
// });

// export default model;

import { GoogleGenerativeAI } from "@google/generative-ai";

import { OPENAI_KEY } from "./constants";

const genAI = new GoogleGenerativeAI(OPENAI_KEY);

// Latest working configuration (July 2024)
export const textModel = genAI.getGenerativeModel({
  model: "gemini-1.5-flash", // Latest free model
  generationConfig: {
    temperature: 0.9,
  },
});
