import { Link } from "react-router-dom";
import {IMG_URL} from "../../constants";
import './style.scss'

const SearchItem = ({id, title, poster_path, overview, release_date}) => {
    return(
        <div className="item-container">
            <div className="image-container">
                <Link to={`/details/${id}`}>
                    <img className="itemImage" src={`${IMG_URL}${poster_path}`} alt={title} loading="lazy"/>
                </Link>
            </div>
            <div className="details-container">
                <p className="release-date">Release date: {release_date}</p>
                <p className="overview">{overview}</p>
            </div>
        </div>
    )
}

export default SearchItem;