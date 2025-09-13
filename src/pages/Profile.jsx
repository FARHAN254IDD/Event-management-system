import React from "react";
import { Card } from "react-bootstrap";

export default function Profile() {
  const user = JSON.parse(sessionStorage.getItem("user")) || {
    username: "Guest",
    email: "guest@example.com",
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Card className="p-4 shadow-lg" style={{ width: "500px" }}>
        <h2 className="text-center mb-4">👤 Profile</h2>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role || "User"}</p>
      </Card>
    </div>
  );
}


