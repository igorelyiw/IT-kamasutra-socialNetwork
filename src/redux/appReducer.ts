import { ThunkAction } from "redux-thunk";
import { auth } from "./authReducer";
import { AppStateType, InferActionsTypes } from "./redux-store";

let initialState = {
    initialized: false
};
export type InitialStateType=typeof initialState;
type ActionsTypes=InferActionsTypes<typeof actions>;
const appReducer = (state = initialState, action:ActionsTypes):InitialStateType => {
    switch (action.type) {
        case 'SET_INITIALIZED':
            return {
                ...state,
                initialized: true
            }
        default:
            return state;

    }
}

export const actions={
    setInitialized:()=>({type: 'SET_INITIALIZED'} as const)
}


export const initializeApp = ():ThunkAction<Promise<void>,AppStateType,unknown,ActionsTypes>=> async(dispatch) => {
    dispatch(auth()).then(() => {
        dispatch(actions.setInitialized())
    })
}

export default appReducer;