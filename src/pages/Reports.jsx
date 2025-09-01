



import React, { useState } from "react";
import { Card, Table, Button } from "react-bootstrap";

export default function Reports() {
  const [events] = useState([
    { id: 1, title: "Tech Conference", date: "2025-09-15", location: "Nairobi", attendees: 150 },
    { id: 2, title: "Music Festival", date: "2025-10-05", location: "Mombasa", attendees: 300 },
    { id: 3, title: "Business Expo", date: "2025-08-20", location: "Kisumu", attendees: 120 },
  ]);

  const today = new Date();
  const upcomingEvents = events.filter((event) => new Date(event.date) > today);
  const pastEvents = events.filter((event) => new Date(event.date) < today);

  const handleGenerateReport = () => {
    alert("📄 Report generated successfully! (Later we’ll export to PDF/CSV)");
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Event Reports</h2>

      {/* Summary Cards */}
      <div className="row mb-4">
        <div className="col-md-4">
          <Card className="text-center shadow p-3">
            <h5>Total Events</h5>
            <h2>{events.length}</h2>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="text-center shadow p-3">
            <h5>Upcoming Events</h5>
            <h2>{upcomingEvents.length}</h2>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="text-center shadow p-3">
            <h5>Past Events</h5>
            <h2>{pastEvents.length}</h2>
          </Card>
        </div>
      </div>

      {/* Reports Table */}
      <Card className="shadow p-3">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4>Detailed Report</h4>
          <Button variant="primary" onClick={handleGenerateReport}>
            Generate Report
          </Button>
        </div>
        <Table striped bordered hover responsive>
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Date</th>
              <th>Location</th>
              <th>Attendees</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => {
              const eventDate = new Date(event.date);
              const status = eventDate > today ? "Upcoming" : "Past";
              return (
                <tr key={event.id}>
                  <td>{event.id}</td>
                  <td>{event.title}</td>
                  <td>{event.date}</td>
                  <td>{event.location}</td>
                  <td>{event.attendees}</td>
                  <td>
                    <span
                      className={`badge ${
                        status === "Upcoming" ? "bg-success" : "bg-secondary"
                      }`}
                    >
                      {status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card>
    </div>
  );
}

