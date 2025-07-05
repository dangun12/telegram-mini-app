export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const { user_id, username } = req.body;

  if (!user_id || !username) {
    return res.status(400).send("Missing user_id or username");
  }

  const scriptURL = "https://script.google.com/macros/s/AKfycbwjrSorZtiMNr-3rayKgIwVNlNJx1HQ6Mc7I-XKOpoy-YbK0ipzHN3aiJCSSE4Z7wUA/exec";

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id, username })
    });

    const text = await response.text();
    return res.status(200).send(text);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).send("Internal Server Error");
  }
}
