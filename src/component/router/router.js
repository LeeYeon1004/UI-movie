import React from "react";
import { Routes , Route } from "react-router-dom";
import HomePage from "./../../page/home.jsx";
import ListMovie from "./../../page/listMovie.jsx";
import DetailMovie from "./../../page/detailMovie.jsx";

function Router(){
    return(
        <Routes>
            <Route path="/home" element={<HomePage/>} />
            <Route path="/list" element={<ListMovie/>} />
            <Route path="/detail" element={<DetailMovie/>} />
        </Routes>
    )
}
export default Router;