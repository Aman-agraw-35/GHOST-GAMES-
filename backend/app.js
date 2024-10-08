import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import axios from 'axios';
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();
const PORT = 8000;
const JWT_SECRET = 'your_jvdfvbrvrtvrvwt_secret'; // Replace with a strong secret key

// MongoDB connection
mongoose.connect("mongodb+srv://aman:hehe@cluster0.v6ixzty.mongodb.net/ghostuser", { useNewUrlParser: true, useUnifiedTopology: true });


// Schema and model
const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);
const saltRounds = 10;

app.use(bodyParser.json());
app.use(cors({
  origin: 'https://ghost-games-jade.vercel.app',
  credentials: true
}));



// Middleware to authenticate JWT
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    console.log("Unauthorized access - No token provided");
    return res.sendStatus(401);
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      console.log("Unauthorized access - Invalid token");
      return res.sendStatus(403);
    }
    req.user = user;
    console.log("Authorized access - Token valid for user:", user.email);
    next();
  });
};

var ide ;
var gamer ;
// Signup route
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    console.log("Signup error - Email or password missing");
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("Signup error - Email already registered:", email);
      return res.status(400).json({ message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({ email, password: hashedPassword });

    await newUser.save();
    const token = jwt.sign({ email: newUser.email }, JWT_SECRET, { expiresIn: '1d' });
    console.log("Signup success - User registered:", newUser.email);
    return res.status(201).json({ message: 'User registered successfully', token });
  } catch (error) {
    console.error('Signup error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    console.log("Login error - Email or password missing");
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log("Login error - User not found:", email);
      return res.status(400).json({ message: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      console.log("Login error - Incorrect password for user:", email);
      return res.status(400).json({ message: 'Incorrect password' });
    }

    const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1d' });
    console.log("Login success - User authenticated:", email);
    return res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// Profile route
app.get('/profile', authenticateJWT, (req, res) => {
  console.log("Profile access - User:", req.user.email);
  return res.status(200).json({ message: 'Welcome to your profile', user: req.user.email });
});

// Logout route
app.post('/logout', (req, res) => {
  console.log("Logout request received - JWT does not need server-side logout");
  return res.status(200).json({ message: 'Logout successful' });
});

// Game filtering route
app.get('/api/filter', async (req, res) => {
  try {
    const response = await axios.get('https://www.freetogame.com/api/games');
    return res.json(response?.data);
  } catch (error) {
    console.error('Failed to fetch games:', error.message);
    return res.status(500).json({ message: 'Failed to fetch games' });
  }
});
var gameUrl = "" ;
// Fetch specific game data by ID
app.post('/datas', async (req, res) => {
  ide = req.body.id;

  console.log("id: " + ide);

  gamer = `https://www.freetogame.com/api/game?id=${ide}`;
 

  res.json({ message: 'Gamer variable updated' });
});

app.get('/api', async (req, res) => {
  try {
     console.log(gamer);
    const response = await axios.get(gamer, {
      params: req.query,
    });
    res.json(response.data);
  } catch (error) {
    console.error('Axios Error:', error.message);
    console.error('Axios Response Data:', error.response ? error.response.data : 'N/A');
    console.error('Axios Response Status:', error.response ? error.response.status : 'N/A');
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
