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

