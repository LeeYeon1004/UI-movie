import "./listMovie.css";
import Header from "../../component/header/header.jsx";
import Footer from "../../component/footer/footer.jsx";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import readApi from "../../config/readApi.jsx";

function ListMovie() {
  const [data, setData] = useState([]);
  const [list, setList] = useState(data.slice(0, 10));
  const [show, setShow] = useState(false);
  const [movie, setMovie] = useState("");
  const buttonRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchApi = async () => {
      const result = await readApi();
      setData(result);
    };
    fetchApi();
  }, []);
  useEffect(() => {
    if (show) {
      setList(data.slice(0));
      buttonRef.current.classList.add("hide");
    } else {
      setList(data.slice(0, 10));
      buttonRef.current.classList.remove("hide");
    }
  }, [data, show]);

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  const handleShow = () => {
    setShow(!show);
  };
  const handleSearch = () => {
    setList(data.filter((item) => item.name.toLowerCase().includes(movie)));
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
            onKeyDown={handleKey}
            type="text"
            placeholder="Enter keyword"
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="movie-list-container">
          {list.map((item, index) => (
            <div key={index} className="item-movie">
              <a href=".">
                <div style={{ position: `relative` }}>
                  <img src={item.image} alt="" />
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
