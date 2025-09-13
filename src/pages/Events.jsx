


// import React, { useState } from "react";
// import { Table, Button, Modal, Form, Card } from "react-bootstrap";

// export default function Events() {
//   const [events, setEvents] = useState([
//     { id: 1, title: "Tech Conference", date: "2025-09-15", location: "Nairobi", description: "Annual technology conference." },
//     { id: 2, title: "Music Festival", date: "2025-10-05", location: "Mombasa", description: "Live music and performances." },
//   ]);

//   const [showModal, setShowModal] = useState(false);
//   const [newEvent, setNewEvent] = useState({
//     title: "",
//     date: "",
//     location: "",
//     description: "",
//   });

//   const handleShow = () => setShowModal(true);
//   const handleClose = () => setShowModal(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewEvent({ ...newEvent, [name]: value });
//   };

//   const handleAddEvent = (e) => {
//     e.preventDefault();

//     if (!newEvent.title || !newEvent.date || !newEvent.location) {
//       alert("⚠️ Please fill in all required fields.");
//       return;
//     }

//     const eventToAdd = { id: events.length + 1, ...newEvent };
//     setEvents([...events, eventToAdd]);
//     setNewEvent({ title: "", date: "", location: "", description: "" });
//     handleClose();
//   };

//   return (
//     <div className="container mt-4">
//       <Card className="p-4 shadow">
//         <div className="d-flex justify-content-between align-items-center mb-3">
//           <h2>Events</h2>
//           <Button variant="success" onClick={handleShow}>
//             + Add Event
//           </Button>
//         </div>

//         {/* Events Table */}
//         <Table striped bordered hover responsive>
//           <thead className="table-dark">
//             <tr>
//               <th>#</th>
//               <th>Title</th>
//               <th>Date</th>
//               <th>Location</th>
//               <th>Description</th>
//             </tr>
//           </thead>
//           <tbody>
//             {events.map((event) => (
//               <tr key={event.id}>
//                 <td>{event.id}</td>
//                 <td>{event.title}</td>
//                 <td>{event.date}</td>
//                 <td>{event.location}</td>
//                 <td>{event.description}</td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </Card>

//       {/* Add Event Modal */}
//       <Modal show={showModal} onHide={handleClose} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Add New Event</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={handleAddEvent}>
//             <Form.Group className="mb-3" controlId="eventTitle">
//               <Form.Label>Event Title</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="title"
//                 placeholder="Enter event title"
//                 value={newEvent.title}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="eventDate">
//               <Form.Label>Date</Form.Label>
//               <Form.Control
//                 type="date"
//                 name="date"
//                 value={newEvent.date}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="eventLocation">
//               <Form.Label>Location</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="location"
//                 placeholder="Enter location"
//                 value={newEvent.location}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="eventDescription">
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 name="description"
//                 placeholder="Enter event description"
//                 value={newEvent.description}
//                 onChange={handleChange}
//               />
//             </Form.Group>

//             <div className="d-grid">
//               <Button variant="primary" type="submit">
//                 Save Event
//               </Button>
//             </div>
//           </Form>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// }

// src/pages/Events.jsx
// import React, { useContext } from "react";
// import { Card, Row, Col, Button } from "react-bootstrap";
// import { ThemeContext } from "../layout/Layout";

// export default function Events() {
//   const { theme } = useContext(ThemeContext);

//   const bg = theme === "light" ? "light" : "dark";
//   const text = theme === "light" ? "dark" : "light";
//   const cardBg = theme === "light" ? "white" : "#1e1e1e";
//   const cardText = theme === "light" ? "dark" : "light";

//   return (
//     <div className={`p-4 bg-${bg} text-${text}`} style={{ minHeight: "80vh" }}>
//       <h2 className="mb-4">Upcoming Events 📅</h2>

