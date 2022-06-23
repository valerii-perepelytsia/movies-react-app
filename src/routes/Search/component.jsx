import { useEffect } from "react";
import { connect } from "react-redux";
import { selectSearch, selectSearchLength } from "../../store/movies/selectors";
import { useParams } from "react-router-dom";
import { fetchData } from "../../store/movies/actions";
import { SEARCH_URL } from "../../constants";
import SearchItem from "../../components/SearchItem";
import './style.scss'

const Search = ({ fetchData, search, searchLength }) => {
    const { query } = useParams();
    const searchUrl = `${SEARCH_URL}?api_key=${process.env.REACT_APP_API_KEY}&query=`
    useEffect(() => fetchData(searchUrl, "search",  query), [fetchData, searchUrl, query])
    const isSearchEmpty = () => (searchLength === 0);
    return (
        <ul className="search-list">
            { isSearchEmpty() ?
                <div style={{display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            height: "70vh"}}>
                    <h2>Oops!!! Nothing to show! Try Again...</h2>
                </div> :
                search.map(item => <li className="search-list-item" key={item.id}><SearchItem {...item}/></li>)
            }
        </ul>

    )
}

const mapStateToProps = state => ({
    search: selectSearch(state),
    searchLength: selectSearchLength(state)
});

const mapDispatchToProps = {
    fetchData
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);