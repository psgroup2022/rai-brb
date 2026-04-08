import { Link } from "react-router-dom";
import PageBanner from "../../componenet/pagebanner";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import { IMAGES, SVGICONS } from "../../constant/theme";
import { blogdata } from "../../constant/alldata";

function OurBlog() {
    return (
        <>
            <Header />
            <PageBanner title="Our Blog" image={IMAGES.bannrimg5} />
            <section className="gap blog-page">
                <div className="container">
                    <div className="row">
                        {blogdata.map((data, i) => (
                            <div className="col-lg-4 col-md-6" key={i}>
                                <div className="blog-one-style hover-img">
                                    <figure>
                                        <img src={data.image} alt="img" />
                                    </figure>
                                    <h6><Link to={"#"} className="d-grid">{data.date} <span> May</span> </Link></h6>
                                    <div className="admin">
                                        <Link to={"#"}><i> {SVGICONS.admin} </i>By Admin</Link>
                                    </div>
                                    <div className="comment">
                                        <Link to={"#"}><i>{SVGICONS.comment} </i>02 Comment</Link>
                                    </div>
                                    <h3><Link to={"/our-blog"}>{data.title}</Link></h3>
                                    <Link to={"/blog-details"} className="btn two"><span>Read More<i className="fa-solid fa-arrow-right" /></span></Link>
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
export default OurBlog;