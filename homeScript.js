document.addEventListener('DOMContentLoaded', function () {

  async function fetchTopRatedMovies() {

    try {
      const response = await fetch('http://localhost:3000/api/topRated');
      const data = await response.json();
      console.log(data);
      data.results.forEach(movie => {
        console.log(movie.original_title, "-", movie.release_date.split("-")[0]);
      });

      const movies = document.getElementById('movie-list');
      data.results.forEach(movie => {

        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');
        movieDiv.innerHTML = `
          <h3>${movie.original_title}</h3>
          <h4>${movie.release_date.split("-")[0]}</h4>
          <button onclick="viewDetails(${movie.id})">View Details</button>
        `;
        movies.appendChild(movieDiv);
      })
      //document.getElementById('title').textContent = data.title;
      //document.getElementById('intImg').src = `https://image.tmdb.org/t/p/original/${data.poster_path}`
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchMovieData(id){
    try {
      const response = await fetch(`http://localhost:3000/api/movieData?id=${id}`);
      const data = await response.json();
      console.log(data);
    } catch (error){
      console.error(error);
    }
  }

  fetchTopRatedMovies();
})

  //make this work, details page not being dynamic
  function viewDetails(id){
    window.location.href = `detail.html?id=${id}`
    fetchMovieData(id);
  }



