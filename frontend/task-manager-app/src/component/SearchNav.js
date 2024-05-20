import React from "react";
import { navigate, useNavigate } from "react-router-dom";
import "./SearchNav.css";
import logo from "../pics/EL MAHDI BOUZKOURA.jpg";

const SearchNav = () => {
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    // Implement logout functionality here
    alert("You have been logged out.");
    // Redirect to the login page
    navigate("/login");
  };

  return (
    <nav className="search_nav">
      <i
        className="fa-solid fa-bars-staggered"
        onClick={() =>
          (document.querySelector("#small_screen").style.display = "block")
        }
      ></i>

      <div id="search_input_container">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="search" placeholder="Search" id="search_input" />
      </div>
      {/* Logout functionality */}
      <span
        style={{ marginTop: "20px", cursor: "pointer" }}
        onClick={handleLogout}
      >
        Logout
      </span>

      <div id="profile_container">
        <i className="fa-solid fa-clock-rotate-left"></i>

        <div id="profileImg">
          <img src={logo} id="logo" alt="Profile" />
        </div>
      </div>
    </nav>
  );
};

export default SearchNav;
