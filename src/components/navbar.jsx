import React from "react";

const NavBar = ({ totalCounters }) => {
  console.log("Nav - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a
        className="navbar-brand"
        href="https://getbootstrap.com/docs/4.5/examples/starter-template/#"
      >
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
