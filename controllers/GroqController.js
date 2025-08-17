import { generateSummary } from "../service/GroqService.js";

export const summarizeMeeting = async (req, res) => {
  const { transcript, instruction } = req.body;

  try {
    const summary = await generateSummary(transcript, instruction);
    res.json({ summary });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
