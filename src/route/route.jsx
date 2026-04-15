import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Scroll from "../componenet/scroll";
import Index from "../pages/home";
import Index2 from "../pages/home/index-2";
import MensagemLiderancas from "../pages/mensagem/mensagem-liderancas";
import PerfilCorporativo from "../pages/perfil/perfil-corporativo";
import Governanca from "../pages/governanca/governanca";
import Destaques2025 from "../pages/destaques/destaques-2025";
import Rentabilidade2025 from "../pages/rentabilidade/rentabilidade-2025";
import PlanoBD01 from "../pages/planos/bd-01";
import PlanoCD02 from "../pages/planos/cd-02";
import PlanoCV03 from "../pages/planos/cv-03";
import PlanoCDMetro from "../pages/planos/cd-metro";
import PlanoCD05 from "../pages/planos/cd-05";
import PlanoBrasiliaPrev from "../pages/planos/brasiliaprev";

import PlanoRegiusPrev from "../pages/planos/regiusprev";
import PlanoPGA from "../pages/planos/pga";
import Anexos from "../pages/anexos";
import Index3 from "../pages/home/index-3";
import About from "../pages/about/about";
import Portfolio from "../pages/rearch/portfolio";
import PortfolioDetails from "../pages/rearch/portfolio-details";
import Services from "../pages/page/services";
import ServicesDetails from "../pages/page/services-details";
import Testimonials from "../pages/page/testimonials";
import PricingTable from "../pages/page/pricing-table";
import Faq from "../pages/page/faq";
import OurBlog from "../pages/blog/our-blog";
import BlogDetails from "../pages/blog/blog-details";
import Contact from "../pages/contact/contact";

const rootdata = [
    { path: "/", element: <Index2 /> },
    { path: "/index", element: <Index /> },
    { path: "/index-2", element: <Navigate to="/" replace /> },
    { path: "/index-3", element: <Index3 /> },
    { path: "/mensagem-liderancas", element: <MensagemLiderancas /> },
        { path: "/perfil-corporativo", element: <PerfilCorporativo /> },
    { path: "/governanca", element: <Governanca /> },
    { path: "/rentabilidade-2025", element: <Rentabilidade2025 /> },
    { path: "/destaques-2025", element: <Destaques2025 /> },
    { path: "/plano-bd-01", element: <PlanoBD01 /> },
    { path: "/plano-cd-02", element: <PlanoCD02 /> },
    { path: "/plano-cv-03", element: <PlanoCV03 /> },
    { path: "/plano-cd-metro", element: <PlanoCDMetro /> },
    { path: "/plano-cd-05", element: <PlanoCD05 /> },
    { path: "/brasiliaprev", element: <PlanoBrasiliaPrev /> },

    { path: "/regiusprev", element: <PlanoRegiusPrev /> },
    { path: "/pga", element: <PlanoPGA /> },
    { path: "/anexos", element: <Anexos /> },
    { path: "/about", element: <About /> },
    { path: "/portfolio", element: <Portfolio /> },
    { path: "/portfolio-details", element: <PortfolioDetails /> },
    { path: "/services", element: <Services /> },
    { path: "/services-details", element: <ServicesDetails /> },
    { path: "/testimonials", element: <Testimonials /> },
    { path: "/pricing-table", element: <PricingTable /> },
    { path: "/faq", element: <Faq /> },
    { path: "/our-blog", element: <OurBlog /> },
    { path: "/blog-details", element: <BlogDetails /> },
    { path: "/contact", element: <Contact /> },
    { path: "/apponiment", element: <Navigate to="/contact" replace /> },
    { path: "*", element: <Navigate to="/" replace /> },
]

function Root() {
    return (
        <BrowserRouter>
            <Scroll />
            <Routes>
                {rootdata.map((data, i) => (
                    <Route key={i} path={data.path} element={data.element} />
                ))}
            </Routes>
            {/* <ScrollTopButton /> */}
        </BrowserRouter>
    );
}
export default Root;
