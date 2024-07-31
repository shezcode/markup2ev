let apiData = [];

async function fetchTopRatedMovies() {
  try {
    const response = await fetch('http://localhost:3000/api/topRated');
    const data = await response.json();
    apiData = data.results;
    console.log(data);
    displayData(apiData);
  } catch (error) {
    console.error(error);
  }
}

window.onload = fetchTopRatedMovies();
