import "./offerMovie.css";
import { SwiperSlide, Swiper } from "swiper/react";
import { FreeMode } from "swiper";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import readApi from "../../config/readApi";

function OfferMovie() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const result = await readApi();
      setData(result);
    };
    fetchApi();
  });
  return (
    <div className="list-movie">
      <Swiper
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={"auto"}
        modules={[FreeMode]}
        freeMode={true}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="item-movie">
            <a href=".">
              <div style={{ position: `relative` }}>
                <img src={item.image} alt="" />
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
