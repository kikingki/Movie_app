import React from "react";
import "./Nav.css";

class Nav extends React.Component {
    changeNav = () => {
        window.addEventListener('scroll', function() {
            const nav = document.querySelector('.nav');
            const windowPosition = window.scrollY>0;
            
            nav.classList.toggle('scroll-opacity', windowPosition);
        }
        )
    }

    componentDidMount () {
        this.changeNav();
    }

    render() {
        return (
            <div className = "nav">
                <div className="nav__logo">
                    <img src="/images/SGV.png" width="136px" height="59px" alt='logo'></img>
                </div>
                <div className="nav__link">
                    <a href="/">영화</a>
                    <a href="/">예매</a>
                    <a href="/">극장</a>
                </div>
            </div>
        );
    }
};


export default Nav;