import { Accordion } from "react-bootstrap";
import PageBanner from "../../componenet/pagebanner";
import { accordiondata } from "../../constant/alldata";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IMAGES } from "../../constant/theme";

function Faq() {
    const [active, setActive] = useState(0) 
    const handleClick = (i) => {
        setActive(active === i ? null : i)
    } 
    return (
        <>
            <Header />
            <PageBanner title="FAQ Page"  image={IMAGES.bannrimag}/>
            <section className="gap blog-page">
                <div className="container">
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
                </div>
            </section>
            <Footer />
        </>
    )
}
export default Faq;