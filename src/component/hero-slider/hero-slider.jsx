import "./hero-slider.css";
import doctor from "./doctor2.jpg";
import doctorBg from "./doctor.jpg";
import minion from "./minion.jpg";
import minionBg from "./minionBg.jpg";
import ThorBg from "./thorBG.jpg";
import Thor from "./thor.jpg";
import Button from "../button/button.jsx";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Trailer from "../trailer/trailer";
import { useState } from "react";

const heroList = [
  {
    bg: doctorBg,
    title: "Doctor Strange in the Multiverse of Madness",
    content:
      "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
    img: doctor,
    url: "https://www.youtube.com/embed/JAnPg9t5hw0",
  },
  {
    bg: minionBg,
    title: "Minions: The Rise of Gru",
    content:
      "A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.",
    img: minion,
    url: "https://www.youtube.com/embed/HhIl_XJ-OGA",
  },
  {
    bg: ThorBg,
    title: "Thor: Love and Thunder",
    content:
      "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
    img: Thor,
    url: "https://www.youtube.com/embed/uVrlq2tT90U",
  },
];
function Hero() {
  SwiperCore.use([Autoplay]);
  const [url, setUrl] = useState("");
  const [show, setShow] = useState(false);
  const handleClick = (index) => {
    setUrl(heroList[index].url);
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className="container-slide">
      {url && show && <Trailer url={url} handleClose={handleClose} />}
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
      >
        {heroList.map((item, index) => (
          <SwiperSlide
            key={index}
            className="hero-slide"
            style={{ backgroundImage: `url(${item.bg})` }}
          >
            <div className="hero-content">
              <h3 className="title-content">{item.title}</h3>
              <p className="detail-content">{item.content}</p>
              <Button handleClick={() => handleClick(index)} />
            </div>
            <div className="hero-poster">
              <img src={item.img} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default Hero;
