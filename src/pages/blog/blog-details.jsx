import { Link } from "react-router-dom";
import Sidebar from "../../componenet/sidebar";
import { IMAGES, SVGICONS } from "../../constant/theme";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import SocialIcon from "../../componenet/socialicon";
import emailjs from '@emailjs/browser'; 
import { useEffect, useRef } from "react";


function BlogDetails() {
    useEffect(()=>{
        document.body.classList.add("overflow-visible")
    }) 
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
        <>
            <Header />
            <section className="gap blog-details-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-one-style hover-img">
                                <h2>In-Depth Health Insights</h2>
                                <figure>
                                    <img src={IMAGES.blogdetails1} alt="img" />
                                </figure>
                                <div className="admin">
                                    <Link to={"#"}><i> {SVGICONS.admin} </i>By Admin</Link>
                                </div>
                                <div className="comment">
                                    <Link to={"#"}><i>{SVGICONS.comment} </i>02 Comment</Link>
                                </div>
                                <p>we believe that informed patients make healthier choices. Our In-Depth Health Insights section is designed to provide you with comprehensive, evidence-based information on a wide range of health topics, empowering you to take control of your well-being. What You’ll Find Detailed Articles on Medical Conditions Gain a deeper understanding of various health conditions, including their causes, symptoms, diagnosis, and treatment options.<br /><br /> Our expert-written articles break down complex medical information into easy-to-understand language. Preventive Healthcare Strategies Learn how to reduce your risk of developing chronic diseases through lifestyle changes, early detection, and regular screenings. Latest Research and Innovations Stay updated with the latest advancements in medical technology, treatments, and procedures that can enhance your quality of life.</p>
                            </div>
                            <div className="quotes">
                                <div>
                                    <img src={IMAGES.doublequote} alt="img" />
                                    <h5>Worker At  Madula</h5>
                                </div>
                                <p>Have you tried any of the recommendations or treatments mentioned? Let us know how they worked for you. Your experience might inspire others!</p>
                            </div>
                            <div className="blog-detail-text">
                                <h3>Share Your Experience</h3>
                                <p>Your story has the power to make a difference. Whether you’ve overcome a health challenge, benefited from one of our services, or have valuable insights to share, we’d love to hear from you. Why Share Your Experience? Inspire Others Your journey can motivate others facing similar challenges to take positive steps toward their health. Build a Supportive Community By sharing your experience, you contribute to a community</p>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="hover-img">
                                        <figure>
                                            <img src={IMAGES.blogdetails2} alt="img" />
                                        </figure>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="hover-img">
                                        <figure>
                                            <img src={IMAGES.blogdetails3} alt="img" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-detail-text">
                                <h3>Let’s Build a Healthy</h3>
                                <p>Health education empowers everyone. Share your insights, experiences, and tips to help others make informed health decisions. Supporting One Another A strong community is built on empathy and support. Encourage and uplift others as they navigate their health journeys. Participating in Wellness Events Join us for health workshops, screenings, and community outreach programs designed to promote wellness and preventive care. </p>
                            </div>
                            <div className="tags-hare">
                                <h4>Tags Here :</h4>
                                <ul className="tags-list">
                                    <li><Link to={"#"}>Wellness</Link></li>
                                    <li><Link to={"#"}>Mental</Link></li>
                                    <li><Link to={"#"}>Exercise</Link></li>
                                </ul>
                                <SocialIcon />
                            </div>
                            <div className="stap-pagination">
                                <Link to={"#"} className="next"> <i> {SVGICONS.next} </i> Prev Blog</Link>
                                <Link to={"#"} className="prev">  Next Blog<i>{SVGICONS.prev} </i> </Link>
                            </div>
                            <div className="blog-admin">
                                <img src={IMAGES.johriislam} alt="img" />
                                <div>
                                    <h5>Johari lslam</h5>
                                    <p>The care I received was exceptional! The staff was friendly, attentive, and took the time to answer all my questions. I highly recommend this clinic</p>
                                    <Link to={"#"}><i className="fa-brands fa-twitter"></i></Link>
                                </div>
                            </div>
                            <div className="blog-heading">
                                <h3>03 Comment :</h3>
                                <ul className="blog-comment-list">
                                    <li>
                                        <img src={IMAGES.commnet1} alt="img" />
                                        <div>
                                            <h5>Jacob Jones</h5>
                                            <p>The care I received was exceptional! The staff was friendly, attentive, and took the time to answer all my questions. I highly recommend this clinic</p>
                                            <Link to={"#"}>Reply</Link>
                                        </div>
                                    </li>
                                    <li className="children">
                                        <img src={IMAGES.commnet2} alt="img" />
                                        <div>
                                            <h5>Davide Malan</h5>
                                            <p>The care I received was exceptional! The staff was friendly, attentive, and took the time to answer all my questions. I highly recommend this clinic</p>
                                            <Link to={"#"}>Reply</Link>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={IMAGES.commnet3} alt="img" />
                                        <div>
                                            <h5>Johan Smiths</h5>
                                            <p>The care I received was exceptional! The staff was friendly, attentive, and took the time to answer all my questions. I highly recommend this clinic</p>
                                            <Link to={"#"}>Reply</Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="blog-heading">
                                <h3>Leave A Comment :</h3>
                                <form className="appiontment blog-form" ref={form} onSubmit={sendEmail}>
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
                                            <input type="text" name="subject" placeholder="Subject" />
                                        </div>
                                        <div className="col-lg-12">
                                            <textarea name="massg" placeholder="Write A Message..."></textarea>
                                            <button className="btn"><span>Book An Appiontment<i className="fa-solid fa-arrow-right"></i></span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <Sidebar />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default BlogDetails;