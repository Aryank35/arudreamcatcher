const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

export async function askAI(prompt) {
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:5173",
        "X-Title": "Aru Dreamcatchers"
      },
      body: JSON.stringify({
        model: "google/gemma-3-4b-it:free",
        messages: [
          {
            role: "user",
            content: `
You are a smart, friendly and premium photography assistant for "Aru Dreamcatchers".

Your job is to guide users in a very clear, attractive and helpful way.

Rules:
- Keep response short but impactful
- Use clean formatting (line breaks)
- Use relevant emojis (not too many)
- Make it feel like a premium service
- Be confident and helpful

Respond in this format:

🎯 Event: <event type>
👥 Guests: <number>

📸 Recommended Package:
<short suggestion>

💰 Estimated Cost:
₹<range>

✨ Ideas to Make It Special:
- 1 short idea
- 1 short idea

🚀 Tip:
<one smart helpful tip>

User Query: ${prompt}`
          }
        ]
      })
    });

    console.log("STATUS:", response.status);

    const data = await response.json();

    console.log("AI:", data);

    return data?.choices?.[0]?.message?.content || "No response";

  } catch (error) {
    console.error(error);
    return "⚠️ AI error";
  }
}