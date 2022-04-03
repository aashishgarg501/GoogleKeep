import React from "react";
import "./Style.css";
const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <p className="footer">copyright © {year}</p>
        </>
    );
};

export default Footer;
