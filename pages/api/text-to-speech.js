import fetch from "node-fetch"; // Import the 'fetch' function for server-side API requests

export default async (req, res) => {
  try {
    const selectedVoiceId = req.body.voice_id; // Replace with the actual selected voice ID
    const message = req.body.text; // Assuming you pass the text in the request body
    console.log(selectedVoiceId);
    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${selectedVoiceId}`,
      {
        method: "POST",
        headers: {
          accept: "audio/mpeg",
          "Content-Type": "application/json",
          "xi-api-key": "88c5d93956a921db7882f5735a25784f",
        },
        body: JSON.stringify({
          text: message,
          voice_settings: {
            stability: 0,
            similarity_boost: 0,
          },
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    // Set the appropriate response headers for an MP3 file
    res.setHeader("Content-Type", "audio/mpeg");
    res.status(200).send(await response.buffer()); // Return the MP3 file
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
