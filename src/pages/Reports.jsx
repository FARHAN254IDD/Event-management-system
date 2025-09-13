



// import React, { useState } from "react";
// import { Card, Table, Button } from "react-bootstrap";

// export default function Reports() {
//   const [events] = useState([
//     { id: 1, title: "Tech Conference", date: "2025-09-15", location: "Nairobi", attendees: 150 },
//     { id: 2, title: "Music Festival", date: "2025-10-05", location: "Mombasa", attendees: 300 },
//     { id: 3, title: "Business Expo", date: "2025-08-20", location: "Kisumu", attendees: 120 },
//   ]);

//   const today = new Date();
//   const upcomingEvents = events.filter((event) => new Date(event.date) > today);
//   const pastEvents = events.filter((event) => new Date(event.date) < today);

//   const handleGenerateReport = () => {
//     alert("📄 Report generated successfully! (Later we’ll export to PDF/CSV)");
//   };

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4">Event Reports</h2>

//       {/* Summary Cards */}
//       <div className="row mb-4">
//         <div className="col-md-4">
//           <Card className="text-center shadow p-3">
//             <h5>Total Events</h5>
//             <h2>{events.length}</h2>
//           </Card>
//         </div>
//         <div className="col-md-4">
//           <Card className="text-center shadow p-3">
//             <h5>Upcoming Events</h5>
//             <h2>{upcomingEvents.length}</h2>
//           </Card>
//         </div>
//         <div className="col-md-4">
//           <Card className="text-center shadow p-3">
//             <h5>Past Events</h5>
//             <h2>{pastEvents.length}</h2>
//           </Card>
//         </div>
//       </div>

//       {/* Reports Table */}
//       <Card className="shadow p-3">
//         <div className="d-flex justify-content-between align-items-center mb-3">
//           <h4>Detailed Report</h4>
//           <Button variant="primary" onClick={handleGenerateReport}>
//             Generate Report
//           </Button>
//         </div>
//         <Table striped bordered hover responsive>
//           <thead className="table-dark">
//             <tr>
//               <th>#</th>
//               <th>Title</th>
//               <th>Date</th>
//               <th>Location</th>
//               <th>Attendees</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {events.map((event) => {
//               const eventDate = new Date(event.date);
//               const status = eventDate > today ? "Upcoming" : "Past";
//               return (
//                 <tr key={event.id}>
//                   <td>{event.id}</td>
//                   <td>{event.title}</td>
//                   <td>{event.date}</td>
//                   <td>{event.location}</td>
//                   <td>{event.attendees}</td>
//                   <td>
//                     <span
//                       className={`badge ${
//                         status === "Upcoming" ? "bg-success" : "bg-secondary"
//                       }`}
//                     >
//                       {status}
//                     </span>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </Table>
//       </Card>
//     </div>
//   );
// }

// src/pages/Reports.jsx
// import React, { useContext } from "react";
// import { Table, Card } from "react-bootstrap";
// import { ThemeContext } from "../layout/Layout";

// export default function Reports() {
//   const { theme } = useContext(ThemeContext);
//   const bg = theme === "light" ? "light" : "dark";
//   const text = theme === "light" ? "dark" : "light";
//   const cardBg = theme === "light" ? "white" : "#1e1e1e";

//   return (
//     <div className={`p-4 bg-${bg} text-${text}`} style={{ minHeight: "80vh" }}>
//       <h2 className="mb-4">Reports 📊</h2>
//       <Card className="shadow-sm" style={{ background: cardBg }}>
//         <Card.Body>
//           <Table striped bordered hover variant={theme}>
//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>Event</th>
//                 <th>Date</th>
//                 <th>Attendees</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>1</td>
//                 <td>Hackathon 2025</td>
//                 <td>April 10, 2025</td>
//                 <td>120</td>
//               </tr>
//               <tr>
//                 <td>2</td>
//                 <td>Business Expo</td>
//                 <td>April 25, 2025</td>
//                 <td>300</td>
//               </tr>
//             </tbody>
//           </Table>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// }


// src/pages/Reports.jsx
// import React, { useContext, useEffect, useMemo, useState } from "react";
// import { Card, Button, Table, Row, Col, Alert } from "react-bootstrap";
// import { ThemeContext } from "../layout/Layout";
// import { FaDownload } from "react-icons/fa";

// // Fake logged-in user role (later from auth)
// const currentUser = { role: "Admin" }; // "Admin" | "Employee" | "Client"

// export default function Reports() {
//   const { theme } = useContext(ThemeContext);

//   // Theme
//   const bg = theme === "light" ? "light" : "dark";
//   const text = theme === "light" ? "dark" : "light";
//   const cardBg = theme === "light" ? "white" : "#1e1e1e";

//   // Events (shared with Events page)
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     const saved = localStorage.getItem("eventsData");
//     if (saved) setEvents(JSON.parse(saved));
//   }, []);

