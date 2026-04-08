import { Link } from "react-router-dom";
import { pricingdata } from "../constant/alldata";
import { useState } from "react";

function Pricing() {
    const [active, setActive] = useState(0);
    return (
        <>
            <div className="container">
                <div className="heading two">
                    <span># Pricing Table</span>
                    <h2>Flexible Options for Every Patient.</h2>
                </div>
                <div className="row">
                    {pricingdata.map((data, i) => (
                        <div className="col-lg-4 col-md-6" key={i}>
                            <div className={`pricing-plan ${active === data.id ? "two" : ""}`} onMouseEnter={() => setActive(data.id)}>
                                <img src={data.image} alt="img" />
                                <h5>{data.title}</h5>
                                <h3>{data.price}<span>/Usd</span></h3>
                                <span>Primary Health Check-Up</span>
                                <ul className="list-style">
                                    {data.submenu.map((dataa, ii) => (
                                        <li key={ii}>{dataa.title}</li>
                                    ))}
                                </ul>
                                <Link to={"/pricing-table"} className="btn two"><span>Pick This Package<i className="fa-solid fa-arrow-right" /></span></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
export default Pricing;