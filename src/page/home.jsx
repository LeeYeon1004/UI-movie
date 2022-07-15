import Header from "./../component/header/header.jsx";
import Hero from "./../component/hero-slider/hero-slider.jsx";
import OfferMovie from "../component/offerMovie/offerMovie.jsx";
import Footer from "./../component/footer/footer.jsx";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "MovieAppReact";
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <div className="section">
        <h2>Top trending</h2>
        <Link to="list">
          <button className="section-btn">View more</button>
        </Link>
      </div>
      <OfferMovie />
      <div className="section">
        <h2>Tìm kiếm nhiều nhất</h2>
        <Link to="list">
          <button className="section-btn">View more</button>
        </Link>
      </div>
      <OfferMovie />
      <div className="section">
        <h2>Đề xuất</h2>
        <Link to="list">
          <button className="section-btn">View more</button>
        </Link>
      </div>
      <OfferMovie />
      <div className="section">
        <h2>Trending TV</h2>
        <Link to="list">
          <button className="section-btn">View more</button>
        </Link>
      </div>
      <OfferMovie />
      <Footer />
    </>
  );
}
export default Home;
