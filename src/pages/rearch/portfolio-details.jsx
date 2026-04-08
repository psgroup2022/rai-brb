import { Link } from "react-router-dom";
import PageBanner from "../../componenet/pagebanner";
import { IMAGES } from "../../constant/theme";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import SocialIcon from "../../componenet/socialicon";

function PortfolioDetails() {
    return (
        <>
            <Header />
            <PageBanner title="Portfolio Details" image={IMAGES.bannrimg3}/>
            <section className="gap portfolio-details-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="hover-img">
                                <figure>
                                    <img src={IMAGES.projectdetail1} alt="img" />
                                </figure>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="portfolio-details">
                                <h2>Health Education</h2>
                                <p>we believe that knowledge is the foundation of a healthier life. Our health education initiatives are designed to empower individuals and communities with the information they need to make informed decisions about their well-being. Our Health Education Focus Preventive Care Awareness Educating patients on the importance of routine check-ups, healthy habits, <br /><br /> Oral Hygiene Workshops Providing practical guidance on brushing, flossing, and maintaining good oral hygiene to prevent cavities, gum disease, and other dental issues. Nutrition and Wellness Offering dietary advice and wellness tips to support healthy lifestyles, improve oral health, and enhance overall well-being. Equipping patients with the knowledge and tools to manage conditions such as diabetes, hypertension, and heart disease effectively.</p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="project-information">
                                <h4>Project Information</h4>
                                <ul className="information-list">
                                    <li>
                                        <span>Clients :</span>
                                        <h6>Md Rehovot Hossain</h6>
                                    </li>
                                    <li>
                                        <span>Timeframe :</span>
                                        <h6>August 03, 2025</h6>
                                    </li>
                                    <li>
                                        <span>Category :</span>
                                        <h6>Medical and Dentist</h6>
                                    </li>
                                    <li>
                                        <span>Website Link :</span>
                                        <h6><Link to="mailto:info123@gmail.com">info123@gmail.com</Link></h6>
                                    </li>
                                </ul>
                                <SocialIcon />
                            </div>
                        </div>
                        <div className="row portfolio-details-img">
                            <div className="col-lg-4 col-6">
                                <div className="hover-img">
                                    <figure>
                                        <img src={IMAGES.projectdetail2} alt="img" />
                                    </figure>
                                </div>
                            </div>
                            <div className="col-lg-4 col-6">
                                <div className="hover-img">
                                    <figure>
                                        <img src={IMAGES.projectdetail3} alt="img" />
                                    </figure>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                                <div className="hover-img">
                                    <figure>
                                        <img src={IMAGES.projectdetail4} alt="img" />
                                    </figure>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="portfolio-details">
                                    <h3>Chronic Disease Management Supporting Your Long-Term Health :</h3>
                                    <p>Diabetes Offering personalized care plans, dietary guidance, and regular monitoring to help you maintain optimal blood sugar levels and prevent complications. Hypertension  High Blood Pressure Providing lifestyle recommendations, medication management, and regular check-ups to control blood pressure and reduce the risk of heart disease and stroke. bA sthma & Respiratory Conditions Developing customized treatment plans, including medication and breathing exercises, to help you manage symptoms and improve lung function. Cardiovascular Diseases Supporting heart health through dietary advice, exercise plans, and medication management to prevent further complications. Chronic Kidney Disease Monitoring kidney function, providing nutritional counseling, and coordinating care with specialists to manage disease progression.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default PortfolioDetails;