import { Swiper, SwiperSlide } from "swiper/react";
import { IMAGES } from "../constant/theme";
import { FreeMode, Pagination, Thumbs } from "swiper/modules";
import { useState } from "react";
import { thumbdata, thumbdata2 } from "../constant/alldata";

function ThumbSwiper() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <section className="gap">
                <div className="container">
                    <div className="heading">
                        <span># Testimonials</span>
                        <h2>Smiles That Tell Our Story?</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-2">
                            <Swiper className="swiper swiper-review-two-img me-5"
                                slidesPerView={3}
                                onSwiper={setThumbsSwiper}
                                spaceBetween={10}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Thumbs]}
                            >
                                {thumbdata.map((data, i) => (
                                    <SwiperSlide key={i}>
                                        <img src={data.image} alt="img" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className="col-lg-10">
                            <Swiper className="swiper swiper-review-two"
                                spaceBetween={10}
                                pagination={{
                                    el: '.swiper-pagination',
                                    clickable: true,
                                }}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[Pagination, Thumbs]}
                            >
                                {thumbdata2.map((data, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="review-two">
                                            <div className="review-two-img">
                                                <h6>The pediatric team is outstanding! They made my child feel comfortable and provided excellent care From the moment we arrived, the staff was warm and welcoming, putting both my child and me at ease.</h6>
                                                <img src={IMAGES.quote2} alt="img" />
                                            </div>
                                            <h4>{data.title}</h4>
                                            <span>- Senior Com Pounder</span>
                                        </div>
                                    </SwiperSlide>
                                ))}
                                <div className="swiper-pagination" style={{width: "100px", left: "auto"}}></div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ThumbSwiper; 