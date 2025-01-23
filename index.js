const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors()); // Allow requests from different origins

const port = 3000;

app.use(express.json()); 

// In-memory user storage (for this example)
const users = [];

app.post('/signup', (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  // Check if user already exists (simplified)
  if (users.some(user => user.email === email)) {
    return res.status(400).json({ message: 'Email already exists' });
  }

  users.push({ email, password }); 

  res.status(201).json({ message: 'Signup successful!' });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(user => user.email === email && user.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  res.status(200).json({ message: 'Login successful!' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
