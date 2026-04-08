import AboutUs from "../../componenet/aboutus";
import Marquee1 from "../../componenet/marquee1";
import Marquee2 from "../../componenet/marquee2";
import Medical from "../../componenet/medical";
import PageBanner from "../../componenet/pagebanner";
import Pricing from "../../componenet/pricing";
import TestiSwiper from "../../componenet/testiswiper";
import Whychoose from "../../componenet/whychoose";
import { IMAGES } from "../../constant/theme";
import Footer from "../../layout/footer";
import Header from "../../layout/header";

function About() {
    return (
        <>
            <Header />
            <PageBanner title="About Us" image={IMAGES.bannrimag} />
            <section className="gap">
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
            <Footer />
        </>
    );
}
export default About; 