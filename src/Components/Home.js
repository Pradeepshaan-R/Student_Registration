import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div className="home m-3">
        <button className="btn btn-lg btn-info m-3">
          <Link className="link" to="/admin">
            Admin Dashboard
          </Link>
        </button>
        <button className="btn btn-lg btn-info m-3">
          <Link className="link" to="/create">
            Student Registration
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Home;
