import React from "react";

const NavBar = () => {
  return (
    <div className="navbar">
      <span className="logo">Онлайн чат</span>
      <div className="user">
        <img src="https://klike.net/uploads/posts/2020-03/1584435311_1.jpg" alt="logo" />
        <span>Kirill</span>
        <button>Выйти</button>
      </div>
    </div>
  );
};

export default NavBar;
