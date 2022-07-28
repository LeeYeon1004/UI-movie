import "./App.scss";
import "./assets/fontawesome-free-6.0.0-web/css/all.min.css";
import "./assets/themify-icons/themify-icons.css";
import HomePage from "./page/home.jsx";
import ListMovie from "./page/listmovie/listMovie.jsx";
import { Routes, Route } from "react-router-dom";
import DetailMovie from "./page/detaileMovie/detail.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="list" element={<ListMovie />} />
        <Route path="detail/:movieID" element={<DetailMovie />} />
      </Routes>
    </>
  );
}

export default App;
