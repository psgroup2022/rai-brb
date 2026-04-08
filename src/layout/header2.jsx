import { Link } from "react-router-dom";
import { IMAGES, SVGICONS } from "../constant/theme";
import { menudata2 } from "../constant/alldata";
import { useEffect, useState } from "react";

function Header2() {
    const [show, setShow] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleclick = () => {
        setShow(!show)
    };
    const [isActive, setIsActive] = useState(null);
    function menuHandler(index) {
        if (isActive == index) {
            setIsActive(null)
        } else {
            setIsActive(index)
        }
    }
    const [search, setSearch] = useState(false);
    const addBodyClass = () => {
        setSearch(!search);
    };

    return (
        <header className={`position-relative header-glass ${isSticky ? 'is-sticky' : ''}`}>  
            <div className={`sticky-header main-bar-wraper two ${isSticky ? 'is-fixed' : ''}`}>
                <div className="main-bar">
                    <div className="container">
                        <div className="bottom-bar px-4">
                            <div className="two-bar">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="logo">
                                        <Link to="/">
                                            <img alt="logo Previdencia BRB" src={isSticky ? IMAGES.logo : IMAGES.logo2} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <Link to={"#"} id="mobile-menu" className="menu-start" onClick={() => handleclick(show)}>
                                <i className="fa-solid fa-bars" />
                            </Link>
                            <nav className="navbar">
                                <ul className="navbar-links">
                                    {menudata2.map((item, index) => {
                                        let menuClassName = item.classChange;
                                        if (menuClassName === 'navbar-dropdown menu-item-children') {
                                            return (
                                                <li key={index} className={menuClassName}>
                                                    <Link to={item.link}>{item.title}</Link>
                                                    {item.subMenu && (
                                                        <ul className="sub-menu">
                                                            {item.subMenu.map((subItem, subIndex) => (
                                                                <li key={subIndex}>
                                                                    <Link to={subItem.link}>{subItem.title}</Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </li>
                                            )
                                        }
                                        else {
                                            return (
                                                <li key={index} className="navbar-dropdown">
                                                    <Link to={item.link}>{item.title}</Link>
                                                </li>
                                            )
                                        }
                                    })}
                                </ul>
                            </nav>
                            <div className="header-menu-right">
                                <div className="header-search-button search-box-outer" onClick={() => addBodyClass(search)}>
                                    <Link to={"#"} id="show">
                                        <svg enableBackground="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m128 102.4c0-14.138 11.462-25.6 25.6-25.6h332.8c14.138 0 25.6 11.462 25.6 25.6s-11.462 25.6-25.6 25.6h-332.8c-14.138 0-25.6-11.463-25.6-25.6zm358.4 128h-460.8c-14.138 0-25.6 11.463-25.6 25.6 0 14.138 11.462 25.6 25.6 25.6h460.8c14.138 0 25.6-11.462 25.6-25.6 0-14.137-11.462-25.6-25.6-25.6zm0 153.6h-230.4c-14.137 0-25.6 11.462-25.6 25.6 0 14.137 11.463 25.6 25.6 25.6h230.4c14.138 0 25.6-11.463 25.6-25.6 0-14.138-11.462-25.6-25.6-25.6z"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`mobile-nav ${show ? 'open' : ''}`} id="mobile-nav">
                        <div className="res-log">
                            <Link to="/">
                                <img alt="logo Previdencia BRB" src={IMAGES.logo2} />
                            </Link>
                        </div>
                        <ul>
                            {menudata2.map((item, i) => {
                                let menuClassName = item.classChange2;
                                if (menuClassName === 'menu-item-has-children') {
                                    return (
                                        <li key={i} className={`menu-item-has-children ${i == isActive ? 'active' : ''}`} onClick={() => menuHandler(i)}>
                                            <Link to={item.link}>{item.title}</Link>
                                            {item.subMenu && (
                                                <ul className="sub-menu">
                                                    {item.subMenu.map((subItem, subIndex) => (
                                                        <li key={subIndex}>
                                                            <Link to={subItem.link}>{subItem.title}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    )
                                }
                                else {
                                    return (
                                        <li key={i}>
                                            <Link to={item.link}>{item.title}</Link>
                                        </li>
                                    )
                                }
                            })}
                        </ul>
                        <Link to={"#"} id="res-cross" onClick={() => setShow(false)}></Link>
                    </div>
                    <div id="lightbox" className={`lightbox clearfix ${search ? 'opacity-100 d-block' : 'opacity-0 d-none'}`}>
                        <div className="white_content" >
                            <Link onClick={() => addBodyClass(search)} to={"#"} className="textright" id="close"><i className="fa-regular fa-circle-xmark" /></Link>
                            <h2>Previdência complementar com transparência e confiança.</h2>
                            <h4 className="des">Acompanhe os destaques do RAI 2025 e os resultados da Previdência BRB.</h4>
                            <figure>
                                <img src={IMAGES.about1} alt="Previdência BRB" />
                            </figure>
                            <h3>Contato</h3>
                            <p className="num"><i>{SVGICONS.phone4}</i><Link to="tel:08000002977">0800 000 2977</Link></p>
                            <p className="num"><i>{SVGICONS.address4}</i>SGAS Quadra 902, Ed. Athenas, Bloco A, Térreo, Brasília - DF</p>
                            <div className="social-medias">
                                <Link to={"https://www.previdenciabrb.org.br/"} target="_blank">Site Oficial</Link>
                                <Link to={"mailto:relacionamento@previdenciabrb.org.br"}>E-mail</Link>
                                <Link to={"https://wa.me/5561998031922"} target="_blank">WhatsApp</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}
export default Header2;
