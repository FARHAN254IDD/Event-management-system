// src/pages/Contact.jsx
import { Card, Form, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <div className="p-4">
      <h2 className="mb-4">Contact Us</h2>

      <Card className="shadow-sm p-4">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Your message..." required />
          </Form.Group>

          <Button type="submit" variant="primary">
            Send Message
          </Button>
        </Form>
      </Card>
    </div>
  );
}
