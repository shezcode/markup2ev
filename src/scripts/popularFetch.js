document.addEventListener('DOMContentLoaded', function () {

  async function fetchPopular() {

    try {
      const response = await fetch('http://localhost:3000/api/popular');
      const data = await response.json();
      console.log(data);
      const movies = document.getElementById('popular-movies');

      data.results.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie__card');
        movieDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`
        movieDiv.innerHTML = `
          <h2>${movie.original_title}</h2>
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

  fetchPopular();
})


function viewDetails(id){
  window.location.href = `detail.html?id=${id}`
}


