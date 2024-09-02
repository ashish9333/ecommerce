const express = require('express');
const app = express();
const PORT = 3000;

const clothingItems = [
  { id: 1, name: 'Red Shirt' },
  { id: 2, name: 'Blue Jeans' },
  { id: 3, name: 'Green Jacket' },
  { id: 4, name: 'Yellow Sweater' },
  { id: 5, name: 'Black Shoes' },
];

app.use(express.static('public'));

app.get('/api/search', (req, res) => {
  console.log(req.query)
  const query = req.query.searchValue.toLowerCase();
  const results = clothingItems.filter(item => 
    item.name.toLowerCase().includes(query)
  );
  res.json(results);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
