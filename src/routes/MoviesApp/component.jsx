import { Route, Routes } from "react-router-dom";

import Home from "../Home";
import Details from "../Details";
import Search from "../Search";
import Error from "../Error";

const MoviesApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="details" element={<Details/>}>
                <Route index element={<Details/>}/>
                <Route path=":movieId" element={<Details/>}/>
            </Route>
            <Route path="search" element={<Search/>}>
                <Route index element={<Search/>}/>
                <Route path=":query" element={<Search/>}/>
            </Route>
            <Route path="*" element={<Error/>}/>
        </Routes>
    )
}

export default MoviesApp;