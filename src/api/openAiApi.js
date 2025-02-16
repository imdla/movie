import { Configuration, openAiApi } from "openai";

const openAiApi = new Configuration({
  apiKey: import.meta.env.VITE_GPT_API_KEY,
});

export default openAiApi;