//       <Row>
//         <Col md={6}>
//           <Card
//             className="mb-3 shadow-sm"
//             style={{ background: cardBg }}
//             data-aos="fade-up"
//           >
//             <Card.Body className={`text-${cardText}`}>
//               <h5>Hackathon 2025</h5>
//               <p className="text-muted">
//                 📍 Nairobi, Kenya | April 10, 2025
//               </p>
//               <Button
//                 variant={theme === "light" ? "primary" : "light"}
//                 size="sm"
//               >
//                 Register
//               </Button>
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col md={6}>
//           <Card
//             className="mb-3 shadow-sm"
//             style={{ background: cardBg }}
//             data-aos="fade-up"
//           >
//             <Card.Body className={`text-${cardText}`}>
//               <h5>Business Expo</h5>
//               <p className="text-muted">
//                 📍 Mombasa, Kenya | April 25, 2025
//               </p>
//               <Button
//                 variant={theme === "light" ? "primary" : "light"}
//                 size="sm"
//               >
//                 Register
//               </Button>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// }


// src/pages/Events.jsx
// import React, { useContext, useEffect, useMemo, useState } from "react";
// import {
//   Card,
//   Row,
//   Col,
//   Button,
//   Modal,
//   Form,
//   Table,
//   Badge,
//   InputGroup,
// } from "react-bootstrap";
// import {
//   FaPlus,
//   FaEdit,
//   FaTrash,
//   FaMoneyBillWave,
//   FaSearch,
// } from "react-icons/fa";
// import { ThemeContext } from "../layout/Layout";

// const STORAGE_KEY = "eventsData";

// export default function Events() {
//   const { theme } = useContext(ThemeContext);

//   // Theme helpers
//   const bg = theme === "light" ? "light" : "dark";
//   const text = theme === "light" ? "dark" : "light";
//   const cardBg = theme === "light" ? "white" : "#1e1e1e";

//   // State
//   const [events, setEvents] = useState([]);
//   const [query, setQuery] = useState("");
//   const [showForm, setShowForm] = useState(false);
//   const [editingId, setEditingId] = useState(null);
//   const [showPay, setShowPay] = useState(false);
//   const [payingEvent, setPayingEvent] = useState(null);

//   // Form state
//   const emptyForm = {
//     title: "",
//     date: "",
//     location: "",
//     price: "",
//     description: "",
//   };
//   const [form, setForm] = useState(emptyForm);
//   const [formError, setFormError] = useState("");

//   // Payment state
//   const [mpesaNumber, setMpesaNumber] = useState("");
//   const [payError, setPayError] = useState("");

//   // Load demo data once if none exists
//   useEffect(() => {
//     const saved = localStorage.getItem(STORAGE_KEY);
//     if (saved) {
//       setEvents(JSON.parse(saved));
//     } else {
//       const seed = [
//         {
//           id: crypto.randomUUID(),
//           title: "Hackathon 2025",
//           date: "2025-04-10",
//           location: "Nairobi, Kenya",
//           price: 0,
//           description: "48-hour coding marathon.",
//           status: "Unpaid",
//           createdAt: Date.now(),
//         },
//         {
//           id: crypto.randomUUID(),
//           title: "Business Expo",
//           date: "2025-04-25",
//           location: "Mombasa, Kenya",
//           price: 1500,
//           description: "Showcase your products and network.",
//           status: "Unpaid",
//           createdAt: Date.now(),
//         },
//       ];
//       setEvents(seed);
//     }
//   }, []);

//   // Persist on change
//   useEffect(() => {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
//   }, [events]);

//   // Derived: filtered & sorted
//   const filtered = useMemo(() => {
//     const q = query.trim().toLowerCase();
//     const list = q
//       ? events.filter(
//           (e) =>
//             e.title.toLowerCase().includes(q) ||
//             e.location.toLowerCase().includes(q) ||
//             (e.description || "").toLowerCase().includes(q)
//         )
//       : events.slice();

//     // Sort by upcoming date ascending
//     return list.sort((a, b) => (a.date || "").localeCompare(b.date || ""));
//   }, [events, query]);

