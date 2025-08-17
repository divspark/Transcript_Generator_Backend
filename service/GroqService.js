import fetch from "node-fetch";

export const generateSummary = async (transcript, instruction) => {
  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: "You are a meeting notes summarizer." },
          { role: "user", content: `Instruction: ${instruction}\n\nTranscript:\n${transcript}` }
        ],
        temperature: 0.7,
        max_tokens: 800
      })
    });

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Groq API error:", error);
    throw new Error("Failed to generate summary");
  }
};
