







// import React, { useState } from "react";
// import { Form, Button, Card, Alert } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";

// export default function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = (e) => {
//     e.preventDefault();

//     if (!name || !email || !password || !confirmPassword) {
//       setError("⚠️ Please fill in all fields.");
//       return;
//     }

//     if (password.length < 6) {
//       setError("⚠️ Password must be at least 6 characters.");
//       return;
//     }

//     if (password !== confirmPassword) {
//       setError("⚠️ Passwords do not match.");
//       return;
//     }

//     setError("");
//     alert("✅ Registration successful! (Later this will connect to backend)");
//     navigate("/login"); // Redirect to Login after register
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//       <Card className="p-4 shadow-lg" style={{ width: "400px" }}>
//         <h2 className="text-center mb-4">Register</h2>

//         {error && <Alert variant="danger">{error}</Alert>}

//         <Form onSubmit={handleRegister}>
//           <Form.Group className="mb-3" controlId="formName">
//             <Form.Label>Full Name</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="John Doe"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control
//               type="email"
//               placeholder="example@email.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               placeholder="******"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formConfirmPassword">
//             <Form.Label>Confirm Password</Form.Label>
//             <Form.Control
//               type="password"
//               placeholder="******"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//           </Form.Group>

//           <div className="d-grid">
//             <Button variant="success" type="submit">
//               Register
//             </Button>
//           </div>
//         </Form>

//         <div className="text-center mt-3">
//           <Link to="/login">Already have an account? Login</Link>
//         </div>
//       </Card>
//     </div>
//   );
// }






// import React, { useState } from "react";
// import { Form, Button, Card, Alert } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     if (!name || !email || !password || !confirmPassword) {
//       setError("⚠️ Please fill in all fields.");
//       return;
//     }

//     if (password.length < 6) {
//       setError("⚠️ Password must be at least 6 characters.");
//       return;
//     }

//     if (password !== confirmPassword) {
//       setError("⚠️ Passwords do not match.");
//       return;
//     }

//     setError("");
//     setSuccess("");

//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/register", {
//         username: name,
//         email,
//         password,
//       });

//       if (res.status === 201) {
//         setSuccess("✅ Registration successful! Redirecting to login...");
//         setTimeout(() => navigate("/login"), 1500);
//       }
//     } catch (err) {
//       console.error(err);
//       setError(err.response?.data?.message || "❌ Registration failed");
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//       <Card className="p-4 shadow-lg" style={{ width: "400px" }}>
//         <h2 className="text-center mb-4">Register</h2>

//         {error && <Alert variant="danger">{error}</Alert>}
//         {success && <Alert variant="success">{success}</Alert>}

//         <Form onSubmit={handleRegister}>
//           <Form.Group className="mb-3" controlId="formName">
//             <Form.Label>Full Name</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="John Doe"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control
//               type="email"
//               placeholder="example@email.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               placeholder="******"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formConfirmPassword">
//             <Form.Label>Confirm Password</Form.Label>
//             <Form.Control
//               type="password"
//               placeholder="******"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//           </Form.Group>

//           <div className="d-grid">
//             <Button variant="success" type="submit">
//               Register
//             </Button>
//           </div>
//         </Form>

//         <div className="text-center mt-3">
//           <Link to="/login">Already have an account? Login</Link>
//         </div>
//       </Card>
//     </div>
//   );
// }







// import React, { useState } from "react";
// import { Form, Button, Card, Alert, Spinner } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [role, setRole] = useState(""); // added role
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     if (!name || !email || !password || !confirmPassword || !role) {
//       setError("⚠️ Please fill in all fields and select a role.");
//       return;
//     }

//     if (password.length < 6) {
//       setError("⚠️ Password must be at least 6 characters.");
//       return;
//     }

//     if (password !== confirmPassword) {
//       setError("⚠️ Passwords do not match.");
//       return;
//     }

//     try {
//       setLoading(true);
//       setError("");

//       // ✅ Send data to backend
//       await axios.post("http://localhost:5000/api/auth/register", {
//         name,
//         email,
//         password,
//         role,
//       }).then(re => console.log("REGISTERED", res.data))
//         .catch(err => console.log("REGISTER ERROR:", err.response?.data ));

//       navigate("/login");
//     } catch (err) {
//       setError(err.response?.data?.message || "❌ Registration failed.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//       <Card className="p-4 shadow-lg" style={{ width: "400px" }}>
//         <h2 className="text-center mb-4">Register</h2>

//         {error && <Alert variant="danger">{error}</Alert>}

//         <Form onSubmit={handleRegister}>
//           <Form.Group className="mb-3" controlId="formName">
//             <Form.Label>Full Name</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="John Doe"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control
//               type="email"
//               placeholder="example@email.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               placeholder="******"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formConfirmPassword">
//             <Form.Label>Confirm Password</Form.Label>
//             <Form.Control
//               type="password"
//               placeholder="******"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//           </Form.Group>

//           {/* ✅ Role dropdown */}
//           <Form.Group className="mb-3" controlId="formRole">
//             <Form.Label>Select Role</Form.Label>
//             <Form.Select onChange={(e) => setRole(e.target.value)} value={role}>
//               <option value="">-- Choose role --</option>
//               <option value="Admin">Admin</option>
//               <option value="Employee">Employee</option>
//               <option value="Client">Client</option>
//             </Form.Select>
//           </Form.Group>

//           <div className="d-grid">
//             <Button variant="success" type="submit" disabled={loading}>
//               {loading ? "Registering..." : "Register"}
//             </Button>
//           </div>
//         </Form>

//         <div className="text-center mt-3">
//           <Link to="/login">Already have an account? Login</Link>
//         </div>
//       </Card>
//     </div>
//   );
// }







import React, { useState, useContext } from "react";
import { Form, Button, Card, Alert, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

export default function Register() {
  // const { register } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState(""); // ✅ new
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword || !role) {
      setError("⚠️ Please fill in all fields and select a role.");
      return;
    }

    if (password.length < 6) {
      setError("⚠️ Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("⚠️ Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
        role,
      });

      // ✅ Success
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "❌ Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  // const handleRegister = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await register({ name, email, password, role });
  //     navigate("/login"); // redirect after success
  //   } catch (err) {
  //     setError(err.message || "❌ Registration failed");
  //   }
  // };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Card className="p-4 shadow-lg" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Register</h2>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="******"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          {/* ✅ Role selection */}
          <Form.Group className="mb-3" controlId="formRole">
            <Form.Label>Select Role</Form.Label>
            <Form.Select onChange={(e) => setRole(e.target.value)} value={role}>
              <option value="">-- Choose role --</option>
              <option value="Admin">Admin</option>
              <option value="Employee">Employee</option>
              <option value="Client">Client</option>
            </Form.Select>
          </Form.Group>

          <div className="d-grid">
            <Button variant="success" type="submit" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </Button>
          </div>
        </Form>

        <div className="text-center mt-3">
          <Link to="/login">Already have an account? Login</Link>
        </div>
      </Card>
    </div>
  );
}

