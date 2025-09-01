


import React, { useState } from "react";
import { Table, Button, Modal, Form, Card } from "react-bootstrap";

export default function Events() {
  const [events, setEvents] = useState([
    { id: 1, title: "Tech Conference", date: "2025-09-15", location: "Nairobi", description: "Annual technology conference." },
    { id: 2, title: "Music Festival", date: "2025-10-05", location: "Mombasa", description: "Live music and performances." },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
  });

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleAddEvent = (e) => {
    e.preventDefault();

    if (!newEvent.title || !newEvent.date || !newEvent.location) {
      alert("⚠️ Please fill in all required fields.");
      return;
    }

    const eventToAdd = { id: events.length + 1, ...newEvent };
    setEvents([...events, eventToAdd]);
    setNewEvent({ title: "", date: "", location: "", description: "" });
    handleClose();
  };

  return (
    <div className="container mt-4">
      <Card className="p-4 shadow">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Events</h2>
          <Button variant="success" onClick={handleShow}>
            + Add Event
          </Button>
        </div>

        {/* Events Table */}
        <Table striped bordered hover responsive>
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Date</th>
              <th>Location</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td>{event.id}</td>
                <td>{event.title}</td>
                <td>{event.date}</td>
                <td>{event.location}</td>
                <td>{event.description}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>

      {/* Add Event Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddEvent}>
            <Form.Group className="mb-3" controlId="eventTitle">
              <Form.Label>Event Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Enter event title"
                value={newEvent.title}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="eventDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={newEvent.date}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="eventLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                placeholder="Enter location"
                value={newEvent.location}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="eventDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                placeholder="Enter event description"
                value={newEvent.description}
                onChange={handleChange}
              />
            </Form.Group>

            <div className="d-grid">
              <Button variant="primary" type="submit">
                Save Event
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}


