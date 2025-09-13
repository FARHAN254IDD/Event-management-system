






// import React, { useState } from "react";
// import { Form, Button, Card, Alert } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError("⚠️ Please fill in all fields.");
//       return;
//     }

//     if (password.length < 6) {
//       setError("⚠️ Password must be at least 6 characters.");
//       return;
//     }

//     setError("");
//     alert("✅ Login successful! (Later this will connect to backend)");
//     navigate("/"); // Redirect to Home
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//       <Card className="p-4 shadow-lg" style={{ width: "400px" }}>
//         <h2 className="text-center mb-4">Login</h2>

//         {error && <Alert variant="danger">{error}</Alert>}

//         <Form onSubmit={handleLogin}>
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

//           <div className="d-grid">
//             <Button variant="primary" type="submit">
//               Login
//             </Button>
//           </div>
//         </Form>

//         <div className="text-center mt-3">
//           <Link to="/forgot-password">Forgot Password?</Link>
//           <br />
//           <Link to="/register">Don’t have an account? Register</Link>
//         </div>
//       </Card>
//     </div>
//   );
// }



// src/pages/Login.jsx
// import React, { useState } from "react";
// import { Form, Button, Card, Alert, Spinner } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!email || !password || !role) {
//       setError("⚠️ Please fill in all fields and select a role.");
//       return;
//     }

   


//     if (password.length < 6) {
//       setError("⚠️ Password must be at least 6 characters.");
//       return;
//     }

//     try {
//       setLoading(true);
//       setError("");

//       // 🔗 Backend login API
//       const res = await axios.post("http://localhost:5000/api/auth/login", {
//         email,
//         password,
//       });

//       // ✅ Assuming backend returns { token, user: { username, email } }
//       sessionStorage.setItem("token", res.data.token);
//       sessionStorage.setItem("user", JSON.stringify(res.data.user));

//       navigate("/"); // Redirect to Home
//     } catch (err) {
//       setError(
//         err.response?.data?.message || "❌ Login failed. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
  // };





// import { useContext, useState } from "react";
// import { Form, Button, Card, Alert, Spinner } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { AuthContext } from "../context/AuthContext";

// export default function Login() {
//   const { login } = useContext(AuthContext);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!email || !password || !role) {
//       setError("⚠️ Please fill in all fields and select a role.");
//       return;
//     }

//     try {
//       setLoading(true);
//       setError("");

//       const res = await axios.post("http://localhost:5000/api/auth/login", {
//         email,
//         password,
//         role,
//       });

//       // ✅ Use AuthContext to save user/token
//       login(res.data.user, res.data.token);

//       // Redirect based on role
//       if (res.data.user.role === "Admin" || res.data.user.role === "Employee") {
//         navigate("/events");
//       } else {
//         navigate("/");
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || "❌ Login failed. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//       <Card className="p-4 shadow-lg" style={{ width: "400px" }}>
//         <h2 className="text-center mb-4">Login</h2>

//         {error && <Alert variant="danger">{error}</Alert>}

//         <Form onSubmit={handleLogin}>
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

//           {/* // inside Login.jsx */}
// <Form.Group className="mb-3" controlId="formRole">
//   <Form.Label>Select Role</Form.Label>
//   <Form.Select onChange={(e) => setRole(e.target.value)} value={role}>
//     <option value="">-- Choose role --</option>
//     <option value="Admin">Admin</option>
//     <option value="Employee">Employee</option>
//     <option value="Client">Client</option>
//   </Form.Select>
// </Form.Group>


//           <div className="d-grid">
//             <Button variant="primary" type="submit" disabled={loading}>
//               {loading ? (
//                 <>
//                   <Spinner size="sm" animation="border" className="me-2" />
//                   Logging in...
//                 </>
//               ) : (
//                 "Login"
//               )}
//             </Button>
//           </div>
//         </Form>

//         <div className="text-center mt-3">
//           <Link to="/forgot-password">Forgot Password?</Link>
//           <br />
//           <Link to="/register">Don’t have an account? Register</Link>
//         </div>
//       </Card>
//     </div>
//   );
// }






// import { useContext, useState } from "react";
// import { Form, Button, Card, Alert, Spinner } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { AuthContext } from "../context/AuthContext";

