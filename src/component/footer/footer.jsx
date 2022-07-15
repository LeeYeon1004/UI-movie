import './footer.css'
import LogoFooter from './logo.png'
import HomePage from './../../page/home'

function Footer() {

    return (
        <div className='footer-container'>
            <div className="footer-logo">
                <img src={LogoFooter} alt="" />
            </div>
            <div className="footer-info">
                <div className="footer-info-col">
                    <a href={HomePage}><h3>Home</h3></a>
                    <h3>Contact Us</h3>
                    <h3>Trending Movie</h3>
                    <h3>About Us</h3>
                </div>
                <div className="footer-info-col">
                    <h3>Live</h3>
                    <h3>FAQ</h3>
                    <h3>Premium</h3>
                    <h3>Privacy policy</h3>
                </div>
                <div className="footer-info-col">
                    <h3>You must watch</h3>
                    <h3>Recent release</h3>
                    <h3>Top IMDB</h3>
                </div>
            </div>
        </div>
    )
}
export default Footer;