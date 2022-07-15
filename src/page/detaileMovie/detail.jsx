import "./detail.css";
import Header from "./../../component/header/header";
import Footer from "./../../component/footer/footer";
import Minion from "./../../assets/img/bannerBG.jpg";
import minion1 from "./../../assets/img/cast/minion1.jpg";
import minion2 from "./../../assets/img/cast/minion2.jpg";
import minion3 from "./../../assets/img/cast/minion3.jpg";
import minion4 from "./../../assets/img/cast/minion4.jpg";
import minion5 from "./../../assets/img/cast/minion5.jpg";
import { useEffect } from "react";
import OfferMovie from "../../component/offerMovie/offerMovie.jsx";

const castList = [
  {
    img: minion1,
    name: "Steve Carell",
  },
  {
    img: minion2,
    name: "Pierre Coffin",
  },
  {
    img: minion3,
    name: "Russell Brand",
  },
  {
    img: minion4,
    name: "Alan Arkin",
  },
  {
    img: minion5,
    name: "Taraji P. Henson",
  },
];
function Detail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        <div className="banner"></div>
        <div className="detail-movie">
          <div className="poster-movie">
            <img src={Minion} alt="" />
          </div>
          <div className="info-movie">
            <h3 className="title-movie">Minions: The Rise of Gru</h3>
            <div className="hastag-movie">
              <p>Family</p>
              <p>Animation</p>
              <p>Adventure</p>
              <p>Comedy</p>
              <p>Fantasy</p>
            </div>
            <div className="description-movie">
              A fanboy of a supervillain supergroup known as the Vicious 6, Gru
              hatches a plan to become evil enough to join them, with the backup
              of his followers, the Minions.
            </div>
            <div className="cast-movie">
              <h3>Casts</h3>
              <div className="casting">
                {castList.map((item, index) => (
                  <div key={index} className="casting-item">
                    <img src={item.img} alt="" />
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="video-container">
          <div className="video-title">
            <h3>Official Trailer</h3>
            <iframe
              src="https://www.youtube.com/embed/HhIl_XJ-OGA"
              frameborder="0"
              title="video"
              width="100%"
              height="800px"
              allowFullScreen="allofullscreen"
            ></iframe>
          </div>
        </div>
        <div className="similar">
          <h3 className="title">Similar</h3>
          <OfferMovie />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Detail;
