import { Link } from "react-router-dom";
import PageBanner from "../../componenet/pagebanner";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import SocialIcon from "../../componenet/socialicon";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { IMAGES } from "../../constant/theme";

function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_61hny88', 'template_5f6jp4o', form.current, { publicKey: 'aYOgb_ORYkjD-hXhl', })
            .then((result) => {
                console.log('SUCCESS!', result.text);
            }, (error) => {
                console.log('FAILED...', error.text);
            },
            );
            e.target.reset()
    };
    return (
        <>
            <Header />
            <PageBanner title="Fale Conosco" image={IMAGES.brasiliaModernImg}/>
            <section className="gap blog-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10495.78281604864!2d2.304888758683584!3d48.87831160329632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fb641eaf103%3A0xb7a1684db74eda09!2sEurope%2C%20Paris%2C%20France!5e0!3m2!1sen!2s!4v1738944002772!5m2!1sen!2s" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="heading pb-4">
                                <span># Get In Touch</span>
                                <h2>Stay Connected for Better Health.</h2>
                            </div>
                            <form className="appiontment contact-form" ref={form} onSubmit={sendEmail}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input type="text" name="name" placeholder="Your Name" />
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="email" name="email" placeholder="Your Email" />
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="number" name="number" placeholder="Phone Number" />
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" name="subject" placeholder="Office Addrress" />
                                    </div>
                                    <div className="col-lg-12">
                                        <textarea name="massg" placeholder="Write A comment..."></textarea>
                                        <button className="btn"><span>Submit Now<i className="fa-solid fa-arrow-right" /></span></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-information">
                                <h3>Contact Information :</h3>
                                <ul className="information-list">
                                    <li>
                                        <span>Email Address</span>
                                        <Link to="mailto:info123@gmail.com">info123@gmail.com</Link>
                                    </li>
                                    <li>
                                        <span>Contact Us</span>
                                        <Link to="callto:0133542392132">013 354 213 - 92132</Link>
                                    </li>
                                    <li>
                                        <span>Address</span>
                                        <h6>1901 Thornridge Cir. Shiloh</h6>
                                    </li>
                                    <li>
                                        <span>Subject</span>
                                        <h6>Medical and Dentist</h6>
                                    </li>
                                </ul>
                                <SocialIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default Contact;