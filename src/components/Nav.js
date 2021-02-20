import React from "react";
import "./Nav.css";

const Nav = () => {
    return (
        <div className = "nav">
            <div className="nav__logo">
                <img src="/images/SGV.png" width="136px" height="59px" alt='logo'></img>
            </div>
            <div className="nav__link">
                <a href="#">영화</a>
                <a href="#">예매</a>
                <a href="#">극장</a>
            </div>
        </div>
    );
};

export default Nav;