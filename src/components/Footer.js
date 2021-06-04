import React from 'react';
import Background from "../images/footer.jpeg"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-background" style={{backgroundImage:`url(${Background})`}}>

            </div>
        </div>
    );
}

export default Footer;