//   // Helpers
//   const openCreate = () => {
//     setEditingId(null);
//     setForm(emptyForm);
//     setFormError("");
//     setShowForm(true);
//   };

//   const openEdit = (ev) => {
//     setEditingId(ev.id);
//     setForm({
//       title: ev.title,
//       date: ev.date,
//       location: ev.location,
//       price: ev.price,
//       description: ev.description || "",
//     });
//     setFormError("");
//     setShowForm(true);
//   };

//   const validateForm = () => {
//     if (!form.title || !form.date || !form.location) {
//       return "Please fill in Title, Date and Location.";
//     }
//     if (form.price !== "" && Number(form.price) < 0) {
//       return "Price cannot be negative.";
//     }
//     return "";
//   };

//   const saveForm = (e) => {
//     e.preventDefault();
//     const err = validateForm();
//     if (err) return setFormError(err);

//     if (editingId) {
//       setEvents((prev) =>
//         prev.map((ev) =>
//           ev.id === editingId
//             ? {
//                 ...ev,
//                 ...form,
//                 price: form.price === "" ? 0 : Number(form.price),
//               }
//             : ev
//         )
//       );
//     } else {
//       setEvents((prev) => [
//         ...prev,
//         {
//           id: crypto.randomUUID(),
//           ...form,
//           price: form.price === "" ? 0 : Number(form.price),
//           status: "Unpaid",
//           createdAt: Date.now(),
//         },
//       ]);
//     }
//     setShowForm(false);
//   };

//   const removeEvent = (id) => {
//     if (confirm("Delete this event?")) {
//       setEvents((prev) => prev.filter((e) => e.id !== id));
//     }
//   };

//   // Payment (stub)
//   const openPay = (ev) => {
//     setPayingEvent(ev);
//     setMpesaNumber("");
//     setPayError("");
//     setShowPay(true);
//   };

//   const validatePhone = (phone) => {
//     // Simple KE pattern: 07XX..., 01XX..., or +2547/1...
//     const p = phone.replace(/\s+/g, "");
//     const re = /^(?:\+2547\d{8}|\+2541\d{8}|07\d{8}|01\d{8})$/;
//     return re.test(p);
//   };

//   const confirmPay = (e) => {
//     e.preventDefault();
//     if (!validatePhone(mpesaNumber)) {
//       return setPayError("Enter a valid M-Pesa phone number (e.g. 07XXXXXXXX or +2547XXXXXXXX).");
//     }
//     // Simulate success
//     setEvents((prev) =>
//       prev.map((ev) =>
//         ev.id === payingEvent.id ? { ...ev, status: "Paid" } : ev
//       )
//     );
//     setShowPay(false);
//     alert("✅ Payment simulated. (We’ll wire real M-Pesa in the backend.)");
//   };

//   const StatusBadge = ({ status }) => {
//     const variant =
//       status === "Paid" ? "success" : status === "Unpaid" ? "secondary" : "warning";
//     return <Badge bg={variant}>{status}</Badge>;
//   };

//   return (
//     <div className={`p-4 bg-${bg} text-${text}`} style={{ minHeight: "80vh" }}>
//       {/* Header */}
//       <Row className="align-items-center mb-4">
//         <Col md={6}>
//           <h2 className="mb-0">Events</h2>
//           <div className="text-muted">Create, manage, and accept payments.</div>
//         </Col>
//         <Col md={6} className="d-flex justify-content-md-end mt-3 mt-md-0">
//           <InputGroup className="me-2" style={{ maxWidth: 280 }}>
//             <InputGroup.Text>
//               <FaSearch />
//             </InputGroup.Text>
//             <Form.Control
//               placeholder="Search events..."
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//             />
//           </InputGroup>
//           <Button
//             variant={theme === "light" ? "primary" : "light"}
//             onClick={openCreate}
//           >
//             <FaPlus className="me-2" />
//             Add Event
//           </Button>
//         </Col>
//       </Row>

