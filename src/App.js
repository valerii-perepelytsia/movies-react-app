import { Provider } from "react-redux";

import { Route, Routes, NavLink } from "react-router-dom";

import store from './store/configureStore';

import './App.css';

import Home from "./routes/Home";
import Details from "./routes/Details";
import Search from "./routes/Search/component";
import Error from "./routes/Error";
import SearchForm from "./forms/SearchForm";

function App() {
  return (
      <Provider store={ store }>
        <div className="App">
            <div className="header">
                <h1 className="logo">
                    <NavLink to={'/'}>MovieDB</NavLink>
                </h1>
                <div className="header-search-form"><SearchForm/></div>
            </div>
            <div>
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
            </div>
        </div>
      </Provider>
  );
}

export default App;
