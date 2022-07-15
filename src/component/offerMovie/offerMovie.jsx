import "./offerMovie.css";
import doctor from "./../../assets/img/doctor.jpg";
import minion from "./../../assets/img/minion.jpg";
import bullet from "./../../assets/img/bullet.jpg";
import collision from "./../../assets/img/collision.jpg";
import dumbledore from "./../../assets/img/dumbledore.jpg";
import khunglong from "./../../assets/img/khunglong.jpg";
import lostCity from "./../../assets/img/lost city.jpg";
import memory from "./../../assets/img/memorry.jpg";
import morbius from "./../../assets/img/morbius.jpg";
import shark from "./../../assets/img/shark.jpg";
import sonic from "./../../assets/img/sonic.jpg";
import spiderman from "./../../assets/img/spiderman.jpg";
import theLedge from "./../../assets/img/the ledge.jpg";
import thor from "./../../assets/img/thor.jpg";
import turning from "./../../assets/img/turning red.jpg";
import { SwiperSlide, Swiper } from "swiper/react";
import { FreeMode } from "swiper";
import { Link } from "react-router-dom";

const listImg = [
  {
    img: doctor,
    name: "Doctor Strange in the Multiverse of Madness",
  },
  {
    img: minion,
    name: "Minions: The Rise of Gru",
  },
  {
    img: bullet,
    name: "9 Bullets",
  },
  {
    img: collision,
    name: "Collision",
  },
  {
    img: dumbledore,
    name: "Fantastic Beasts: The Secrets of Dumbledore",
  },
  {
    img: khunglong,
    name: "Jurassic World Dominion",
  },
  {
    img: lostCity,
    name: "The Lost City",
  },
  {
    img: memory,
    name: "Memory",
  },
  {
    img: morbius,
    name: "Morbius",
  },
  {
    img: shark,
    name: "Shark Bait",
  },
  {
    img: sonic,
    name: "Sonic the Hedgehog 2",
  },
  {
    img: spiderman,
    name: "Spider-Man: No Way Home",
  },
  {
    img: theLedge,
    name: "The Ledge",
  },
  {
    img: thor,
    name: "Thor: Love and Thunder",
  },
  {
    img: turning,
    name: "Turning Red",
  },
];
function OfferMovie() {
  return (
    <div className="list-movie">
      <Swiper
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={"auto"}
        modules={[FreeMode]}
        freeMode={true}
      >
        {listImg.map((item, index) => (
          <SwiperSlide key={index} className="item-movie">
            <a href=".">
              <div style={{ position: `relative` }}>
                <img src={item.img} alt="" />
                <Link to="detail">
                  <button className="watch-btn">
                    <i class="fa-solid fa-play"></i>
                  </button>
                </Link>
              </div>
              <h3 className="name-item">{item.name}</h3>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default OfferMovie;
