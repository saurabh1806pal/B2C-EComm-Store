// src/pages/Profile.jsx

function Profile() {
  const user = {
    name: "Thomas Shelby",
    email: "thomas@example.com",
    phone: "+91 9876543210",
    address: "Peaky Street, Birmingham",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Profile</h2>
      <div>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Address:</strong> {user.address}
        </p>
      </div>
    </div>
  );
}

export default Profile;
