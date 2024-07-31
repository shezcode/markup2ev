let apiData = [];

async function fetchTopRatedMovies() {
  try {
    const response = await fetch('http://localhost:3000/api/topRated');
    const data = await response.json();
    apiData = data.results;
    //console.log(data);
    displayData(apiData);
  } catch (error) {
    console.error(error);
  }
}


function viewDetails(id){
  window.location.href = `detail.html?id=${id}`
}

function displayData(data){
  let movies = document.getElementById('movie-list');
  movies.innerHTML = '';
  data.forEach(movie => {
    let movieDiv = document.createElement('div');
    movieDiv.classList.add('movie__card');
    movieDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`
    movieDiv.innerHTML = `
      <h3>${movie.original_title}</h3>
      <h4>${movie.release_date.split("-")[0]}</h4>
      <button class="movie__card--button" onclick="viewDetails(${movie.id})">View Details</button>
      `;
    movies.appendChild(movieDiv);
  })
}

document.getElementById("search-form").addEventListener('submit', (event) => {
  event.preventDefault();
  const query = document.querySelector('input').value;
  searchItems(query);
})

function searchItems(query){
  const lowerCaseQuery = query.toLowerCase(); 
  const filteredData = apiData.filter(item => 
    item.title.toLowerCase().includes(lowerCaseQuery)
  );
  displayData(filteredData);
}

window.onload = fetchTopRatedMovies();
