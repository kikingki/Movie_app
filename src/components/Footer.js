import React from "react";
import "./Footer.css";

import { FiInstagram } from "react-icons/fi";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";


const Footer = () => {
    return (
        <div className = "footer">
            <div className="footer__icons">
                <div className="icon1">
                    <FiInstagram size="30px"/>
                </div>
                <div className="icon2">
                    <AiFillFacebook size="30px"/>
                </div>
                <div className="icon3">
                    <AiOutlineTwitter size="30px"/>
                </div>
            </div>
            <div className = "footer__copy">
                <span>&copy; copyright Jisun</span>
            </div>
        </div>
    );
};

export default Footer;