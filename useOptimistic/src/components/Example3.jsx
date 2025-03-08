import React, { useState } from "react";

function Example3() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Smartphone", price: 799 },
    { id: 3, name: "Headphones", price: 199 },
  ]);

  const [optimisticState, setOptimisticState] = useState([]);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];

    // Optimistically update the UI
    setCart(updatedCart);

    // Save the current cart state for possible rollback
    setOptimisticState((prev) => [...prev, { id: product.id, action: "add" }]);

    // Simulate network delay (e.g., server call)
    setTimeout(() => {
      // After the timeout, we assume the item was successfully added to the cart
      console.log(`${product.name} added to the cart!`);
    }, 500);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);

    // Optimistically update the UI
    setCart(updatedCart);

    // Save the current cart state for possible rollback
    const product = cart.find((item) => item.id === productId);
    setOptimisticState((prev) => [...prev, { id: productId, action: "remove", product }]);

    // Simulate network delay (e.g., server call)
    setTimeout(() => {
      // After the timeout, we assume the item was successfully removed from the cart
      console.log(`${product.name} removed from the cart!`);
    }, 500);
  };

  const undoAction = (id) => {
    const optimisticChange = optimisticState.find((state) => state.id === id);
    if (!optimisticChange) return;

    if (optimisticChange.action === "add") {
      // Rollback the "add to cart" action by removing the item
      setCart(cart.filter((item) => item.id !== id));
    } else if (optimisticChange.action === "remove") {
      // Rollback the "remove from cart" action by adding the item back
      setCart([...cart, optimisticChange.product]);
    }

    // Remove the optimistic state
    setOptimisticState((prevState) =>
      prevState.filter((state) => state.id !== id)
    );
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>

      {/* For testing rollback/undo functionality */}
      {/* Uncomment the button below to simulate undoing an action */}
      {/* <button onClick={() => undoAction(1)}>Undo Action</button> */}
    </div>
  );
}

export default Example3;


