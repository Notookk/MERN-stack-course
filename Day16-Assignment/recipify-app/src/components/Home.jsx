import React from 'react'
import './Home.css'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

function Home() {
  const sliderImages = [
    image1,
    image2,
    image3,
  ];

  const [cardData, setCardData] = React.useState([]);
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  React.useEffect(() => {
    async function fetchMeals() {
      const meals = [];
      for (let i = 0; i < 6; i++) {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        const data = await res.json();
        if (data.meals && data.meals[0]) {
          meals.push({
            img: data.meals[0].strMealThumb,
            title: data.meals[0].strMeal,
            desc: data.meals[0].strCategory + ' | ' + (data.meals[0].strArea || '')
          });
        }
      }
      setCardData(meals);
    }
    fetchMeals();
  }, []);

  return (
    <div className="home-page">
      <p className="p">Welcome to Recipify</p>
      <div className="slider">
        <img src={sliderImages[current]} alt="Food slider" className="slider-img" />
        <div className="slider-controls">
          {sliderImages.map((_, idx) => (
            <span
              key={idx}
              className={current === idx ? 'dot active' : 'dot'}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
      </div>
      <div className="card-grid">
        {cardData.length === 0 ? (
          <p>Loading recipes...</p>
        ) : (
          cardData.map((card, idx) => (
            <div className="card" key={idx}>
              <img src={card.img} alt={card.title} className="card-img" />
              <div className="card-body">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            </div>
          ))
        )}
      <a href="/trending">
        <button className="see-more-btn">See More</button>
      </a>
      </div>
    </div>
  );
}

export default Home