import { Swiper, SwiperSlide } from "swiper/react";
import { IMAGES } from "../constant/theme";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import { reviewslider } from "../constant/alldata";

function TestiSwiper() {
    return (
        <>
            <section className="gap">
                <div className="container">
                    <div className="heading two">
                        <span># Testimonials</span>
                        <h2>What Our Patients Say?</h2>
                    </div>
                    <Swiper className="swiper review-slider"
                        slidesPerView={2}
                        spaceBetween={160}
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
                            992: {
                                slidesPerView: 2,
                            },
                        }}
                    >
                        {reviewslider.slice(0, reviewslider.length - 1).map((data, i) => (
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
                                        <img src={data.image} alt="img" />
                                        <div>
                                            <h5>{data.title}</h5>
                                            <span>Senior Doctor</span>
                                        </div>
                                    </div>
                                    <img src={IMAGES.quotes} alt="quotes" className="quotes" />
                                </div>
                            </SwiperSlide>
                        ))}
                        <div className="swiper-button">
                            <div className="swiper-button-next"><i className="fa-solid fa-chevron-right" /></div>
                            <div className="swiper-button-prev"><i className="fa-solid fa-chevron-left" /></div>
                        </div>
                    </Swiper>
                </div>
            </section>
        </>
    );
}
export default TestiSwiper;