import React, { useMemo, useState } from 'react';

function App() {
  const [items] = useState([
    { name: 'Shirt', price: 20 },
    { name: 'Shoes', price: 50 },
    { name: 'Hat', price: 15 }
  ]);
  const [discount, setDiscount] = useState(0);

  const totalPrice = useMemo(() => {
    console.log('Calculating total price...');
    const total = items.reduce((sum, item) => sum + item.price, 0);
    return total - discount;
  }, [items, discount]);

  return (
    <div>
      <p>Total Price: ${totalPrice}</p>

      <button onClick={() => setDiscount(discount + 5)}>Apply Discount</button>
    </div>
  );
}
export default App;