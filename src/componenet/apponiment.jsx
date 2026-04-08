
import { IMAGES } from "../constant/theme";
import Footer from "../layout/footer";
import Header from "../layout/header";
import BrandSwiper from "./brandswiper";
import PageBanner from "./pagebanner";

function Appiontment() {
   
    return (
        <>
            <Header />
            <PageBanner title="Appointment" image={IMAGES.bannrimag}/>
            <section className="appiontment-section gap no-bottom" style={{ backgroundImage: `url(${IMAGES.bgline2})` }}>
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-6">
                            <div className="heading">
                                <span># Get In Touch</span>
                                <h2>Make An Appointment</h2>
                            </div>
                            <form className="appiontment">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input type="text" name="name" placeholder="Your Name" />
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="email" name="email" placeholder="Your Email" />
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="number" name="number" placeholder="Phone Numberprogressbar-text" />
                                    </div>
                                    <div className="col-lg-6">
                                        <select className="form-select form-select-lg mb-3 bs-select" aria-label="Large select example">
                                            <option selected>Select Doctor</option>
                                            <option defaultValue="1">Dr. Include John</option>
                                            <option defaultValue="2">Dr.David</option>
                                            <option defaultValue="3">Dr.Robert</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-12">
                                        <textarea name="massg" placeholder="Write A Message..."></textarea>
                                        <button className="btn"><span>Book An Appiontment <i className="fa-solid fa-arrow-right"></i></span></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6">
                            <div className="appiontment-img">
                                <img alt="img" src={IMAGES.appiontment} />
                                <div className="emergency-call">
                                    <i><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9002 0.923608C11.9002 0.680093 11.997 0.446552 12.1691 0.274361C12.3413 0.10217 12.5749 0.00543358 12.8184 0.00543358C15.2527 0.00810694 17.5865 0.976325 19.3078 2.69766C21.0291 4.41899 21.9973 6.75285 22 9.18718C22 9.4307 21.9033 9.66424 21.7311 9.83643C21.5589 10.0086 21.3253 10.1054 21.0818 10.1054C20.8383 10.1054 20.6048 10.0086 20.4326 9.83643C20.2604 9.66424 20.1637 9.4307 20.1637 9.18718C20.1615 7.23973 19.3869 5.37267 18.0099 3.99562C16.6328 2.61856 14.7658 1.84397 12.8184 1.84178C12.5749 1.84178 12.3413 1.74505 12.1691 1.57286C11.997 1.40066 11.9002 1.16712 11.9002 0.923608ZM12.8184 5.51448C13.7924 5.51448 14.7266 5.90143 15.4153 6.59019C16.1041 7.27896 16.491 8.21312 16.491 9.18718C16.491 9.4307 16.5878 9.66424 16.76 9.83643C16.9321 10.0086 17.1657 10.1054 17.4092 10.1054C17.6527 10.1054 17.8862 10.0086 18.0584 9.83643C18.2306 9.66424 18.3274 9.4307 18.3274 9.18718C18.3259 7.72654 17.745 6.32614 16.7122 5.29331C15.6794 4.26048 14.279 3.67959 12.8184 3.67813C12.5749 3.67813 12.3413 3.77487 12.1691 3.94706C11.997 4.11925 11.9002 4.35279 11.9002 4.59631C11.9002 4.83982 11.997 5.07336 12.1691 5.24556C12.3413 5.41775 12.5749 5.51448 12.8184 5.51448ZM21.1672 15.3748C21.6993 15.9083 21.9981 16.6311 21.9981 17.3846C21.9981 18.1382 21.6993 18.861 21.1672 19.3945L20.3317 20.3577C12.812 27.5571 -5.487 9.26247 1.6012 1.71875L2.65709 0.800573C3.19125 0.283344 3.90756 -0.00278493 4.65106 0.00408831C5.39457 0.0109615 6.10547 0.310285 6.62997 0.8373C6.65844 0.865763 8.35979 3.07581 8.35979 3.07581C8.86462 3.60617 9.14565 4.31069 9.14445 5.04291C9.14326 5.77513 8.85993 6.47872 8.35336 7.00743L7.29013 8.3443C7.87853 9.774 8.74364 11.0733 9.83574 12.1677C10.9278 13.262 12.2254 14.1297 13.6539 14.721L14.999 13.6513C15.5278 13.1452 16.2312 12.8622 16.9632 12.8611C17.6952 12.8601 18.3995 13.1411 18.9297 13.6458C18.9297 13.6458 21.1388 15.3463 21.1672 15.3748ZM19.9038 16.7098C19.9038 16.7098 17.7067 15.0194 17.6782 14.991C17.4891 14.8034 17.2335 14.6982 16.9671 14.6982C16.7007 14.6982 16.4451 14.8034 16.256 14.991C16.2312 15.0167 14.3793 16.4922 14.3793 16.4922C14.2545 16.5915 14.1059 16.6566 13.9483 16.6811C13.7907 16.7056 13.6294 16.6886 13.4804 16.6317C11.6298 15.9427 9.94889 14.864 8.55154 13.4687C7.15418 12.0734 6.07302 10.3941 5.38127 8.54446C5.31994 8.39338 5.29994 8.22869 5.32334 8.06732C5.34674 7.90595 5.41269 7.75372 5.51441 7.62629C5.51441 7.62629 6.98989 5.77341 7.01468 5.74954C7.20224 5.56038 7.30747 5.30479 7.30747 5.03841C7.30747 4.77203 7.20224 4.51644 7.01468 4.32728C6.98622 4.29974 5.29589 2.10071 5.29589 2.10071C5.1039 1.92856 4.85333 1.83636 4.59556 1.84302C4.33778 1.84968 4.09231 1.95468 3.90946 2.13652L2.85358 3.05469C-2.32669 9.28359 13.5309 24.2618 18.9893 19.1035L19.8258 18.1394C20.0218 17.9578 20.1395 17.7072 20.1541 17.4404C20.1687 17.1736 20.0789 16.9116 19.9038 16.7098Z" fill="white" />
                                    </svg>
                                    </i>
                                    <div>
                                        <span>Emergency Call</span>
                                        <a href="callto:0133592132">013 354 213 - 92132</a>
                                    </div>
                                </div>
                                <ul className="shaps">
                                    <li><img src={IMAGES.shape1} alt="img" /></li>
                                    <li><img src={IMAGES.shape4} alt="img" /></li>
                                    <li><img src={IMAGES.shape5} alt="img" /></li>
                                    <li><img src={IMAGES.shape6} alt="img" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container gap">
                <BrandSwiper />
            </div>
            <Footer />
        </>
    )
}
export default Appiontment;