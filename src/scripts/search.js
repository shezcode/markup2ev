function displayResults(results) {
    const resultsContainer = document.querySelector('navbar__search--input');
    resultsContainer.innerHTML = '';

    results.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'grid-item';
        itemElement.textContent = item.name + ' - ' + item.description;
        resultsContainer.appendChild(itemElement);
    });
}

// Function to search the data object
function searchItems(query) {
    const lowerCaseQuery = query.toLowerCase();
    const filteredResults = data.filter(item => 
        item.name.toLowerCase().includes(lowerCaseQuery) || 
        item.description.toLowerCase().includes(lowerCaseQuery)
    );
    displayResults(filteredResults);
}

// Event listener for search input
document.querySelector('navbar__search--input').addEventListener('input', (event) => {
    const query = event.target.value;
    searchItems(query);
});

// Initial display of all items
displayResults(data);
