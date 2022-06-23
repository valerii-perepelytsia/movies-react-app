import { Link } from "react-router-dom";
import {IMG_URL} from "../../constants";
import './style.scss'

const Card = ({id, title, poster_path, popularity, release_date}) => {
    return (
        <div className="card">
            <Link to={`/details/${id}`}>
                <img src={`${IMG_URL}${poster_path}`} alt={title} loading="lazy"/>
            </Link>
            <div className="card-container">
                <h4><b>{title}</b></h4>
                <p>Rating: {Math.round(popularity / 100)}</p>
                <p>Release: {new Date(release_date).toDateString()}</p>
            </div>
        </div>
    )
}

export default Card;