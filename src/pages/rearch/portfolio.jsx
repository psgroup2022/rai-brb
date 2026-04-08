import { Link } from "react-router-dom";
import PageBanner from "../../componenet/pagebanner";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import { ourprojectdata } from "../../constant/alldata";
import { IMAGES } from "../../constant/theme";

function Portfolio() {
    return (
        <>
            <Header />
            <PageBanner title="portfolio" image={IMAGES.bannrimag}/>
            <section className="gap project-page">
                <div className="container">
                    <div className="row row-two g-4">
                        {ourprojectdata.map((data, i) => (
                            <div className="col-lg-4" key={i}>
                                <div className="project-style hover-img">
                                    <figure>
                                        <img src={data.image} alt="img" />
                                    </figure>
                                    <div className="project-text">
                                        <span>Sustainability Goals</span>
                                        <h5><Link to={"#"}> {data.title}</Link></h5>
                                    </div>
                                    <Link to={"/portfolio-details"}><i className="fa-solid fa-arrow-right" /></Link>
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
export default Portfolio;