async function fetchMovieData(id) {
  try {
    const response = await fetch(`http://localhost:3000/api/movieData/${id}`);
    const data = await response.json();
    console.log(data);
    const movie = document.getElementById("movie-card");
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("movie__card--title");
    titleDiv.innerHTML = `
      <h1>${data.original_title} - ${data.release_date.split("-")[0]}</h1>
    `;
    movie.appendChild(titleDiv);
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("movie__card--parent");
    const movieDiv = document.createElement("div");
    movieDiv.classList.add("movie__card-detail");
    movieDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${data.poster_path})`;
    parentDiv.appendChild(movieDiv);

    let dataDiv = document.createElement("div");
    dataDiv.classList.add("data__card");
    dataDiv.innerHTML = `
      <p><strong>Overview</strong>: ${data.overview}</p>
      <p><strong>Runtime</strong>: ${data.runtime} minutes</p>
      <p><strong>Genre</strong>: ${data.genres[0].name}</p>
      <p><strong>Main actor: </strong>: ${data.cast[0].name}</p>
    `;
    if (data.homepage !== "") {
      const link = document.createElement("a");
      link.href = data.homepage;
      link.target = "_blank";
      link.textContent = "Visit Website";
      dataDiv.appendChild(link);
    }
    parentDiv.appendChild(dataDiv);
    movie.appendChild(parentDiv);
  } catch (error) {
    console.error("oops");
  }
}

const params = new URLSearchParams(document.location.search);
const id = params.get("id");
window.onload = fetchMovieData(id);
