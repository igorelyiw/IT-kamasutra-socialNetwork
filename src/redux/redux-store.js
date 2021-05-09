import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./appReducer";



let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer,
    sidebar: sidebarReducer,
    friendsPage: friendsReducer,
    auth: authReducer,
    app:appReducer
   
});



let store = createStore(reducers,applyMiddleware(thunkMiddleware) );
window.store = store;


export default store;