import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import { medicaldata } from "../constant/alldata";

function Medical() {
    return (
        <>
            <section className="gap">
                <div className="container">
                    <div className="heading">
                        <span># Medical Project</span>
                        <h2>One Portfolio at a Time.</h2>
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
                        {medicaldata.map((data, i) => (
                            <SwiperSlide key={i}>
                                <div className="project-style hover-img">
                                    <figure>
                                        <img src={data.img} alt="img" />
                                    </figure>
                                    <div className="project-text">
                                        <span>Sustainability Goals</span>
                                        <h5><Link to={"#"}> {data.title}</Link></h5>
                                    </div>
                                    <Link to={"/services-details"}><i className="fa-solid fa-arrow-right" /></Link>
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
        </>
    );
}
export default Medical;