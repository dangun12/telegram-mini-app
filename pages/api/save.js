
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbweWzP0BEnFWdHUWqeO_hVLgbWjB5xTwKWioyei-ysDVnlu8WX4aWyXJYhFR_rcZwpG/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    
    const text = await response.text();
    res.status(200).send(text);
  } catch (error) {
    console.error("Proxy error:", error);
    res.status(500).send('Error');
  }
}
