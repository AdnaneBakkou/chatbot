// pages/api/chatbot.js

import { spawn } from 'child_process';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { userInput } = req.body;

    const process = spawn('python', ['D:\my_venv\chatbotopenai\test.py', userInput]);

    process.stdout.on('data', (data) => {
      res.status(200).json({ response: data.toString() });
    });

    process.stderr.on('data', (data) => {
      res.status(500).json({ error: data.toString() });
    });
  } else {
    res.status(405).json({ message: 'Only POST requests are allowed' });
  }
}
