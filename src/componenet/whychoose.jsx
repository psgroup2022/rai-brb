import { chooseusdata } from "../constant/alldata";
import { IMAGES } from "../constant/theme";

function Whychoose() {
    return (
        <>
            <section className="meets-expertise">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="choose-img">
                                <figure>
                                    <img src={IMAGES.chooseus} alt="img" />
                                </figure>
                                <div className="circle-img">
                                    <img alt="img" src={IMAGES.chooseuslogo} />
                                    <img alt="img" src={IMAGES.circleimage} className="circle" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="heading">
                                <span># Why Choose Us</span>
                                <h2>Where Compassion Meets Expertise.</h2>
                                <p>we believe healthcare is not just about treating illnesses—it’s about caring for people. With a perfect balance of compassion and expertise, our team is dedicated to providing exceptional medical care while ensuring every patient.</p>
                            </div>
                            {chooseusdata.map((data, i) => (
                                <div className="choose-us" key={i}>
                                    <i> {data.svg} </i>
                                    <div>
                                        <h4>{data.title}</h4>
                                        <p>Our highly skilled doctors, nurses, and specialists bring years of experience and a commitment to excellence in every service we provide.</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Whychoose;