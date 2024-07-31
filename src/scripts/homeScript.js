document.addEventListener('DOMContentLoaded', function () {

  async function fetchTopRatedMovies() {

    try {
      const response = await fetch('http://localhost:3000/api/topRated');
      const data = await response.json();
      //console.log(data);
      const movies = document.getElementById('movie-list');
      data.results.forEach(movie => {

        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie__card');
        movieDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`
        movieDiv.innerHTML = `
          <h3>${movie.original_title}</h3>
          <h4>${movie.release_date.split("-")[0]}</h4>
          <button class="movie__card--button" onclick="viewDetails(${movie.id})">View Details</button>
        `;
        movies.appendChild(movieDiv);
      })
    } catch (error) {
      console.error(error);
    }
  }



  fetchTopRatedMovies();
})

function viewDetails(id){
  window.location.href = `detail.html?id=${id}`
}



