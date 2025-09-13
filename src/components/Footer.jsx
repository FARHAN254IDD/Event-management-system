



// export default function Footer() {
//   return (
//     <footer className="bg-dark text-light pt-5 pb-3 mt-auto">
//       <div className="container">
//         <div className="row">
//           {/* Brand & About */}
//           <div className="col-md-4 mb-3">
//             <h5 className="fw-bold">🎉 Event System</h5>
//             <p className="text-muted">
//               Organize, manage, and track your events with ease.  
//               Built with React + Node.js + Bootstrap.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div className="col-md-4 mb-3">
//             <h6 className="fw-bold">Quick Links</h6>
//             <ul className="list-unstyled">
//               <li>
//                 <a href="/" className="text-light text-decoration-none">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="/events" className="text-light text-decoration-none">
//                   Events
//                 </a>
//               </li>
//               <li>
//                 <a href="/reports" className="text-light text-decoration-none">
//                   Reports
//                 </a>
//               </li>
//               <li>
//                 <a href="/login" className="text-light text-decoration-none">
//                   Login
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Social Media */}
//           <div className="col-md-4 mb-3">
//             <h6 className="fw-bold">Follow Us</h6>
//             <div className="d-flex gap-3">
//               <a href="#" className="text-light fs-4">
//                 🌐
//               </a>
//               <a href="#" className="text-light fs-4">
//                 🐦
//               </a>
//               <a href="#" className="text-light fs-4">
//                 📘
//               </a>
//               <a href="#" className="text-light fs-4">
//                 📸
//               </a>
//             </div>
//           </div>
//         </div>

//         <hr className="border-secondary" />

//         <div className="text-center small text-muted">
//           © {new Date().getFullYear()} Event System. All Rights Reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }

// src/components/Footer.jsx
// import { useContext } from "react";
// import { ThemeContext } from "../layout/Layout";
// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

// function Footer() {
//   const { darkMode } = useContext(ThemeContext);

//   return (
//     <footer
//       className={`mt-auto py-4 ${
//         darkMode ? "bg-dark text-light" : "bg-light text-dark"
//       }`}
//     >
//       <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
//         {/* Brand */}
//         <div className="mb-3 mb-md-0">
//           <h5 className="mb-0">Event Management System</h5>
//           <small>Making event management simple & powerful</small>
//         </div>

//         {/* Links */}
//         <ul className="nav mb-3 mb-md-0">
//           <li className="nav-item">
//             <a className="nav-link px-2" href="/">Home</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link px-2" href="/events">Events</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link px-2" href="/reports">Reports</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link px-2" href="/login">Login</a>
//           </li>
//         </ul>

//         {/* Socials */}
//         <div>
//           <a href="#" className="me-3 text-decoration-none">
//             <FaFacebook size={20} />
//           </a>
//           <a href="#" className="me-3 text-decoration-none">
//             <FaTwitter size={20} />
//           </a>
//           <a href="#" className="me-3 text-decoration-none">
//             <FaLinkedin size={20} />
//           </a>
//           <a href="#" className="text-decoration-none">
//             <FaInstagram size={20} />
//           </a>
//         </div>
//       </div>

//       {/* Bottom strip */}
//       <div
//         className={`text-center mt-3 pt-3 border-top ${
//           darkMode ? "border-light" : "border-dark"
//         }`}
//       >
//         <small>© {new Date().getFullYear()} Event Management System. All rights reserved.</small>
//       </div>
//     </footer>
//   );
// }

// export default Footer;


// src/components/Footer.jsx
// import { useContext, useState, useEffect } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaArrowUp } from "react-icons/fa";
// import { ThemeContext } from "../layout/Layout";

// export default function Footer() {
//   const { theme } = useContext(ThemeContext);
//   const [showButton, setShowButton] = useState(false);

//   const bg = theme === "light" ? "light" : "dark";
//   const text = theme === "light" ? "dark" : "light";
//   const btnVariant = theme === "light" ? "dark" : "light";


