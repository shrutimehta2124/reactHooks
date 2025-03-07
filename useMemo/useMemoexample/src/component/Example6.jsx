import React, { useMemo, useState } from 'react';

function Example6() {
  // State to hold the list of items with name and price
  const [items] = useState([
    { name: 'Shirt', price: 20 },
    { name: 'Shoes', price: 50 },
    { name: 'Hat', price: 15 }
  ]);

  // State to hold the discount value
  const [discount, setDiscount] = useState(0);

  // useMemo is used to memoize the total price calculation.
  // This ensures the total price is only recalculated when the 'items' or 'discount' state changes.
  const totalPrice = useMemo(() => {
    console.log('Calculating total price...'); // Log to show when the calculation is being done
    // Use reduce to sum up the prices of all items in the array
    const total = items.reduce((sum, item) => sum + item.price, 0);
    // Subtract the discount from the total price
    return total - discount;
  }, [items, discount]); // Dependency array - will recompute only when 'items' or 'discount' changes

  return (
    <div>
      {/* Display the total price */}
      <p>Total Price: ${totalPrice}</p>

      {/* Button to apply a $5 discount */}
      <button onClick={() => setDiscount(discount + 5)}>Apply Discount</button>
    </div>
  );
}

export default Example6;