//       {/* List */}
//       <Card className="shadow-sm" style={{ background: cardBg }}>
//         <Card.Body className={`text-${text}`}>
//           <Table responsive hover striped variant={theme}>
//             <thead>
//               <tr>
//                 <th>Title</th>
//                 <th>Date</th>
//                 <th>Location</th>
//                 <th>Price (KES)</th>
//                 <th>Status</th>
//                 <th style={{ width: 220 }}>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filtered.length === 0 ? (
//                 <tr>
//                   <td colSpan="6" className="text-center py-4 text-muted">
//                     No events found.
//                   </td>
//                 </tr>
//               ) : (
//                 filtered.map((ev) => (
//                   <tr key={ev.id}>
//                     <td className="fw-semibold">{ev.title}</td>
//                     <td>{ev.date || "-"}</td>
//                     <td>{ev.location}</td>
//                     <td>{Number(ev.price).toLocaleString()}</td>
//                     <td>
//                       <StatusBadge status={ev.status} />
//                     </td>
//                     <td>
//                       <div className="d-flex gap-2">
//                         <Button
//                           size="sm"
//                           variant={theme === "light" ? "outline-primary" : "outline-light"}
//                           onClick={() => openEdit(ev)}
//                         >
//                           <FaEdit className="me-1" /> Edit
//                         </Button>
//                         <Button
//                           size="sm"
//                           variant="outline-danger"
//                           onClick={() => removeEvent(ev.id)}
//                         >
//                           <FaTrash className="me-1" /> Delete
//                         </Button>
//                         <Button
//                           size="sm"
//                           variant={ev.status === "Paid" ? "success" : "warning"}
//                           disabled={ev.status === "Paid"}
//                           onClick={() => openPay(ev)}
//                         >
//                           <FaMoneyBillWave className="me-1" />
//                           {ev.status === "Paid" ? "Paid" : "Pay M-Pesa"}
//                         </Button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </Table>
//         </Card.Body>
//       </Card>

//       {/* Add / Edit Modal */}
//       <Modal show={showForm} onHide={() => setShowForm(false)} centered>
//         <Form onSubmit={saveForm}>
//           <Modal.Header closeButton className={`bg-${bg} text-${text}`}>
//             <Modal.Title>{editingId ? "Edit Event" : "Add Event"}</Modal.Title>
//           </Modal.Header>
//           <Modal.Body className={`bg-${bg} text-${text}`}>
//             {formError && <div className="alert alert-danger">{formError}</div>}

//             <Row className="g-3">
//               <Col md={12}>
//                 <Form.Label>Title *</Form.Label>
//                 <Form.Control
//                   value={form.title}
//                   onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
//                   placeholder="e.g. Annual Tech Conference"
//                 />
//               </Col>
//               <Col md={6}>
//                 <Form.Label>Date *</Form.Label>
//                 <Form.Control
//                   type="date"
//                   value={form.date}
//                   onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
//                 />
//               </Col>
//               <Col md={6}>
//                 <Form.Label>Location *</Form.Label>
//                 <Form.Control
//                   value={form.location}
//                   onChange={(e) =>
//                     setForm((f) => ({ ...f, location: e.target.value }))
//                   }
//                   placeholder="e.g. Nairobi, Kenya"
//                 />
//               </Col>
//               <Col md={6}>
//                 <Form.Label>Price (KES)</Form.Label>
//                 <Form.Control
//                   type="number"
//                   min="0"
//                   value={form.price}
//                   onChange={(e) =>
//                     setForm((f) => ({ ...f, price: e.target.value }))
//                   }
//                   placeholder="e.g. 1500"
//                 />
//               </Col>
//               <Col md={12}>
//                 <Form.Label>Description</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   rows={3}
//                   value={form.description}
//                   onChange={(e) =>
//                     setForm((f) => ({ ...f, description: e.target.value }))
//                   }
//                   placeholder="Short details about this event..."
//                 />
//               </Col>
//             </Row>
//           </Modal.Body>
//           <Modal.Footer className={`bg-${bg} text-${text}`}>
//             <Button variant="secondary" onClick={() => setShowForm(false)}>
//               Cancel
//             </Button>
//             <Button variant={theme === "light" ? "primary" : "light"} type="submit">
//               {editingId ? "Save Changes" : "Create Event"}
//             </Button>
//           </Modal.Footer>
//         </Form>
//       </Modal>

