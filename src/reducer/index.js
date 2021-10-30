import { combineReducers } from "redux";
import Counter from "./counter";
import Refresh_Recycle from "./refresh_recycle";

const reducers = combineReducers({
    counter : Counter,
    refresh_recycle : Refresh_Recycle
});

export default reducers;