import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-light bg-primary">
          <div className="container">
            <Link to="/" className="navbar-brand" href="#">
              DevPOS
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default HomePage;
