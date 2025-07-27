import React, { useEffect, useState } from 'react';
import './Trending.css';

const TRENDING_CATEGORIES = [
  'Chicken', 'Beef', 'Pasta', 'Seafood', 'Dessert', 'Vegetarian'
];

const Trending = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [modalLoading, setModalLoading] = useState(false);

  useEffect(() => {
    Promise.all(
      TRENDING_CATEGORIES.map(cat =>
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
          .then(res => res.json())
          .then(data => data.meals ? data.meals.slice(0, 2) : [])
      )
    ).then(results => {
      setMeals(results.flat());
      setLoading(false);
    });
  }, []);

  const handleCardClick = (meal) => {
    setModalLoading(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`)
      .then(res => res.json())
      .then(data => {
        setSelectedMeal(data.meals ? data.meals[0] : null);
        setModalLoading(false);
      })
      .catch(() => {
        setSelectedMeal(null);
        setModalLoading(false);
      });
  };

  return (
    <div className="trending-page">
      <h2>Trending Recipes</h2>
      {loading ? <p>Loading...</p> : null}
      <div className="trending-grid">
        {meals.map(meal => (
          <div key={meal.idMeal} className="trending-card" onClick={() => handleCardClick(meal)}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h3>{meal.strMeal}</h3>
          </div>
        ))}
      </div>

      {selectedMeal && (
        <div className="modal-overlay" onClick={() => setSelectedMeal(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedMeal(null)}>&times;</button>
            {modalLoading ? (
              <p>Loading details...</p>
            ) : (
              <>
                <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} className="modal-img" />
                <h2>{selectedMeal.strMeal}</h2>
                <p><b>Category:</b> {selectedMeal.strCategory}</p>
                <p><b>Area:</b> {selectedMeal.strArea}</p>
                <p><b>Instructions:</b></p>
                <p className="modal-instructions">{selectedMeal.strInstructions}</p>
                <a href={selectedMeal.strYoutube} target="_blank" rel="noopener noreferrer" className="modal-link">Watch on YouTube</a>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Trending;
