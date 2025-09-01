



export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-auto">
      <div className="container">
        <div className="row">
          {/* Brand & About */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">🎉 Event System</h5>
            <p className="text-muted">
              Organize, manage, and track your events with ease.  
              Built with React + Node.js + Bootstrap.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/events" className="text-light text-decoration-none">
                  Events
                </a>
              </li>
              <li>
                <a href="/reports" className="text-light text-decoration-none">
                  Reports
                </a>
              </li>
              <li>
                <a href="/login" className="text-light text-decoration-none">
                  Login
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Follow Us</h6>
            <div className="d-flex gap-3">
              <a href="#" className="text-light fs-4">
                🌐
              </a>
              <a href="#" className="text-light fs-4">
                🐦
              </a>
              <a href="#" className="text-light fs-4">
                📘
              </a>
              <a href="#" className="text-light fs-4">
                📸
              </a>
            </div>
          </div>
        </div>

        <hr className="border-secondary" />

        <div className="text-center small text-muted">
          © {new Date().getFullYear()} Event System. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
