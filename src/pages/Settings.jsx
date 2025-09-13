// src/pages/Settings.jsx
import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

export default function Settings() {
  const { user } = useAuth();
  const [theme, setTheme] = useState("light");

  const handleSave = (e) => {
    e.preventDefault();
    alert(`Settings saved! (Theme: ${theme})`);
  };

  return (
    <div className="p-4">
      <h2 className="mb-4">Settings</h2>

      <Card className="shadow-sm p-4">
        <Form onSubmit={handleSave}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" defaultValue={user?.username} disabled />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Theme</Form.Label>
            <Form.Select value={theme} onChange={(e) => setTheme(e.target.value)}>
              <option value="light">Light Mode</option>
              <option value="dark">Dark Mode</option>
            </Form.Select>
          </Form.Group>

          <Button type="submit" variant="success">
            Save Settings
          </Button>
        </Form>
      </Card>
    </div>
  );
}