//   // Show button on scroll
//   useEffect(() => {
//     const handleScroll = () => setShowButton(window.scrollY > 200);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <>
//       {/* Footer */}
//       <footer className={`bg-${bg} text-${text} mt-auto py-4`}>
//         <Container>
//           <Row className="align-items-center">
//             {/* Branding */}
//             <Col md={4} className={`footer mt-auto py-3 bg-body-tertiary shadow-sm text-center text-md-start mb-3 mb-md-0 ${theme === "light" ? "bg-light text-dark" : "bg-dark taxt-light"}`}
//             data-aos="fade-up"
//             >
//   <p className="mb-0">© {new Date().getFullYear()} <strong>EventSystem</strong> . All rights reserved.</p>

//             </Col>
            
            

//             {/* Quick Links */}
//             <Col md={4} className="text-center mb-3 mb-md-0">
//               <a href="/" className={`text-${text} me-3 text-decoration-none`}>Home</a>
//               <a href="/events" className={`text-${text} me-3 text-decoration-none`}>Events</a>
//               <a href="/reports" className={`text-${text} me-3 text-decoration-none`}>Reports</a>
//               <a href="/contact" className={`text-${text} text-decoration-none`}>Contact</a>
//             </Col>

//             {/* Social Icons */}
//             <Col md={4} className="text-center text-md-end">
//               <a
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noreferrer"
//                 className={`text-${text} me-3 social-icon facebook`}
//               >
//                 <FaFacebook size={20} />
//               </a>
//               <a
//                 href="https://twitter.com"
//                 target="_blank"
//                 rel="noreferrer"
//                 className={`text-${text} me-3 social-icon twitter`}
//               >
//                 <FaTwitter size={20} />
//               </a>
//               <a
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noreferrer"
//                 className={`text-${text} me-3 social-icon linkedin`}
//               >
//                 <FaLinkedin size={20} />
//               </a>
//               <a
//                 href="https://github.com"
//                 target="_blank"
//                 rel="noreferrer"
//                 className={`text-${text} social-icon github`}
//               >
//                 <FaGithub size={20} />
//               </a>
//             </Col>
//           </Row>
//         </Container>
//       </footer>

//       {/* Floating Back-to-Top */}
//       {showButton && (
//         <button
//           onClick={scrollToTop}
//           // className={`btn btn-${btnVariant}`}
//           className="back-to-top position-fixed bottom-0 end-0 m-4 rounded-circle shadow"
//   variant="primary"
//           // style={{
//           //   position: "fixed",
//           //   bottom: "20px",
//           //   right: "20px",
//           //   borderRadius: "50%",
//           //   padding: "10px 12px",
//           //   zIndex: 1000,
//           // }}
          
//         >
//           {/* <FaArrowUp />    */}  ↑
//         </button>
//       )}
//     </>
//   );
// }



// src/components/Footer.jsx
import { useContext, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaArrowUp } from "react-icons/fa";
import { ThemeContext } from "../layout/Layout";

export default function Footer() {
  const { theme } = useContext(ThemeContext);
  const [showButton, setShowButton] = useState(false);

  const bg = theme === "light" ? "light" : "dark";
  const text = theme === "light" ? "dark" : "light";
  const btnVariant = theme === "light" ? "dark" : "light";

  // Show button on scroll
  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Footer */}
      <footer className={`bg-${bg} text-${text} mt-auto py-4 shadow-lg boarder-top`}>
        <Container>
          <Row className="align-items-center">
            {/* Branding */}
            <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
              
              
              <p className="mb-0">© {new Date().getFullYear()} <strong>EventSystem</strong>. All rights reserved</p>
            </Col>

            {/* Quick Links */}
            <Col md={4} className="text-center mb-3 mb-md-0">
              <a href="/" className={`text-${text} me-3 text-decoration-none`}>Home</a>
              <a href="/events" className={`text-${text} me-3 text-decoration-none`}>Events</a>
              <a href="/reports" className={`text-${text} me-3 text-decoration-none`}>Reports</a>
              <a href="/contact" className={`text-${text} text-decoration-none`}>Contact</a>
            </Col>

            {/* Social Icons */}
            <Col md={4} className="text-center text-md-end">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className={`text-${text} me-3 social-icon facebook`}
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className={`text-${text} me-3 social-icon twitter`}
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className={`text-${text} me-3 social-icon linkedin`}
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className={`text-${text} social-icon github`}
              >
                <FaGithub size={20} />
              </a>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Floating Back-to-Top */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className={`btn btn-${btnVariant}`}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            borderRadius: "50%",
            padding: "10px 12px",
            zIndex: 1000,
          }}
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}
