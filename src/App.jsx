// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       {/* <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */}


//       <div className="flex h-screen items-center justify-center">
//       <h1 className="text-5xl font-bold text-blue-600">
//         Hello Farhan 👋 Tailwind is working!
//       </h1>
//     </div>

//     </>
//   )
// }

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/layout/Navbar";
// import Sidebar from "./components/layout/Sidebar";
// import Footer from "./components/layout/Footer";
// import Home from "./pages/Home";
// import Events from "./pages/Events";
// import Reports from "./pages/Reports";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import ForgotPassword from "./pages/ForgotPassword";


// export default function App() {
//   return (

    

//     <Router>
//       <div className="flex flex-col min-h-screen">
//         <Navbar />
//         <div className="flex flex-1">
//           <Sidebar />
//           <main className="flex-1 p-4">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/events" element={<Events />} />
//               <Route path="/reports" element={<Reports />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/register" element={<Register />} />
//               <Route path="/forgot-password" element={<ForgotPassword />} />
//             </Routes>
//           </main>
//         </div>
//         <Footer />
//       </div>
//     </Router>
//   );
// }


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./layout/Layout";

// // Pages
// import Home from "./pages/Home";
// import Events from "./pages/Events";
// import Reports from "./pages/Reports";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import ForgotPassword from "./pages/ForgotPassword";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Layout>
//         <Routes>
//           {/* Public Pages */}
//           <Route path="/" element={<Home />} />
//           <Route path="/events" element={<Events />} />
//           <Route path="/reports" element={<Reports />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/forgot-password" element={<ForgotPassword />} />

//           {/* 404 Fallback */}
//           <Route
//             path="*"
//             element={
//               <div className="container text-center mt-5">
//                 <h1 className="display-4 text-danger">404</h1>
//                 <p className="lead">Page Not Found</p>
//               </div>
//             }
//           />
//         </Routes>
//       </Layout>
//     </BrowserRouter>

    
//   );
// }


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Reports from "./pages/Reports";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <Router>
      <Routes>
        {/* Pages with Layout */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/events" element={<Layout><Events /></Layout>} />
        <Route path="/reports" element={<Layout><Reports /></Layout>} />

        {/* Auth Pages without Layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;



