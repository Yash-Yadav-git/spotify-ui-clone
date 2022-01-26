import React from "react";

const hero = () => {
  return (
    <section className="header">
      <h1>Made for You</h1>
      <div className="hero-wrapper">
        <div className="hero-card">
          <img src="../Images/Madeforyou.png" alt="" />
          <span className="images-title">Liked Songs</span>
        </div>

        <div className="hero-card">
          <img src="../Images/Madeforyou.png" alt="" />
          <span className="images-title">Playlist 1</span>
        </div>
        <div className="hero-card">
          <img src="../Images/Madeforyou.png" alt="" />
          <span className="images-title">Playlist 1</span>
        </div>
        <div className="hero-card">
          <img src="../Images/Madeforyou.png" alt="" />
          <span className="images-title">Playlist 1</span>
        </div>
      </div>
    </section>
  );
};

export default hero;
