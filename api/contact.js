export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, inquiry, message, 'g-recaptcha-response': token } = req.body;

  // 1. verify reCAPTCHA token
  if (!token) {
    return res.status(400).json({ error: 'Missing reCAPTCHA token.' });
  }

  const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET,
      response: token,
    }),
  });

  const verifyData = await verifyRes.json();

  if (!verifyData.success) {
    return res.status(400).json({ error: 'reCAPTCHA verification failed. Please try again.' });
  }

  // 2. forward to Formspree
  const formspreeRes = await fetch('https://formspree.io/f/xpqbnwvl', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ name, email, inquiry, message }),
  });

  const formspreeData = await formspreeRes.json();

  if (!formspreeRes.ok) {
    return res.status(500).json({ error: 'Failed to send message.', details: formspreeData });
  }

  return res.status(200).json({ success: true });
}
