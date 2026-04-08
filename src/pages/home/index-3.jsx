import { Swiper, SwiperSlide } from "swiper/react";
import { IMAGES, SVGICONS } from "../../constant/theme";
import Footer3 from "../../layout/footer3";
import Header from "../../layout/header";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import Marquee1 from "../../componenet/marquee1";
import Marquee2 from "../../componenet/marquee2";
import BrandSwiper from "../../componenet/brandswiper";
import { dentalblog, dentaldata, dentalswiper, workingdata } from "../../constant/alldata";
import CountUp from "react-countup";

function Index3() {
    return (
        <>
            <Header />
            <section className="hero-section-three" style={{ backgroundImage: `url(${IMAGES.threeshapline})` }}>
                <div className="container">
                    <div className="hero-text-three">
                        <h1>Advanced</h1>
                        <div className="dentistry">
                            <div className="member-connected">
                                <ul className="experience-team">
                                    <li><img src={IMAGES.team1} alt="img" /></li>
                                    <li><img src={IMAGES.team2} alt="img" /></li>
                                    <li><img src={IMAGES.team3} alt="img" /></li>
                                </ul>
                                <h4><CountUp end={25} duration={5} />K</h4>
                                <h5>Member Are Connected</h5>
                            </div>
                            <h2><span>Den</span>tistry</h2>
                        </div>
                    </div>
                </div>
                <ul className="shaps">
                    <li><img src={IMAGES.shapethree1} alt="img" /></li>
                    <li><img src={IMAGES.shapethree2} alt="img" /></li>
                </ul>
            </section>
            <Swiper className="swiper image-slider"
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                speed={1000}
                autoplay={{
                    delay: 2000
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[Navigation, Autoplay]}

            >
                <SwiperSlide>
                    <figure>
                        <img src={IMAGES.imageslider1} alt="img" />
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure>
                        <img src={IMAGES.imageslider2} alt="img" />
                    </figure>
                </SwiperSlide>
                <div className="swiper-button">
                    <div className="swiper-button-next"><span>Next</span></div>
                    <div className="swiper-button-prev"><span>Preview</span></div>
                </div>
            </Swiper>
            <section className="gap no-bottom">
                <div className="container">
                    <div className="heading two">
                        <span># Dental Services</span>
                        <h2>Dental Care for Every Smile.</h2>
                    </div>
                    <div className="row row-two g-4">
                        {dentaldata.map((data, i) => (
                            <div className="col-lg-3" key={i}>
                                <div className="dental-services">
                                    <h3><Link to={"#"}> {data.title}</Link></h3>
                                    <i> {data.icon} </i>
                                    <p>Routine check-ups, cleanings, and preventive care to maintain oral health.</p>
                                    <Link to={"/services-details"} className="btn two"><span>Read more<i className="fa-solid fa-arrow-right" /></span></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="section-about-two gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="heading">
                                <span># Dental About Us</span>
                                <h2>Where Your Oral Health Comes First.</h2>
                                <p>health is our top priority. We are dedicated to providing personalized, high-quality dental care in a
                                    warm and welcoming environment. Whether you need preventive care, restorative treatments, or cosmetic
                                    enhancements.</p>
                            </div>
                            <ul className="list-style">
                                <li>Comprehensive Services</li>
                                <li>Community Focused</li>
                                <li>Modern Technology</li>
                                <li>Trusted Legacy</li>
                                <li>Commitment to Comfort</li>
                                <li>Sustainability in Care</li>
                            </ul>
                            <Link to={"/about"} className="btn"><span>More About Us<i className="fa-solid fa-arrow-right" /></span></Link>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-three">
                                <img src={IMAGES.aboutthree} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
                <img src={IMAGES.plus} alt="img" className="plus" />
                <img src={IMAGES.dotimage} alt="img" className="dots-img" />
            </section>
            <Marquee1 />
            <Marquee2 />
            <section className="gap">
                <div className="container">
                    <div className="heading ">
                        <span># Dental Project</span>
                        <h2>A Portfolio of Smiles.</h2>
                    </div>
                    <Swiper className="swiper services-slider"
                        slidesPerView={3}
                        spaceBetween={22}
                        loop={true}
                        speed={1000}
                        freeMode={true}
                        autoplay={{
                            delay: 2000
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Navigation, Autoplay, FreeMode]}
                        breakpoints={{
                            10: {
                                slidesPerView: 1,
                            },
                            992: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {dentalswiper.map((data, i) => (
                            <SwiperSlide key={i}>
                                <div className="dental-project">
                                    <figure>
                                        <img src={data.image} alt="img" />
                                    </figure>
                                    <div className="dental-project-text">
                                        <span>Treatments</span>
                                        <h3><Link to={"/portfolio-details"}> Dental Implants<i className="fa-solid fa-arrow-right" /></Link></h3>
                                    </div>
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
            <section className="working-process-section">
                <div className="container">
                    <div className="heading two">
                        <span># Working Process</span>
                        <h2>From Consultation to Care.</h2>
                    </div>
                    <div className="row">
                        {workingdata.map((data, i) => (
                            <div className="col-lg-4 col-md-6" key={i}>
                                <div className="working-process">
                                    <div className="working-process-img">
                                        <img src={IMAGES.workingprocess1} alt="img" />
                                        <img src={IMAGES.workingprocess2} alt="img" className="color-img" />
                                        <span>{data.number}</span>
                                    </div>
                                    <h3>{data.title}</h3>
                                    <p>We start with a thorough examination and a detailed discussion to understand your dental concerns, goals, and medical history.</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                <img src={IMAGES.workingprocessline} alt="img" className="working-process-line" />
            </section>
            <div className="container gap">
                <BrandSwiper />
            </div>
            <section>
                <div className="container">
                    <div className="heading">
                        <span># Testimonials</span>
                        <h2>Feedback That Inspires?</h2>
                    </div>
                </div>
                <Swiper className="swiper reviewtwo-slider services-slider"
                    slidesPerView={3}
                    spaceBetween={24}
                    loop={true}
                    centeredSlides={true}
                    speed={2000}
                    freeMode={true}
                    autoplay={{
                        delay: 2000
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    breakpoints={{
                        10: {
                            slidesPerView: 1,
                        },
                        556: {
                            spaceBetween: 20,
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                    }}
                    modules={[Navigation, Autoplay, FreeMode]}
                >
                    {dentaldata.map((data, i) => (
                        <SwiperSlide key={i}>
                            <div className="review">
                                <ul className="star">
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                </ul>
                                <p>he team at Md Nuristan Sheik went above and beyond during my treatment. From the doctors to the nurses, everyone was.</p>
                                <div className="review-admin">
                                    <img src={IMAGES.review} alt="img" />
                                    <div>
                                        <h5>DR Tamim Hossin</h5>
                                        <span>{data.title}</span>
                                    </div>
                                </div>
                                <img src={IMAGES.quotes} alt="quotes" className="quotes" />
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="swiper-button">
                        <div className="swiper-button-next"><i className="fa-solid fa-arrow-right" /></div>
                        <div className="swiper-button-prev"><i className="fa-solid fa-arrow-left" /></div>
                    </div>
                </Swiper>
            </section>
            <section className="gap">
                <div className="container">
                    <div className="heading two">
                        <span># Dental Blog</span>
                        <h2>Oral Health Tips & Updates.</h2>
                    </div>
                    <div className="row">
                        {dentalblog.map((data, i) => (
                            <div className="col-lg-4 col-md-6" key={i}>
                                <div className="blog-one-style two hover-img">
                                    <figure>
                                        <img src={data.image} alt="img" />
                                    </figure>
                                    <div className="blog-text">
                                        <h6><Link to={"#"} className="end-0 top-0">15<span> April</span></Link></h6>
                                        <div>
                                            <div className="admin">
                                                <Link to={"#"}><i> {SVGICONS.admin} </i>By Admin</Link>
                                            </div>
                                            <div className="comment">
                                                <Link to={"#"}><i> {SVGICONS.comment} </i>02 Comment</Link>
                                            </div>
                                            <h3><Link to={"/our-blog"}>{data.title}</Link></h3>
                                            <Link to={"/services-details"} style={{color:"var(--theme-colour)"}}> Read More<i className="fa-solid fa-arrow-right" /> </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer3 />
        </>
    );
}
export default Index3;