import { combineReducers } from "redux";
import LibraryReducer from "./LibraryReducer";
import SelectionReducer from "./SelectionReducer";
import AuthReducer from "./AuthReducer";

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryI: SelectionReducer,
  auth: AuthReducer
});
