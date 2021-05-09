import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING='TOGGLE_IS_FETCHING';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth:false,
    isFetching:false
};


const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            
            return {
                ...state,
                ...action.data,
                isAuth:true
            }
            case TOGGLE_IS_FETCHING:
            
                return {
                    ...state,
                    isFetching:action.toggle
                    
                }

        default:
            return state;

    }
}

export const setUserData= (userId,email,login) => {
    return {
        type: SET_USER_DATA,
        data:{userId,email,login}
    }
}
export const toggleIsFetching=(toggle)=>{
    return{
        type:TOGGLE_IS_FETCHING,
        toggle
    }
}

export const auth=()=>{
    return(dispatch)=>{
        authAPI.getAuthMe().then(data => {
            if (data.resultCode === 0) {
                let { email, id, login } = data.data;
                dispatch(setUserData(id, email, login));
                dispatch(toggleIsFetching(false))
            }
        })
        return 'hello'
    }
}

export const login=(email,password,rememberMe)=>{
    
    return(dispatch)=>{
        
        authAPI.login(email,password,rememberMe).then(data => {
            if (data.resultCode === 0) {
                // dispatch(auth())
                console.log('work');
                
            }
        })
    }
}

export default authReducer;