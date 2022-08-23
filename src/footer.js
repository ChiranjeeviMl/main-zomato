import React from 'react';
import './footer.css';

const Footer = (props) => {
    return(
        <footer id="footer">
            <p id="footText">&copy; Hey Amigo</p>
            <hr/>
            <div className="footDiv">
                <p>Contact Us</p>
                <p>For Delicious food</p>
            </div>
            <div className="footDiv">
                <p>About Us</p>
                <p>Make Customer happy</p>
            </div>
            <div className="footDiv noBorder">
                <p>Customer care Number:14098979798</p>
                
            </div>
        </footer>
    )
}

export default Footer;