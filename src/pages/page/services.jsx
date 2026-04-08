import { Link } from "react-router-dom";
import PageBanner from "../../componenet/pagebanner";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import { servicedata } from "../../constant/alldata";
import { IMAGES } from "../../constant/theme";

function Services() {
    return (
        <>
            <Header />
            <PageBanner title="Services"  image={IMAGES.bannrimg6}/>
            <section className="gap service-page">
                <div className="container">
                    <div className="row">
                        {servicedata.map((data, i) => (
                            <div className="col-lg-4 col-md-6" key={i}>
                                <div className="services">
                                    <i> {data.icon} </i>
                                    <h4><Link to={"#"}>{data.title}</Link></h4>
                                    <p>Our comprehensive preventive care services are designed to identify potential.</p>
                                    <Link to={"#"}>Read More<i className="fa-solid fa-arrow-right" /></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <ul className="pagination">
                        <li className="page-item">
                            <Link className="page-link" to={"#"} aria-label="Previous">
                                <span aria-hidden="true"><i className="fa-solid fa-arrow-left" /></span>
                                <span className="sr-only">Previous</span>
                            </Link>
                        </li>
                        <li className="page-item"><Link className="page-link" to={"#"}>1</Link></li>
                        <li className="page-item"><Link className="page-link" to={"#"}>2</Link></li>
                        <li className="page-item"><Link className="page-link" to={"#"}>...</Link></li>
                        <li className="page-item"><Link className="page-link" to={"#"}>12</Link></li>
                        <li className="page-item">
                            <Link className="page-link" to={"#"} aria-label="Next">
                                <span aria-hidden="true"><i className="fa-solid fa-arrow-right" /></span>
                                <span className="sr-only">Next</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default Services;