let apiData = [];

async function fetchPopular() {
  try {
    const response = await fetch('http://localhost:3000/api/popular');
    const data = await response.json();
    apiData = data.results;
    //console.log(data);
    displayData(apiData);
  } catch (error) {
    console.error(error);
  }
}

window.onload = fetchPopular();
