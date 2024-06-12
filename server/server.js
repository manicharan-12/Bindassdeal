const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(express.json());

app.use(cors());

// In-memory storage for registered users
let users = [];

// Register endpoint
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  // Check if user already exists
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);
  
  // Store the user
  users.push({ username, password: hashedPassword });
  
  res.status(201).json({ message: 'User registered successfully' });
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  // Find the user
  const user = users.find(user => user.username === username);
  if (!user) {
    return res.json({ message: 'User not found' });
  }

  // Check password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.json({ message: 'Invalid credentials' });
  }

  // Generate JWT token
  const token = jwt.sign({ username: user.username }, 'your_jwt_secret', {
    expiresIn: '1h',
  });

  res.status(200).json({ token });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
