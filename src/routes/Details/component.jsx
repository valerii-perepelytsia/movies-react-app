import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { selectDetails } from "../../store/movies/selectors";
import { fetchData } from "../../store/movies/actions";
import {API_URL, IMG_URL} from "../../constants";
import './style.scss'

const Details = ({ fetchData, details }) => {
    const { movieId } = useParams()
    const detailsUrl = `${API_URL}${movieId}?api_key=${process.env.REACT_APP_API_KEY}`
    useEffect(() => fetchData(detailsUrl, "details"), [fetchData, detailsUrl])
    return (
        <div className="details-container">
            <div className="details-image-container">
                <img className="details-image" src={`${IMG_URL}${details.poster_path}`} alt={details.title} loading="lazy"/>
                <h2 className="details-movie-title">{details.title}</h2>
                <p className="details-release-date"> <b>Release: </b>{new Date(details.release_date).toDateString()}</p>
            </div>
            <div className="details-overview-container">
                <div className="info">
                    <div className="details-status-container">
                        <h2 className="details-status-heading">Status:</h2>
                        <p className="details-status">{details.status}</p>
                    </div>
                    <div className="details-imdb-container">
                        <h2 className="details-status-heading">Imdb:</h2>
                        <p className="details-status">{details.imdb_id}</p>
                    </div>
                    <div className="details-overview">
                        <h2 className="details-overview-heading">Overview:</h2>
                        <p className="details-overview-text">{details.overview}</p>
                    </div>
                </div>
                <NavLink className="home" to={'/'}>Home Page</NavLink>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    details: selectDetails(state)
});

const mapDispatchToProps = {
    fetchData
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);