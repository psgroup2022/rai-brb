import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
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

const rootdata = [
    { path: "/", element: <Index2 /> },
    { path: "/index-2", element: <Navigate to="/" replace /> },
    { path: "/mensagem-liderancas", element: <MensagemLiderancas /> },
    { path: "/perfil-corporativo", element: <PerfilCorporativo /> },
    { path: "/governanca", element: <Governanca /> },
    { path: "/rentabilidade-2025", element: <Rentabilidade2025 /> },
    { path: "/destaques-2025", element: <Destaques2025 /> },
    { path: "/plano-bd-01", element: <PlanoBD01 /> },
    { path: "/plano-cd-02", element: <PlanoCD02 /> },
    { path: "/cd-02", element: <Navigate to="/plano-cd-02" replace /> },
    { path: "/plano-cd02", element: <Navigate to="/plano-cd-02" replace /> },
    { path: "/plano-cv-03", element: <PlanoCV03 /> },
    { path: "/plano-cd-metro", element: <PlanoCDMetro /> },
    { path: "/plano-cd-05", element: <PlanoCD05 /> },
    { path: "/brasiliaprev", element: <PlanoBrasiliaPrev /> },
    { path: "/regiusprev", element: <PlanoRegiusPrev /> },
    { path: "/pga", element: <PlanoPGA /> },
    { path: "/anexos", element: <Anexos /> },
    { path: "*", element: <Navigate to="/" replace /> },
]

function Root() {
    return (
        <BrowserRouter basename="/rai/2025">
            <ScrollToTop />
            <Routes>
                {rootdata.map((data, i) => (
                    <Route key={i} path={data.path} element={data.element} />
                ))}
            </Routes>
        </BrowserRouter>
    );
}
export default Root;
