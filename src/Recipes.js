import React from 'react';
import './Recipes.css';

function Recipes({ data }) {
  return (
    <div className="recipes-container">
      <div className="recipes-grid">
        {data.map((recipe, index) => (
          <div className="recipe-card" key={index}>
            <div className="recipe-card-inner">
              <img className="recipe-img" src={recipe.img || 'https://via.placeholder.com/300'} alt={recipe.title} />
              <div className="recipe-details">
                <h5 className="recipe-title">{recipe.title}</h5>
                <p className="recipe-text"><strong>Ingredients:</strong> {recipe.ingredients}</p>
                <p className="recipe-text"><strong>Instructions:</strong> {recipe.instructions}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipes;
