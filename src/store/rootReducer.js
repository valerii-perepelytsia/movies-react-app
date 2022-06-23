import { combineReducers } from "redux";

import movies_app from "./movies/reducer";

const rootReducer = combineReducers({
    movies_app,
});

export default rootReducer;