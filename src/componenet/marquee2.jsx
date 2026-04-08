import { marqueedata } from "../constant/alldata";

function Marquee2() {
    return (
        <>
            <div className="marquee two">
                <div className="marquee-icon">
                    <div className="marquee-content">
                        {marqueedata.map((data, i) => (
                            <div className="marquee-item" key={i}>
                                <img src={data.image} alt="img" />
                                <h3>{data.title}</h3>
                            </div>
                        ))}
                    </div>
                    <div className="marquee-content two">
                        {marqueedata.map((data, i) => (
                            <div className="marquee-item" key={i}>
                                <img src={data.image} alt="img" />
                                <h3>{data.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Marquee2;