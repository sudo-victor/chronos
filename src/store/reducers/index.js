import { combineReducers } from "redux";

import configList from "./configList";
import settings from "./settings";

export default combineReducers({
    configList,
    settings,
});
