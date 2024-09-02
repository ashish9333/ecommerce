function fetchResults() {
    const query = document.getElementById('searchInput').value;
  
    if (query.length > 3) {
      fetch(`/api/search?query=${query}`)
        .then(response => response.json())
        .then(data => {
          const resultsList = document.getElementById('results');
          resultsList.innerHTML = '';
  
          data.forEach(item => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.textContent = item.name;
            resultsList.appendChild(listItem);
          });
        })
        .catch(error => console.error('Error fetching results:', error));
    } else {
      document.getElementById('results').innerHTML = '';
    }
  }
  