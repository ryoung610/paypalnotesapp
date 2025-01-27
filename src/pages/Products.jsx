import React from 'react'
import '../styles/Storefront.css'; 


const Products = () => {

    const prodImagePath01 = '/assets/blacksunglasses.jpeg';
    const prodImagePath02 = '/assets/lllsunglasses.jpg';
    
    const sunglassesData = [
        {
          id: '1',
          name: 'Classic Aviator',
          price: 59.99,
          image: prodImagePath01 
        },
        {
          id: '2',
          name: 'Retro Round',
          price: 29.99,
          image: prodImagePath02
        },
        // Add more sunglasses data as needed
      ];


  return (
    <div className="storefront">
      <h1 className="headline">Cool Summer Vibes with Tech Style</h1>
      <div className="sunglasses-container">
        {sunglassesData.map((sunglasses) => (
          <div key={sunglasses.id} className="sunglasses-item">
            <img src={sunglasses.image} alt={sunglasses.name} className="sunglasses-image" />
            <h2>{sunglasses.name}</h2>
            <p>${sunglasses.price}</p>
            <button className="buy-now-btn" onClick={() => addToCart(sunglasses)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products