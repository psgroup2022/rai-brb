import { Link } from "react-router-dom";
import PageBanner from "../../componenet/pagebanner";
import { IMAGES, SVGICONS } from "../../constant/theme";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import Accordion from 'react-bootstrap/Accordion';
import { accordiondata, siderbarservice } from "../../constant/alldata";
import { useEffect, useState } from "react";
import SocialIcon from "../../componenet/socialicon";

function ServicesDeatails() {
    useEffect(() => {
        document.body.classList.add("overflow-visible")
    }, [])
    const [active, setActive] = useState(0)
    const handleClick = (i) => {
        setActive(active === i ? null : i)
    }
    return (
        <>
            <Header />
            <PageBanner title="Services Deatails" image={IMAGES.bannrimg6} />
            <section className="gap service-page  ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <aside className="services-details-sidebar sticky-top" style={{top:'100px',zIndex:1}}>
                                <div className="sidebar">
                                    <h3>Search Here</h3>
                                    <form className="search-hare">
                                        <input type="email" name="email" placeholder="Enter Your Email" />
                                        <button><i className="fa-solid fa-magnifying-glass" /></button>
                                    </form>
                                </div>
                                <div className="sidebar">
                                    <h3>Services List</h3>
                                    <ul className="services-list">
                                        {siderbarservice.map((data, i) => (
                                            <li key={i}><Link to={"#"}>{data.title}<i className="fa-solid fa-arrow-right" /></Link></li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="sidebar">
                                    <h3>Social Icon</h3>
                                    <SocialIcon />
                                </div>
                            </aside>
                        </div>
                        <div className="col-lg-8">
                            <div className="services-details">
                                <i> {SVGICONS.servicedet} </i>
                                <h2><Link to={"#"}>Medical Services</Link></h2>
                                <p>we believe that prevention is the key to maintaining a healthy, beautiful smile. Our comprehensive preventive care services are designed to detect and address potential dental issues before they become serious, helping you avoid disco mfort and costly treatments in the future. Our Preventive Care Services Routine Dental Exams Regular check-ups allow us to monitor your oral health and catch any issues early.</p>
                                <h3>Fluoride Treatments</h3>
                                <p>strengthen your enamel and protect your teeth from decay with safe and effective fluoride applications. Dental Sealants A protective coating applied to the chewing surfaces of molars to prevent cavities, especially in children and teenagers Oral Cancer Screenings Early detection of oral cancer can save lives. We conduct thorough screenings during routine exams to ensure your health and safety.</p>
                                <div className="services-details-img hover-img">
                                    <figure>
                                        <img src={IMAGES.servicedetails} alt="services-details" />
                                    </figure>
                                </div>
                                <p>We provide tailored advice on brushing, flossing, and dietary habits to help you maintain excellent oral hygiene at home. X-Rays and Imaging Advanced digital X-rays help us detect hidden dental issues, such as cavities, bone loss, or impacted teeth, before they cause problems.</p>
                                <h3>Frequently Asked Questions</h3>
                                <Accordion className="accordion" defaultActiveKey="1">
                                    {accordiondata.map((data, i) => (
                                        <Accordion.Item eventKey={data.key} key={i} className={active === i ? 'active' : ''} onClick={() => handleClick(i)} >
                                            <Link to={"#"} className="heading">
                                                <div className="icon"><i className="fa-solid fa-plus" /></div>
                                                <div className="title">{data.title}</div>
                                            </Link>
                                            <div className={active === i ? 'content d-block' : 'content'}>
                                                <p>Yes, we provide prompt care for dental emergencies, including severe toothaches, broken teeth, and dental injuries. Contact us immediately if you need urgent care.</p>
                                            </div>
                                        </Accordion.Item>
                                    ))}
                                </Accordion>
                                <p>Avoid costly and extensive dental treatments in the future. Maintain a healthy, confident smile for life. Reduce the risk of gum disease, cavities, and other oral health issues. Enjoy improved overall health.</p>
                                <div className="stap-pagination">
                                    <Link to={"#"} className="next"> <i> {SVGICONS.next} </i>  </Link>
                                    <Link to={"#"} className="prev">  <i> {SVGICONS.prev} </i> </Link>
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
export default ServicesDeatails;