import { sendSummary } from "../services/ShareService.js";

export const shareSummary = async (req, res) => {
  const { summary, recipients, subject, note } = req.body;

  if (!summary || !recipients || !recipients.length) {
    return res.status(400).json({ error: "Summary and recipients required" });
  }

  try {
    const result = await sendSummary({ summary, recipients, subject, note });
    res.json(result);
  } catch (error) {
    console.error("Error sharing summary:", error);
    res.status(500).json({ error: "Failed to share summary" });
  }
};
