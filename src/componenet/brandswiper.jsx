import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { brandlgodata } from "../constant/alldata";

function BrandSwiper() {
    return (
        <>
            <Swiper className="swiper brand-slide"
                slidesPerView={4}
                spaceBetween={30}
                loop={true}
                speed={1000}
                freeMode={true}
                autoplay={{
                    delay: 2000,
                }}
                modules={[Autoplay, FreeMode]}
                breakpoints={{
                    360: {
                        slidesPerView: 1,
                    },
                    480: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    992: {
                        slidesPerView: 4,
                    },
                    1200: {
                        slidesPerView: 6,
                    },
                }}
            >
                {brandlgodata.map((data, i) => (
                    <SwiperSlide key={i}>
                        <img src={data.img} alt="img" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
export default BrandSwiper;