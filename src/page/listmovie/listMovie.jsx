import "./listMovie.css";
import Header from "../../component/header/header.jsx";
import Footer from "../../component/footer/footer.jsx";
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
import BlackPhone from "./../../assets/img/BlackPhone.jpg";
import lightYear from "./../../assets/img/lightYear.jpg";
import ChickenhareandtheHamsterofDarkness from "./../../assets/img/ChickenhareandtheHamsterofDarkness.jpg";
import superhero from "./../../assets/img/superhero.jpg";
import fireheart from "./../../assets/img/fireheart.jpg";
import pet from "./../../assets/img/pet.jpg";
import cube from "./../../assets/img/cube.jpg";
import x from "./../../assets/img/x.jpg";
import men from "./../../assets/img/men.jpg";
import nope from "./../../assets/img/nope.jpg";
import grayman from "./../../assets/img/grayman.jpg";
import turning from "./../../assets/img/turning red.jpg";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import readApi from "../../config/readApi.jsx";

const listImgs = [
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

  {
    img: BlackPhone,
    name: "The black phone",
  },
  {
    img: lightYear,
    name: "Minions: The Rise of Gru",
  },
  {
    img: ChickenhareandtheHamsterofDarkness,
    name: "9 Bullets",
  },
  {
    img: superhero,
    name: "Collision",
  },
  {
    img: fireheart,
    name: "Fantastic Beasts: The Secrets of Dumbledore",
  },
  {
    img: pet,
    name: "Jurassic World Dominion",
  },
  {
    img: cube,
    name: "The Lost City",
  },
  {
    img: x,
    name: "Memory",
  },
  {
    img: men,
    name: "Morbius",
  },
  {
    img: nope,
    name: "Shark Bait",
  },
  {
    img: grayman,
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
function ListMovie() {
  const [list, setList] = useState(listImgs.slice(0, 10));
  const [show, setShow] = useState(false);
  const [movie, setMovie] = useState("");
  const buttonRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (show) {
      setList(listImgs.slice(0));
      buttonRef.current.classList.add("hide");
    } else {
      setList(listImgs.slice(0, 10));
      buttonRef.current.classList.remove("hide");
    }
  }, [show]);

  const fetchApi = async () => {
    const result = await readApi();
    console.log(result);
  };
  fetchApi();

  const handleShow = () => {
    setShow(!show);
  };
  const handleSearch = () => {
    setList(listImgs.filter((item) => item.name.toLowerCase().includes(movie)));
    setMovie("");
  };
  return (
    <>
      <Header />
      <div className="page-header">
        <h2>Danh sách phim hay</h2>
      </div>
      <div className="container-search">
        <div className="search">
          <input
            value={movie}
            onChange={(e) => setMovie(e.target.value.toLowerCase())}
            type="text"
            placeholder="Enter keyword"
          />
          <button className="search-btn" onClick={handleSearch}>
            Tìm kiếm
          </button>
        </div>
        <div className="movie-list-container">
          {list.map((item, index) => (
            <div key={index} className="item-movie">
              <a href=".">
                <div style={{ position: `relative` }}>
                  <img src={item.img} alt="" />
                  <Link to="../detail">
                    <button className="watch-btn">
                      <i class="fa-solid fa-play"></i>
                    </button>
                  </Link>
                </div>
                <h3 className="name-item">{item.name}</h3>
              </a>
            </div>
          ))}
        </div>
        <div className="load-btn">
          <button
            onClick={() => handleShow()}
            className="section-btn"
            ref={buttonRef}
          >
            <p className="hide-btn">Ẩn bớt</p>
            <p className="show-btn">Load more</p>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default ListMovie;
