import { Link } from "react-router-dom";
import { IMAGES, SVGICONS } from "../constant/theme";
import { menudata } from "../constant/alldata";
import { useState, useEffect } from "react";

function Header() {
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
        const body = document.body;
        if (search) {
            body.classList.remove('search-active');
        } else {
            body.classList.add('search-active');
        }
        setSearch(!search);
    };

    return (
        <header className={`sticky-header main-bar-wraper ${isSticky ? 'is-fixed' : ''}`}>
            <div className="main-bar">


                <div className="container">
                    <div className="bottom-bar px-4">
                        <div className="two-bar">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="logo">
                                    <Link to="/"> <img alt="logo" src={IMAGES.logo} /> </Link>
                                </div>
                            </div>
                        </div>
                        <Link to={"#"} id="mobile-menu" className="menu-start" onClick={() => handleclick(show)}>
                            <i className="fa-solid fa-bars" />
                        </Link>
                        <nav className="navbar">
                            <ul className="navbar-links">
                                {menudata.map((item, i) => {
                                    let menuClassName = item.classChange;
                                    if (menuClassName === 'navbar-dropdown menu-item-children') {
                                        return (
                                            <li key={i} className={menuClassName}>
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
                                            <li key={i} className="navbar-dropdown">
                                                <Link to={item.link}>{item.title}</Link>
                                            </li>
                                        )
                                    }
                                })}
                            </ul>
                        </nav>
                        <div className="header-menu-right">
                            <div className="header-search-button search-box-outer" onClick={addBodyClass}>
                                <Link to={"#"} className="search-btn">
                                    <i>{SVGICONS.search} </i>
                                </Link>
                            </div>
                            <Link to="/contact" className="btn"><span>Book Appointment<i className="fa-solid fa-arrow-right" /></span></Link>
                        </div>
                    </div>
                </div>
                <div className={`mobile-nav ${show ? 'open' : ''}`} id="mobile-nav">
                    <div className="res-log">
                        <Link to="/">
                            <img alt="logo" src={IMAGES.logo} />
                        </Link>
                    </div>
                    <ul>
                        {menudata.map((item, i) => {
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
                <div className="search-popup">
                    <button className="close-search" onClick={addBodyClass}><i className="fa-solid fa-xmark" /></button>
                    <form method="post">
                        <div className="form-group">
                            <input type="search" name="search-field" defaultValue="" placeholder="Search Here" required="" />
                            <button type="submit"><i className="fa fa-search" /></button>
                        </div>
                    </form>
                </div>
            </div>
        </header>
    );
}
export default Header;