import { useRef } from "react";
import { Link } from "react-router-dom";
import { IMAGES, SVGICONS } from "../constant/theme";
import SocialIcon from "../componenet/socialicon";
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgZoom from 'lightgallery/plugins/zoom';
import { footerdata, lightgallerydata } from "../constant/alldata";
import emailjs from '@emailjs/browser'; 

function Footer3() {
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
        <footer className="three gap no-bottom" style={{ backgroundImage: `url(${IMAGES.footerbg})` }}>
            <div className="container">
                <div className="subscribe">
                    <h2>Subscribe To Regular Newsletters.</h2>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="email" name="email" placeholder="Enter Your Email" />
                        <button className="btn"><span>Subscribe</span></button>
                    </form>
                </div>
                <div className="footer-bottom">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footre-logo">
                                <Link to={"/"}><img src={IMAGES.logo2} alt="img" /></Link>
                                <p>we are committed to delivering exceptional healthcare with compassion, expertise, and innovation. Our dedicated.</p>
                                <SocialIcon />
                            </div>
                        </div>
                        {footerdata.slice(1, footerdata.length).map((data, i) => (
                            <div className="col-lg-3 col-md-6 ps-lg-5" key={i}>
                                <div className="footer-link">
                                    <h5>{data.title}</h5>
                                    <ul className="footer-link-list">
                                        {data.links.map((dataa, ii) => (
                                            <li key={ii}><Link to={dataa.url}>{dataa.title2}</Link></li>
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
                                        <h6> <i>{SVGICONS.address2} </i> Address</h6>
                                        <span>1901 Thornridge Cir. Shiloh</span>
                                    </li>
                                    <li>
                                        <h6> <i>{SVGICONS.phone2}  </i>Phone Number</h6>
                                        <Link to="callto:013221392132">013 354 213 - 92132</Link>
                                    </li>
                                    <li>
                                        <h6> <i> {SVGICONS.email2} </i> email Address</h6>
                                        <Link to="mailto:info123@gmail.com">info123@gmail.com</Link>
                                    </li>
                                </ul>
                            </div>  
                        </div>
                        <div className="col-lg-3">
                            <div className="instagram-img footer-link">
                                <h5>Instagram</h5>
                                <LightGallery
                                    speed={500}
                                    zoom={true}
                                    thumbnail={true}
                                    autoplay={true}
                                    autoplayDelay={3000}
                                    plugins={[lgThumbnail, lgZoom, lgAutoplay]}
                                    selector='.lightimg'
                                >
                                    <ul>
                                        {lightgallerydata.map((data, i) => (
                                            <li key={i}>
                                                <Link to={data.image} data-fancybox="gallery" className="lightimg">
                                                    <figure><img src={data.image} alt="gallery" /></figure>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </LightGallery>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>Copyright © {year} <span> <Link to={"https://dexignlab.com/"} target="_blank">Dexignlab.</Link> </span> All Rights Reserved.</p>
                    <ul>
                        <li><Link to={"#"}>Terms & Conditions</Link></li>
                        <li><Link to={"#"}>Privacy policy</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer3;