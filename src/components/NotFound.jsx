import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="not-found">
      <h2>404 - Page Not Found</h2>
      <Link to="/">Go back to movies</Link>
    </section>
  );
}