//       {/* M-Pesa Payment Modal (stub) */}
//       <Modal show={showPay} onHide={() => setShowPay(false)} centered>
//         <Form onSubmit={confirmPay}>
//           <Modal.Header closeButton className={`bg-${bg} text-${text}`}>
//             <Modal.Title>Pay with M-Pesa</Modal.Title>
//           </Modal.Header>
//           <Modal.Body className={`bg-${bg} text-${text}`}>
//             {payingEvent && (
//               <>
//                 <p className="mb-2">
//                   <strong>Event:</strong> {payingEvent.title}
//                 </p>
//                 <p className="mb-3">
//                   <strong>Amount:</strong> KES{" "}
//                   {Number(payingEvent.price || 0).toLocaleString()}
//                 </p>
//               </>
//             )}

//             {payError && <div className="alert alert-danger">{payError}</div>}

//             <Form.Label>M-Pesa Phone Number</Form.Label>
//             <Form.Control
//               placeholder="07XXXXXXXX or +2547XXXXXXXX"
//               value={mpesaNumber}
//               onChange={(e) => setMpesaNumber(e.target.value)}
//             />
//             <small className="text-muted">
//               This is a demo. We’ll connect to Daraja API in the backend.
//             </small>
//           </Modal.Body>
//           <Modal.Footer className={`bg-${bg} text-${text}`}>
//             <Button variant="secondary" onClick={() => setShowPay(false)}>
//               Cancel
//             </Button>
//             <Button variant={theme === "light" ? "primary" : "light"} type="submit">
//               Confirm Payment
//             </Button>
//           </Modal.Footer>
//         </Form>
//       </Modal>
//     </div>
//   );
// }



// src/pages/Events.jsx
import { useState } from "react";
import { Card, Button, Form, Row, Col, Table } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

export default function Events() {
  const { user } = useAuth();
  const [events, setEvents] = useState([
    { id: 1, title: "Annual Tech Conference", date: "2025-03-15", organizer: "Admin" },
    { id: 2, title: "Community Meetup", date: "2025-03-20", organizer: "Employee" },
  ]);
  const [newEvent, setNewEvent] = useState({ title: "", date: "" });

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (!newEvent.title || !newEvent.date) return;

    const event = {
      id: events.length + 1,
      title: newEvent.title,
      date: newEvent.date,
      organizer: user.username,
    };
    setEvents([...events, event]);
    setNewEvent({ title: "", date: "" });
  };

  return (
    <div className="p-4">
      <h2 className="mb-4">Events</h2>

      {/* Add Event Form (only Admin/Employee) */}
      {(user.role === "Admin" || user.role === "Employee") && (
        <Card className="mb-4 p-3 shadow-sm">
          <h5>Add New Event</h5>
          <Form onSubmit={handleAddEvent}>
            <Row>
              <Col md={5}>
                <Form.Control
                  placeholder="Event Title"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  type="date"
                  value={newEvent.date}
                  onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                />
              </Col>
              <Col md={3}>
                <Button type="submit" variant="primary" className="w-100">
                  Add Event
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>
      )}

      {/* Events List */}
      <Card className="shadow-sm">
        <Card.Body>
          <h5>All Events</h5>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Event</th>
                <th>Date</th>
                <th>Organizer</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={event.id}>
                  <td>{index + 1}</td>
                  <td>{event.title}</td>
                  <td>{event.date}</td>
                  <td>{event.organizer}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
}


