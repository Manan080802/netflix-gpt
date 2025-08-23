import OpenAI from "openai";
import { OPENAI_KEY } from "../constants/config";
console.log("OPENAI_KEY", OPENAI_KEY);

const openai = new OpenAI({
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;
