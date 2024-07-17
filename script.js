async function fetchData() {
  try {
    const response = await fetch('http://localhost:3000/api/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
