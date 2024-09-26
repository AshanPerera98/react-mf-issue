import { createStore, combineReducers } from "redux";
import configReducer from "../reducer/configReducer";

const combinedReducer = combineReducers({
  configs: configReducer,
});

const store = createStore(combinedReducer);

export default { store };
