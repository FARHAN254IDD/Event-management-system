

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content with Sidebar */}
      <div className="d-flex flex-grow-1">
        <Sidebar />

        {/* Page Content */}
        <main className="flex-grow-1 p-4 bg-light">
          {children}
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

