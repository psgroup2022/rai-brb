import { Link } from "react-router-dom";
import { IMAGES } from "../constant/theme";

function PageBanner({ title,image }) {
    return (
        <>
            <section className="banner" style={{ backgroundImage: `Url(${IMAGES.bannerbg})` }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="title-area-data">
                                <h2>{title}</h2>
                                <img src={IMAGES.shapethree1} alt="banner-shap" className="banner-shap" />
                            </div>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/"> Home </Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">{title}</li>
                            </ol>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner-img">
                                <img src={image} alt="img" />
                                <ul className="shaps">
                                    <li><img src={IMAGES.shape1} alt="img" /></li>
                                    <li><img src={IMAGES.bannrshap} alt="img" /></li>
                                    <li><img src={IMAGES.shape4} alt="img" /></li>
                                    <li><img src={IMAGES.shape5} alt="img" /></li>
                                    <li><img src={IMAGES.shape6} alt="img" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default PageBanner;