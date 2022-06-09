import { combineReducers } from "redux";
import authReducer from "./auth-reducer";

const rootReducer = combineReducers({
    auth: authReducer,
});

// const RootReducerType = typeof rootReducer;
// export const AppStateType = typeof RootReducerType;

export default rootReducer;