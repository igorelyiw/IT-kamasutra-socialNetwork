import { Action, applyMiddleware, combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import authReducer from "./authReducer";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import appReducer from "./appReducer";
import { newsReducer } from "./newsReducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer,
    sidebar: sidebarReducer,
    friendsPage: friendsReducer,
    auth: authReducer,
    app:appReducer,
    news:newsReducer
   
});
type RootReducerType=typeof rootReducer;
export type AppStateType=ReturnType<RootReducerType>

let store = createStore(rootReducer,applyMiddleware(thunkMiddleware) );
type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never;
export type InferActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesType<T>>
export type BaseThunkType <A extends Action,R=Promise<void>>=ThunkAction<R,AppStateType,unknown,A>


export default store;