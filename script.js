document.addEventListener('DOMContentLoaded', function () {
  async function fetchData() {
    try {
      const response = await fetch('http://localhost:3000/api/data');
      const data = await response.json();
      console.log(data);
      document.getElementById('title').textContent = data.title;
      document.getElementById('intImg').src = `https://image.tmdb.org/t/p/original/${data.poster_path}`
    } catch (error) {
      console.error(error);
    }
  }
  fetchData();
})


