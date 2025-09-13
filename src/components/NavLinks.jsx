// src/components/NavLinks.jsx
import { NavLink } from "react-router-dom";
import { ListGroup, Nav } from "react-bootstrap";

export default function NavLinks({ user, as = "nav" }) {
  if (as === "list") {
    // Sidebar style (ListGroup)
    return (
      <>
        <ListGroup.Item as={NavLink} to="/" end>
          Home
        </ListGroup.Item>

        {user && (user.role === "Admin" || user.role === "Employee") && (
          <>
            <ListGroup.Item as={NavLink} to="/events">
              Events
            </ListGroup.Item>
            <ListGroup.Item as={NavLink} to="/reports">
              Reports
            </ListGroup.Item>
          </>
        )}

        {user && user.role === "Client" && (
          <ListGroup.Item as={NavLink} to="/my-events">
            My Events
          </ListGroup.Item>
        )}
      </>
    );
  }

  // Navbar style (Nav links)
  return (
    <>
      <Nav.Link as={NavLink} to="/" end>
        Home
      </Nav.Link>

      {user && (user.role === "Admin" || user.role === "Employee") && (
        <>
          <Nav.Link as={NavLink} to="/events">
            Events
          </Nav.Link>
          <Nav.Link as={NavLink} to="/reports">
            Reports
          </Nav.Link>
        </>
      )}

      {user && user.role === "Client" && (
        <Nav.Link as={NavLink} to="/my-events">
          My Events
        </Nav.Link>
      )}
    </>
  );
}
