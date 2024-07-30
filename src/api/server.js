const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3000;
require('dotenv').config();

// Replace with your actual API key
const apiKey = process.env.API_KEY;

app.use(cors());

app.get('/api/topRated', async (req, res) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${apiKey}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching top rated data');
  }
});

app.get('/api/movieData/:id', async (req, res) => {
  try {
    const id = req.params.id; 
    console.log("id is: ", id);
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${apiKey}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetch movie data')
  }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
