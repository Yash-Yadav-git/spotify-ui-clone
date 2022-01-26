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
      <div className="sidebar-menus">
        <ul>
          <li className="sidebar-menus">Home</li>
          <li className="sidebar-menus">Search</li>
          <li className="sidebar-menus">Library</li>
        </ul>
      </div>

      <div className="header-last">
        <p className="cookies">Cookies</p>
        <p>Privacy Policy</p>
      </div>
    </sidebar>
  );
};

export default sidebar;