// export default function Login() {
//   const { login } = useContext(AuthContext);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!email || !password || !role) {
//       setError("⚠️ Please fill in all fields and select a role.");
//       return;
//     }

//     try {
//       setLoading(true);
//       setError("");

//       const res = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         { email, password, role },
//         { withCredentials: true } // ✅ to allow refreshToken cookie
//       );

//       const { user, accessToken } = res.data;

//       // ✅ Save user + accessToken in context
//       login(user, accessToken);

//       // Redirect based on role
//       if (user.role === "Admin" || user.role === "Employee") {
//         navigate("/events");
//       } else {
//         navigate("/");
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || "❌ Login failed. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//       <Card className="p-4 shadow-lg" style={{ width: "400px" }}>
//         <h2 className="text-center mb-4">Login</h2>

//         {error && <Alert variant="danger">{error}</Alert>}

//         <Form onSubmit={handleLogin}>
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
//             <Button variant="primary" type="submit" disabled={loading}>
//               {loading ? (
//                 <>
//                   <Spinner size="sm" animation="border" className="me-2" />
//                   Logging in...
//                 </>
//               ) : (
//                 "Login"
//               )}
//             </Button>
//           </div>
//         </Form>

//         <div className="text-center mt-3">
//           <Link to="/forgot-password">Forgot Password?</Link>
//           <br />
//           <Link to="/register">Don’t have an account? Register</Link>
//         </div>
//       </Card>
//     </div>
//   );
// }







// import { useContext, useState } from "react";
// import { Form, Button, Card, Alert, Spinner } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { AuthContext } from "../context/AuthContext";

// export default function Login() {
//   const { login } = useContext(AuthContext);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!email || !password || !role) {
//       setError("⚠️ Please fill in all fields and select a role.");
//       return;
//     }

//     try {
//       setLoading(true);
//       setError("");

//       const res = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         { email, password },
//         { withCredentials: true } // important for refresh token cookie
//       );

//       // ✅ Save user + access token in AuthContext
//       login(res.data.user, res.data.accessToken);

//       // ✅ Redirect based on role
//       if (res.data.user.role === "Admin" || res.data.user.role === "Employee") {
//         navigate("/events");
//       } else {
//         navigate("/");
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || "❌ Login failed. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//       <Card className="p-4 shadow-lg" style={{ width: "400px" }}>
//         <h2 className="text-center mb-4">Login</h2>

//         {error && <Alert variant="danger">{error}</Alert>}

//         <Form onSubmit={handleLogin}>
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
//             <Button variant="primary" type="submit" disabled={loading}>
//               {loading ? (
//                 <>
//                   <Spinner size="sm" animation="border" className="me-2" />
//                   Logging in...
//                 </>
//               ) : (
//                 "Login"
//               )}
//             </Button>
//           </div>
//         </Form>

//         <div className="text-center mt-3">
//           <Link to="/forgot-password">Forgot Password?</Link>
//           <br />
//           <Link to="/register">Don’t have an account? Register</Link>
//         </div>
//       </Card>
//     </div>
//   );
// }







import { useContext, useState } from "react";
import { Form, Button, Card, Alert, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
// import { loginUser } from "../services/authService";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password || !role) {
      setError("⚠️ Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);
      setError("");


      // ✅ use service instead of raw axios
  //     const res = await loginUser({ email, password});

  //     login(res.user, res.accessToken);

  //     if (res.user.role === "Admin" || res.user.role === "Employee") {
  //       navigate("/events");
  //     } else {
  //       navigate("/");
  //     }
  //   } catch (err) {
  //     setError(err.message || "❌ Login failed. Try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };



      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password },
        { withCredentials: true }
      );

      // ✅ Save user + access token in AuthContext
      login(res.data.user, res.data.accessToken);

      // ✅ Redirect based on role
      if (res.data.user.role === "Admin" || res.data.user.role === "Employee") {
        navigate("/events");
      } else {
        navigate("/");
      }
    } catch (err) {
      setError(err.response?.data?.message || "❌ Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Card className="p-4 shadow-lg" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Login</h2>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleLogin}>
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
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Spinner size="sm" animation="border" className="me-2" />
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </Button>
          </div>
        </Form>

        <div className="text-center mt-3">
          <Link to="/forgot-password">Forgot Password?</Link>
          <br />
          <Link to="/register">Don’t have an account? Register</Link>
        </div>
      </Card>
    </div>
  );
}








