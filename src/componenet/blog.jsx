import { Link } from "react-router-dom";
import { SVGICONS } from "../constant/theme";
import { blogdata } from "../constant/alldata";

function Blog() {
    return (
        <>
            {blogdata.slice(0,3).map((data, i) => (
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
        </>
    );
}
export default Blog;