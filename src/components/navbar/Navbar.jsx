import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "Wojciech Nowak",
    isSeller: true,
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="dot">.</span>
            <span className="text">Herkis</span>
          </Link>
        </div>
        <div className="links">
          <span>Link 1</span>
          <span>Link 2</span>
          <span>Link 3</span>
          <span>Link 4</span>
          <span>Link 5</span>
          {!currentUser?.isSeller && <button>Dodaj Piekarnie</button>}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img
                src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <span>Kategoria 1</span>
                      <span>Kategoria 2</span>
                    </>
                  )}
                  <span>Kategoria 3</span>
                  <span>Kategoria 4</span>
                  <span>Kategoria 5</span>
                  <span>Logout</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {active ||
        (pathname !== "/" && (
          <>
            <hr />
            <div className="menu">
              <span>Warszawa</span>
              <span>Kraków</span>
              <span>Łódź</span>
              <span>Wrocław</span>
              <span>Poznań</span>
              <span>Gdańsk</span>
              <span>Szczecin</span>
              <span>Bydgoszcz</span>
              <span>Lublin</span>
              <span>Białystok</span>
            </div>
          </>
        ))}
    </div>
  );
};

export default Navbar;
