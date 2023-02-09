import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

const waffles = [
  { id: 1, name: "Mapple Butter", price: 79 },
  { id: 2, name: "Death by Chocolate", price: 89 },
  { id: 4, name: "triple Chocolate", price: 89 },
  { id: 5, name: "Butterscotch Scrunch", price: 89 },
  { id: 6, name: "Dark Choco", price: 89 },
  { id: 7, name: "Coffee break", price: 89 },
  { id: 8, name: "Milk Choco", price: 89 },
  { id: 9, name: "Cotton Candy", price: 89 },
  { id: 10, name: "Cookie and Cream", price: 89 },
  { id: 11, name: "White Choco", price: 89 },
  { id: 12, name: "Bubblegum Blast", price: 89 },
  { id: 13, name: "Naughty Nutella", price: 89 },
  { id: 14, name: "Dark White Choco", price: 89 },
  { id: 15, name: "Krazy kitkat", price: 99 },
  { id: 16, name: "Only Oreo", price: 99 },
  { id: 17, name: "Gems Magic", price: 99 },
  { id: 17, name: "Malai Choco", price: 99 },
];
const Cart = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(localCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (waffle) => {
    setButtonClicked(true);
    setTimeout(() => {
      setButtonClicked(false);
    }, 500);
    
    let newCart = [...cart];
    const index = newCart.findIndex((item) => item.id === waffle.id);

    if (index === -1) {
      newCart.push({ ...waffle, count: 1 });
    } else {
      newCart[index].count++;
    }

    setCart(newCart);
    
  };

  const removeFromCart = (waffle) => {
    let newCart = [...cart];
    const index = newCart.findIndex((item) => item.id === waffle.id);

    if (index !== -1) {
      if (newCart[index].count > 1) {
        newCart[index].count--;
      } else {
        newCart.splice(index, 1);
      }
      setCart(newCart);
    }
  };


  

  const checkout = () => {
    // Perform checkout logic, for example sending the cart items to a server for processing
    console.log("Checking out", cart);

    // Clear the cart after checkout
    setCart([]);
  };


  const toggleCart = () => setShowCart(!showCart);

  return (
    <div>
      {waffles.map((waffle) => (
        <div key={waffle.id}>
          <p>
            {waffle.name} - ₹{waffle.price}
          </p>

          <button
            className={`${styles.addtocart} ${
              buttonClicked ? styles.addtocartClicked : ""
            }`}
            onClick={() => addToCart(waffle)}
          >
            Add to Cart</button>
        </div>
      ))}
      <div
        onClick={toggleCart}
        style={{ position: "fixed", top: 10, right: 10 }}
      >
        Cart ({cart.reduce((acc, cur) => acc + cur.count, 0)})
      </div>
      {showCart && (
        <div
          style={{
            position: "fixed",
            top: 50,
            right: 10,
            background: "white",
            padding: 20,
          }}
        >
          <h2>Cart</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ₹{item.price} x {item.count} = ₹
                {item.price * item.count}
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>
            Total: ₹{cart.reduce((acc, cur) => acc + cur.price * cur.count, 0)}
          </p>
          <button onClick={checkout}>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
