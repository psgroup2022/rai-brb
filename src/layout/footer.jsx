import { Link } from "react-router-dom";
import { IMAGES, SVGICONS } from "../constant/theme";
import { footerdata } from "../constant/alldata";
import SocialIcon from "../componenet/socialicon";
import emailjs from '@emailjs/browser'; 
import { useRef } from "react";

function Footer() {
    let year = new Date().getFullYear();
    const form = useRef(); 
    const sendEmail = (e) => {
        e.preventDefault(); 
        emailjs.sendForm('service_61hny88', 'template_5f6jp4o', form.current, {publicKey: 'aYOgb_ORYkjD-hXhl',})
        .then((result) => {
            console.log('SUCCESS!', result.text);
        },(error) => {
            console.log('FAILED...', error.text);
        },
        );
        e.target.reset()
    };
    return (
        <footer className="gap no-bottom">
            <div className="container">
                <div className="subscribe">
                    <h2>Subscribe To Regular Newsletters.</h2>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="email" name="email" placeholder="Enter Your Email" />
                        <button className="btn"><span >Subscribe</span></button>
                    </form>
                </div>
                <div className="footer-bottom">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footre-logo">
                                <Link to={"/"}><img src={IMAGES.logo} alt="img" /></Link>
                                <p>we are committed to delivering exceptional healthcare with compassion, expertise, and innovation. Our dedicated.</p>
                                <SocialIcon />
                            </div>
                        </div>
                        {footerdata.map((item, index) => (
                            <div className="col-lg-3 col-6" key={index}>
                                <div className="footer-link">
                                    <h5>{item.title}</h5>
                                    <ul className="footer-link-list">
                                        {item.links.map((item2, index2) => (
                                            <li key={index2}><Link to={item2.url}>{item2.title2}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-link contact-footer">
                                <h5>contact uS</h5>
                                <ul className="footer-link-list">
                                    <li>
                                        <h6> <i> {SVGICONS.address} </i> Address</h6>
                                        <span>1901 Thornridge Cir. Shiloh</span>
                                    </li>
                                    <li>
                                        <h6> <i> {SVGICONS.phone} </i> Phone Number</h6>
                                        <Link to="callto:013221392132">013 354 213 - 92132</Link>
                                    </li>
                                    <li>
                                        <h6> <i>  {SVGICONS.email} </i> email Address</h6>
                                        <Link to="mailto:info123@gmail.com">info123@gmail.com</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>Copyright © {year} <span> <Link to={"https://dexignlab.com/"} target="_blank">Dexignlab.</Link> All Rights Reserved.</span></p>
                    <ul>
                        <li><Link to={"#"}>Terms & Conditions</Link></li>
                        <li><Link to={"#"}>Privacy policy</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
export default Footer;