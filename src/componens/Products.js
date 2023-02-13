import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h2>Welcome to product page</h2>
      <ul>
        <li>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2">Online Course</Link>
        </li>
        <li>
          <Link to="/products/p3">Offline Program</Link>
        </li>
      </ul>
    </div>
  );
};

export default Products;
