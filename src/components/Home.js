// src/pages/Home.js
import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Contact from "../components/Contact";
import AboutUs from "../components/AboutUs";
import FeedbackForm from "../components/FeedbackForm";
import Footer from "../components/Footer";
import "./Home.css";

const Home = () => {
  const { addToCart } = useContext(CartContext);

  const foodItems = [
    { id: 1, name: "Pizza", price: 200, image: "/images/pizza.jpg" },
    { id: 2, name: "Burger", price: 150, image: "/images/burger.jpg" },
    { id: 3, name: "Pasta", price: 250, image: "/images/pasta.jpg" },
  ];

  const [quantities, setQuantities] = useState(
    foodItems.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  const handleQuantityChange = (id, value) => {
    if (value < 1) return; // Prevent quantity below 1
    setQuantities((prev) => ({ ...prev, [id]: value }));
  };

  const handleAddToCart = (item) => {
    addToCart({ ...item, quantity: quantities[item.id] });
    alert(`Added ${quantities[item.id]} x ${item.name} to the cart!`);
  };

  return (
    <div className="home-container">
      <h2>Our Menu</h2>
      <div className="food-grid">
        {foodItems.map((item) => (
          <div className="food-card" key={item.id}>
            <img src={item.image} alt={item.name} className="food-image" />
            <div className="food-details">
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <div className="quantity-control">
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, quantities[item.id] - 1)
                  }
                  className="quantity-btn"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantities[item.id]}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value) || 1)
                  }
                  className="quantity-input"
                />
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, quantities[item.id] + 1)
                  }
                  className="quantity-btn"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => handleAddToCart(item)}
                className="add-to-cart-button"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* About Us, Feedback, Contact, and Footer */}
      <AboutUs />
      <FeedbackForm />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
