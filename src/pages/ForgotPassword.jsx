



import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleForgotPassword = (e) => {
    e.preventDefault();

    if (!email) {
      setError("⚠️ Please enter your email address.");
      return;
    }

    setError("");
    setMessage(`✅ Password reset link has been sent to ${email}`);
    setEmail("");
    // Later this will connect to backend API to send reset email
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Card className="p-4 shadow-lg" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Forgot Password</h2>

        {error && <Alert variant="danger">{error}</Alert>}
        {message && <Alert variant="success">{message}</Alert>}

        <Form onSubmit={handleForgotPassword}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter your email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid">
            <Button variant="primary" type="submit">
              Send Reset Link
            </Button>
          </div>
        </Form>

        <div className="text-center mt-3">
          <Link to="/login">Back to Login</Link>
        </div>
      </Card>
    </div>
  );
}

