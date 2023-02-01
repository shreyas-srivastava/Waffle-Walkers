import React, { useState, useEffect } from "react";

const waffles = [
  { id: 1, name: "Classic Belgian Waffle", price: 10 },
  { id: 2, name: "Strawberry Waffle", price: 12 },
  { id: 3, name: "Chocolate Waffle", price: 11 },
  // Add more waffles as desired
];

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(localCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (waffle) => {
    let newCart = [...cart];
    const index = newCart.findIndex((item) => item.id === waffle.id);

    if (index === -1) {
      newCart.push({ ...waffle, count: 1 });
    } else {
      newCart[index].count++;
    }

    setCart(newCart);
  };

  const toggleCart = () => setShowCart(!showCart);

  return (
    <div>
      {waffles.map((waffle) => (
        <div key={waffle.id}>
          <p>{waffle.name} - ${waffle.price}</p>
          <button onClick={() => addToCart(waffle)}>Add to Cart</button>
        </div>
      ))}
      <div onClick={toggleCart} style={{ position: "fixed", top: 10, right: 10 }}>
        Cart ({cart.reduce((acc, cur) => acc + cur.count, 0)})
      </div>
      {showCart && (
        <div style={{ position: "fixed", top: 50, right: 10, background: "white", padding: 20 }}>
          <h2>Cart</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.count} = $
                {item.price * item.count}
              </li>
            ))}
          </ul>
          <p>
            Total: $
            {cart.reduce((acc, cur) => acc + cur.price * cur.count, 0)}
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
