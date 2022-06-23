import { useEffect } from "react";
import { connect } from "react-redux";
import { selectPopular, selectTopRated } from "../../store/movies/selectors";
import { fetchData } from "../../store/movies/actions";
import { API_URL } from "../../constants";
import Card from "../../components/Card";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import './style.scss'

const Home = ({ fetchData, popular, top_rated }) => {
    const popularUrl = `${API_URL}popular?api_key=${process.env.REACT_APP_API_KEY}`
    const topRatedUrl = `${API_URL}top_rated?api_key=${process.env.REACT_APP_API_KEY}`
    useEffect(() => fetchData(popularUrl, "popular"), [fetchData, popularUrl])
    useEffect(() => fetchData(topRatedUrl, "top_rated"), [fetchData, topRatedUrl])
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="container">
            <h2>Popular</h2>
            <Carousel responsive={responsive}>
                {popular.map(item =>
                    <Card key={item.id} {...item}/>
                )}
            </Carousel>
            <h2>Top rated</h2>
            <Carousel responsive={responsive}>
                {top_rated.map(item =>
                    <Card key={item.id} {...item}/>
                )}
            </Carousel>
        </div>
    )
}

const mapStateToProps = state => ({
    popular: selectPopular(state),
    top_rated: selectTopRated(state)
});

const mapDispatchToProps = {
    fetchData
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);