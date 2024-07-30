async function fetchMovieData(id){
  try {
    const response = await fetch(`http://localhost:3000/api/movieData/${id}`);
    const data = await response.json();
    const movie = document.getElementById('movie-card');
    const movieDiv = document.createElement('div');
    movieDiv.innerHTML = `
        <h3>${data.original_title}</h3>
        <h4>${data.release_date.split("-")[0]}</h4>
        <img src="https://image.tmdb.org/t/p/original/${data.poster_path}" width="200"/>
        `;
      movie.appendChild(movieDiv);
  } catch (error){
    console.error('oops');
  }
}

const params = new URLSearchParams(document.location.search);
const id = params.get('id');
fetchMovieData(id);
