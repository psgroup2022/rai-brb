import BrandSwiper from "../../componenet/brandswiper";
import PageBanner from "../../componenet/pagebanner";
import TestiSwiper from "../../componenet/testiswiper";
import { IMAGES } from "../../constant/theme";
import Footer from "../../layout/footer";
import Header from "../../layout/header";

function Testimonials() {
    return (
        <>
            <Header />
            <PageBanner title="Testimonials" image={IMAGES.bannrimg5}/>
            <TestiSwiper/>
            <div className="container gap no-top">
                <BrandSwiper/>
            </div>
            <Footer />
        </>
    )
}
export default Testimonials;