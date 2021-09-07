import { ResultCodesEnum } from './../api/api';
import { authAPI } from "../api/api";
import { BaseThunkType, InferActionsTypes } from "./redux-store";

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    isFetching: false
};
export type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsTypes>

export const actions = {
    setUserData: (userId: number | null, email: string | null, login: string | null) => ({
        type: 'SET_USER_DATA',
        data: {
            userId,
            email,
            login
        }
          
    }as const),
toggleIsFetching: (toggle: boolean) => ({
    type: 'TOGGLE_IS_FETCHING',
    toggle
} as const)
       
    
}
const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case 'TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.toggle
            }
        default:
            return state;
    }
}

export const auth = (): ThunkType => async (dispatch) => {
    let response = await authAPI.getAuthMe();
    if (response.resultCode === ResultCodesEnum.Success) {
        let { email, id, login } = response.data;
        dispatch(actions.setUserData(id, email, login));
        dispatch(actions.toggleIsFetching(false))
    }
}
export const login = (email: string, password: string, rememberMe: boolean): ThunkType => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.resultCode === ResultCodesEnum.Success) {
        console.log('hello');

    }
}

export default authReducer;