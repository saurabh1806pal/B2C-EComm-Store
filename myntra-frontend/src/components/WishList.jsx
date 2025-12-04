// src/pages/Wishlist.jsx

function Wishlist() {
  const wishlistItems = [
    { id: 1, name: "Nike Air Max", price: 12999 },
    { id: 2, name: "Adidas Hoodie", price: 3499 },
    { id: 3, name: "Puma Joggers", price: 2499 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Wishlist</h2>

      {wishlistItems.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "8px 0",
            borderRadius: "8px",
          }}
        >
          <h3>{item.name}</h3>
          <p>₹ {item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Wishlist;