//   // Derived report
//   const report = useMemo(() => {
//     const total = events.length;
//     const paid = events.filter((e) => e.status === "Paid").length;
//     const unpaid = total - paid;
//     const revenue = events
//       .filter((e) => e.status === "Paid")
//       .reduce((sum, e) => sum + (Number(e.price) || 0), 0);

//     return { total, paid, unpaid, revenue };
//   }, [events]);

//   const generateReport = () => {
//     // For now just alert – later we’ll export CSV/PDF
//     alert(
//       `📊 Report Generated\n\nTotal Events: ${report.total}\nPaid: ${report.paid}\nUnpaid: ${report.unpaid}\nRevenue: KES ${report.revenue.toLocaleString()}`
//     );
//   };

//   return (
//     <div className={`p-4 bg-${bg} text-${text}`} style={{ minHeight: "80vh" }}>
//       <Row className="mb-4">
//         <Col>
//           <h2>Reports</h2>
//           <div className="text-muted">
//             View and generate reports from events data.
//           </div>
//         </Col>
//         <Col className="text-end">
//           {(currentUser.role === "Admin" || currentUser.role === "Employee") && (
//             <Button
//               variant={theme === "light" ? "primary" : "light"}
//               onClick={generateReport}
//             >
//               <FaDownload className="me-2" />
//               Generate Report
//             </Button>
//           )}
//         </Col>
//       </Row>

//       <Row>
//         <Col md={4}>
//           <Card className="mb-3 shadow-sm" style={{ background: cardBg }}>
//             <Card.Body className={`text-${text}`}>
//               <h5>Total Events</h5>
//               <h3>{report.total}</h3>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={4}>
//           <Card className="mb-3 shadow-sm" style={{ background: cardBg }}>
//             <Card.Body className={`text-${text}`}>
//               <h5>Paid Events</h5>
//               <h3>{report.paid}</h3>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={4}>
//           <Card className="mb-3 shadow-sm" style={{ background: cardBg }}>
//             <Card.Body className={`text-${text}`}>
//               <h5>Unpaid Events</h5>
//               <h3>{report.unpaid}</h3>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       <Card className="shadow-sm" style={{ background: cardBg }}>
//         <Card.Body className={`text-${text}`}>
//           <h5>Event Details</h5>
//           {events.length === 0 ? (
//             <Alert variant="info" className="mt-3">
//               No events available for reports.
//             </Alert>
//           ) : (
//             <Table responsive striped hover variant={theme} className="mt-3">
//               <thead>
//                 <tr>
//                   <th>Title</th>
//                   <th>Date</th>
//                   <th>Location</th>
//                   <th>Price (KES)</th>
//                   <th>Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {events.map((ev) => (
//                   <tr key={ev.id}>
//                     <td>{ev.title}</td>
//                     <td>{ev.date}</td>
//                     <td>{ev.location}</td>
//                     <td>{Number(ev.price).toLocaleString()}</td>
//                     <td>{ev.status}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           )}
//         </Card.Body>
//       </Card>
//     </div>
//   );
// }

// src/pages/Reports.jsx
import { useState } from "react";
import { Card, Button, Table, Form } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

export default function Reports() {
  const { user } = useAuth();
  const [reports, setReports] = useState([
    { id: 1, name: "Monthly Events Report", date: "2025-08-01", createdBy: "Admin" },
    { id: 2, name: "Attendance Report", date: "2025-08-15", createdBy: "Employee" },
  ]);
  const [newReport, setNewReport] = useState("");

  const handleGenerateReport = (e) => {
    e.preventDefault();
    if (!newReport) return;

    const report = {
      id: reports.length + 1,
      name: newReport,
      date: new Date().toISOString().split("T")[0],
      createdBy: user.username,
    };

    setReports([...reports, report]);
    setNewReport("");
  };

  return (
    <div className="p-4">
      <h2 className="mb-4">Reports</h2>

      {/* Generate Report (Admin & Employee only) */}
      {(user.role === "Admin" || user.role === "Employee") && (
        <Card className="mb-4 p-3 shadow-sm">
          <h5>Generate New Report</h5>
          <Form onSubmit={handleGenerateReport} className="d-flex gap-2">
            <Form.Control
              placeholder="Enter Report Name"
              value={newReport}
              onChange={(e) => setNewReport(e.target.value)}
            />
            <Button type="submit" variant="success">
              Generate
            </Button>
          </Form>
        </Card>
      )}

      {/* Reports List */}
      <Card className="shadow-sm">
        <Card.Body>
          <h5>All Reports</h5>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Report</th>
                <th>Date</th>
                <th>Created By</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report, index) => (
                <tr key={report.id}>
                  <td>{index + 1}</td>
                  <td>{report.name}</td>
                  <td>{report.date}</td>
                  <td>{report.createdBy}</td>
                  <td>
                    <Button size="sm" variant="outline-primary">
                      📥 Download
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
}




