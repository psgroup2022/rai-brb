import { Link } from "react-router-dom";
import { IMAGES } from "../constant/theme";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

function AboutUs() {
    const percentage = 85;
    const percentages = 60;
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-img hover-img">
                            <figure>
                                <img src={IMAGES.about1} alt="img" />
                            </figure>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-text heading ">
                            <span># About Us</span>
                            <h2>Excellence in Healthcare Rooted in Trust.</h2>
                            <p>For years, we’ve dedicated ourselves to delivering exceptional medical care with integrity, compassion, and respect. Our commitment to excellence goes beyond treatments—we aim to build lasting relationships with every patient, ensuring they feel supported and empowered throughout their health journey.</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-5">
                        <div className="about-text">
                            <ul className="list-style">
                                <li>Transforming healthcare experiences through</li>
                                <li>Providing care with kindness and understanding</li>
                                <li>Striving for the highest standards in every service</li>
                                <li>Dedicated to improving public health outcomes</li>
                            </ul>
                            <Link to={"/about"} className="btn two"><span>More About Us<i className="fa-solid fa-arrow-right" /></span></Link>
                            <img src={IMAGES.sign} alt="img" className="signature" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="about-img hover-img w-100">
                            <figure>
                                <img src={IMAGES.about2} alt="img" />
                            </figure>
                        </div>
                    </div>
                    <div className="col-lg-3" >
                        <div className="row">
                            <div className="col-lg-12 col-md-6">
                            <div className="progressbar-text">
                                    <div className="progressbar">
                                        <div style={{ position: 'relative', width: 150, height: 150 }}>
                                            <CircularProgressbar
                                                value={percentage}
                                                strokeWidth={6}
                                                styles={buildStyles({
                                                    pathColor: '#5050f4',
                                                    trailColor: '#5454FF10',
                                                    textColor: '#000',
                                                })}
                                            />
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    top: '50%',
                                                    left: '50%',
                                                    transform: 'translate(-50%, -50%)',
                                                    fontWeight: '600',
                                                    fontSize: '40px',
                                                    color: '#000',
                                                    fontFamily: 'Poppins',
                                                }}
                                            >
                                                {percentage}%
                                            </div>
                                        </div>
                                    </div>
                                    <h2 className="pt-3">qualified doctors</h2>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-6">
                            <div className="progressbar-text pt-4">
                                    <div className="progressbar">
                                    <div style={{ position: 'relative', width: 150, height: 150 }}>
                                            <CircularProgressbar
                                                value={percentages}
                                                strokeWidth={6}
                                                styles={buildStyles({
                                                    pathColor: '#5050f4',
                                                    trailColor: '#5454FF10',
                                                    textColor: '#000',
                                                })}
                                            />
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    top: '50%',
                                                    left: '50%',
                                                    transform: 'translate(-50%, -50%)',
                                                    fontWeight: '600',
                                                    fontSize: '40px',
                                                    color: '#000',
                                                    fontFamily: 'Poppins',
                                                }}
                                            >
                                                {percentages}%
                                            </div>
                                        </div>
                                    </div>
                                    <h2 className="pt-3">Open communication</h2>
                                </div> 
                            </div>
                        </div>
                                {/* <div className="progressbar-text">
                                    <div className="progressbar">
                                        <div style={{ position: 'relative', width: 150, height: 150 }}>
                                            <CircularProgressbar
                                                value={percentage}
                                                strokeWidth={6}
                                                styles={buildStyles({
                                                    pathColor: '#5050f4',
                                                    trailColor: '#5454FF10',
                                                    textColor: '#000',
                                                })}
                                            />
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    top: '50%',
                                                    left: '50%',
                                                    transform: 'translate(-50%, -50%)',
                                                    fontWeight: '600',
                                                    fontSize: '40px',
                                                    color: '#000',
                                                    fontFamily: 'Poppins',
                                                }}
                                            >
                                                {percentage}%
                                            </div>
                                        </div>
                                    </div>
                                    <h2 className="pt-3">qualified doctors</h2>
                                </div>
                                <div className="progressbar-text pt-4">
                                    <div className="progressbar">
                                    <div style={{ position: 'relative', width: 150, height: 150 }}>
                                            <CircularProgressbar
                                                value={percentages}
                                                strokeWidth={6}
                                                styles={buildStyles({
                                                    pathColor: '#5050f4',
                                                    trailColor: '#5454FF10',
                                                    textColor: '#000',
                                                })}
                                            />
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    top: '50%',
                                                    left: '50%',
                                                    transform: 'translate(-50%, -50%)',
                                                    fontWeight: '600',
                                                    fontSize: '40px',
                                                    color: '#000',
                                                    fontFamily: 'Poppins',
                                                }}
                                            >
                                                {percentages}%
                                            </div>
                                        </div>
                                    </div>
                                    <h2 className="pt-3">Open communication</h2>
                                </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutUs; 
