import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Search.css';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Search = () => {
  const query = useQuery();
  const searchTerm = query.get('q') || '';
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);

  useEffect(() => {
    if (!searchTerm) return;
    setLoading(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then(res => res.json())
      .then(data => {
        setResults(data.meals || []);
      })
      .catch(() => {
        setResults([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchTerm]);

  return (
    <div className="search-page">
      <h2>Search Results for "{searchTerm}"</h2>
      {loading ? <p>Loading...</p> : null}
      {results.length === 0 && !loading ? <p>No results found.</p> : null}
      <div className="search-results">
        {results.map((meal) => (
          <div key={meal.idMeal} className="search-card" onClick={() => setSelectedMeal(meal)}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h3>{meal.strMeal}</h3>
            <p>{meal.strCategory} | {meal.strArea}</p>
          </div>
        ))}
      </div>

      {selectedMeal && (
        <div className="modal-overlay" onClick={() => setSelectedMeal(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedMeal(null)}>&times;</button>
            <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} className="modal-img" />
            <h2>{selectedMeal.strMeal}</h2>
            <p><b>Category:</b> {selectedMeal.strCategory}</p>
            <p><b>Area:</b> {selectedMeal.strArea}</p>
            <p><b>Instructions:</b></p>
            <p className="modal-instructions">{selectedMeal.strInstructions}</p>
            <a href={selectedMeal.strYoutube} target="_blank" rel="noopener noreferrer" className="modal-link">Watch on YouTube</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
