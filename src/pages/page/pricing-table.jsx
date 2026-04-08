import PageBanner from "../../componenet/pagebanner";
import Pricing from "../../componenet/pricing";
import { IMAGES } from "../../constant/theme";
import Footer from "../../layout/footer";
import Header from "../../layout/header";

function PricingTable() {
    return (
        <>
            <Header />
            <PageBanner title="Pricing Table"  image={IMAGES.bannrimag}/>
            <section className="gap pricing-page">
                <Pricing />
            </section>
            <Footer />
        </>
    )
}
export default PricingTable;