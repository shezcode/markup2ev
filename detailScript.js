async function fetchMovieData(id){
  try {
    const response = await fetch(`http://localhost:3000/api/movieData/${id}`);
    const data = await response.json();
    console.log(data);
  } catch (error){
    console.error('oops');
  }
}

const params = new URLSearchParams(document.location.search);
const id = params.get('id');
fetchMovieData(id);
