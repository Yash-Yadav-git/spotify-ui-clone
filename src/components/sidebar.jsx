import React from "react";

const sidebar = () => {
  return (
    <sidebar className="sidebar">
      <header>
        <img
          src="../Images/Spotify_Logo_RGB_White.png"
          alt=""
          className="header-logo"
        />
      </header>
      <h4 className="menu-home">Home</h4>
      <h4 className="menu-home">Search</h4>
      <h4 className="menu-home">Your library</h4>
      <div className="header-last">
        <p className="cookies">Cookies</p>
        <p>Privacy Policy</p>
      </div>
    </sidebar>
  );
};

export default sidebar;
