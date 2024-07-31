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
    const responseBasic = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${apiKey}`);
    const responseCredits = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&api_key=${apiKey}`); 
    const response = {...responseBasic.data, ...responseCredits.data};
    res.json(response);
  } catch (error) {
    res.status(500).send('Error fetch movie data')
  }
})

app.get('/api/nowPlaying', async (req, res) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetch now playing data')
  }
})

app.get('/api/popular', async (req, res) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetch popular data')
  }
})

app.get('/api/upcoming', async (req, res) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetch upcoming data')
  }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
