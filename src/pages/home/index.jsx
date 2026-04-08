import { Link } from "react-router-dom";
import { IMAGES } from "../../constant/theme";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import AboutUs from "../../componenet/aboutus";
import Marquee1 from "../../componenet/marquee1";
import Marquee2 from "../../componenet/marquee2";
import Medical from "../../componenet/medical";
import Whychoose from "../../componenet/whychoose";
import Pricing from "../../componenet/pricing";
import TestiSwiper from "../../componenet/testiswiper";
import BrandSwiper from "../../componenet/brandswiper";
import Blog from "../../componenet/blog";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import CountUp from "react-countup";
import { servicesliderdata } from "../../constant/alldata";

function Index() {
    return (
        <>
            <Header />
            <section className="hero-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="hero-text">
                                <span><i className="fa-solid fa-heart" />Solutions for Better Health</span>
                                <h1>Your <span>Health</span> Our Priority</h1>
                                <p>we are dedicated to putting your health at the forefront of everything we do. Our compassionate team of healthcare.</p>
                                <div className="experience">
                                    <Link to={"/about"} className="btn"><span>Read More<i className="fa-solid fa-arrow-right" /></span></Link>
                                    <ul className="experience-team">
                                        <li><img src={IMAGES.team1} alt="img" /></li>
                                        <li><img src={IMAGES.team2} alt="img" /></li>
                                        <li><img src={IMAGES.team3} alt="img" /></li>
                                        <li><Link to={"#"}>+</Link></li>
                                    </ul>
                                    <div>
                                        <h6>2000+</h6>
                                        <span>Experience Team</span>
                                    </div>
                                </div>
                                <img src={IMAGES.shape3} alt="img" className="shaps-3" />
                            </div>
                            <div className="counter">
                                <div>
                                    <h2 data-max="500"><span><CountUp end={500} duration={5} />+</span></h2>
                                    <span>Patients Served</span>
                                </div>
                                <div>
                                    <h2 data-max="2"><span><CountUp end={2} duration={5} />M+</span></h2>
                                    <span>Reports Delivered</span>
                                </div>
                                <div>
                                    <h2 data-max="100"><span><CountUp end={100} duration={5} />+</span></h2>
                                    <span>Expert Specialists</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-img">
                                <img src={IMAGES.heroimage} alt="img" />
                                <ul className="shaps">
                                    <li><img src={IMAGES.shape1} alt="img" /></li>
                                    <li><img src={IMAGES.shape2} alt="img" /></li>
                                    <li><img src={IMAGES.shape4} alt="img" /></li>
                                    <li><img src={IMAGES.shape5} alt="img" /></li>
                                    <li><img src={IMAGES.shape6} alt="img" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="gap">
                <div className="container">
                    <div className="heading ">
                        <span># Our Services</span>
                        <h2>Our Medical Services.</h2>
                    </div>
                    <Swiper className="swiper services-slider"
                        slidesPerView={4}
                        spaceBetween={0}
                        loop={true}
                        speed={1000}
                        freeMode={true}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        autoplay={{
                            delay: 2000,
                        }}
                        modules={[Navigation, Autoplay, FreeMode]}
                        breakpoints={{
                            10: {
                                slidesPerView: 1,
                            },
                            556: {
                                slidesPerView: 2,
                            },
                            992: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        {servicesliderdata.map((data, i) => (
                            <SwiperSlide key={i}>
                                <div className={`services ${data.columnstand}`}>
                                    <i> {data.icon} </i>
                                    <h4><Link to={"#"}>{data.title}</Link></h4>
                                    <p>Our comprehensive preventive care services are designed to identify potential.</p>
                                    <Link to={"/services-details"}>Read More<i className="fa-solid fa-arrow-right" /></Link>
                                </div>
                            </SwiperSlide>
                        ))}
                        <div className="swiper-button">
                            <div className="swiper-button-next"><i className="fa-solid fa-arrow-right" /></div>
                            <div className="swiper-button-prev"><i className="fa-solid fa-arrow-left" /></div>
                        </div>
                    </Swiper>
                </div>
            </section>
            <section className="gap no-top">
                <AboutUs />
            </section>
            <Marquee1 />
            <Marquee2 />
            <Medical />
            <Whychoose />
            <section className="gap section-pricing" style={{ backgroundImage: `url(${IMAGES.graph})` }}>
                <Pricing />
                <ul className="shaps">
                    <li><img src={IMAGES.shape7} alt="img" /></li>
                    <li><img src={IMAGES.shape8} alt="img" /></li>
                    <li><img src={IMAGES.dotimage} alt="img" /></li>
                    <li><img src={IMAGES.dotimage} alt="img" /></li>
                </ul>
            </section>
            <TestiSwiper />
            <div className="container">
                <BrandSwiper />
            </div>
            <section className="gap section-blog">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <div className="heading">
                                <span># blog</span>
                                <h2>Our Medical Blog.</h2>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="btn-left">
                                <Link to={"/our-blog"} className="btn"><span>View All Blog<i className="fa-solid fa-arrow-right" /></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <Blog />
                    </div>
                </div>
                <ul className="shaps">
                    <li><img src={IMAGES.shape7} alt="img" /></li>
                    <li><img src={IMAGES.shape8} alt="img" /></li>
                </ul>
            </section>
            <Footer />
        </>
    );
}
export default Index;