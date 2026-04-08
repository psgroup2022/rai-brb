import { Link } from "react-router-dom";
import SocialIcon from "./socialicon";
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import { lightgallerydata, siderbarservice, tags } from "../constant/alldata";

function Sidebar() {
    
    return (
        <>
            <div className="col-lg-4">
                <div className="services-details-sidebar sticky-top" style={{top:'100px',zIndex:1}}>
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
                    <div className="sidebar instagram-img footer-link">
                        <h3>Instagram Follow</h3>
                        <LightGallery
                            speed={500}
                            zoom={true}
                            thumbnail={true}
                            autoplay={true}
                            autoplayDelay={3000}
                            plugins={[lgThumbnail, lgZoom, lgAutoplay]}
                            selector='.lightimg'
                        >
                            <ul>
                                {lightgallerydata.map((data, i) => (
                                    <li key={i}>
                                        <Link to={data.image} data-fancybox="gallery" className="lightimg">
                                            <figure><img src={data.image} alt="gallery" /></figure>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </LightGallery>
                        <Link to={"https://www.instagram.com/"} target="blank" className="btn"><span><i className="fa-brands fa-instagram" />Follow Us Instagram</span></Link>
                    </div>
                    <div className="sidebar">
                        <h3>Tags</h3>
                        <ul className="tags-list">
                            {tags.map((data, i) => (
                                <li key={i}><Link to={"#"}>{data.title}</Link></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Sidebar;