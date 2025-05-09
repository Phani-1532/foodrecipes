import React, { useState } from 'react';
import Recipes from './Recipes';
import './App.css'; // Importing the new CSS

const App = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const apiKey = 'N6pqyNEDdZKmGweSMAhGuw==7VD4EgWvKOA81rOz';

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`https://api.api-ninjas.com/v1/recipe?query=${search}`, {
      headers: {
        'x-api-key': apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => setSearch(''))
      .catch((err) => console.log('Error: ' + err));
  };

  console.log(data)

  return (
    <div className="app-container">
      <div className="app-header">
        <h4>Food Recipe App</h4>
      </div>
      <form onSubmit={submitHandler} className="search-form">
        <input
          type="text"
          placeholder="Search for recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <input type="submit" className="search-button" value="Search" />
      </form>
      <div className="results-container">
        {data.length >= 1 ? (
          <Recipes data={data} />
        ) : (
          <div className="no-results">
            <h1>
              No recipes found. Try <mark>searching</mark> for something else!
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
