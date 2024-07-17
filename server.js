const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3000;
require('dotenv').config();

// Replace with your actual API key
const apiKey = process.env.API_KEY;

app.use(cors());

app.get('/api/data', async (req, res) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/157336?api_key=${apiKey}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
