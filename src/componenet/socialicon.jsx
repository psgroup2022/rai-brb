import { Link } from "react-router-dom";

function SocialIcon() {
    return (
        <>
            <ul className="social-icon">
                <li><Link to={"https://www.facebook.com/"} target="blank"><i className="fa-brands fa-facebook" /></Link></li>
                <li><Link to={"https://www.twitter.com/"} target="blank"><i className="fa-brands fa-twitter" /></Link></li>
                <li><Link to={"https://www.instagram.com/"} target="blank"><i className="fa-brands fa-instagram" /></Link></li>
                <li><Link to={"https://www.youtube.com/"} target="blank"><i className="fa-brands fa-youtube" /></Link></li>
            </ul>
        </>
    )
}
export default SocialIcon;