import { profileAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PHOTOS = 'SET_USER_PHOTOS';

let initialState = {
    post: [
        { id: 1, message: 'Hi', like: 15 },
        { id: 2, message: 'My name is Petya', like: 20 },
        { id: 3, message: 'I work as programmer since 2015', like: 25 },
        { id: 4, message: 'It*s cool', like: 1 }
    ],

    profile: null,
    status: ''

};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            if (action.text) {
                return {
                    ...state,
                    post: [...state.post, { id: 5, message: action.text, like: 0 }]
                }
            }
return state
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }

        case SET_USER_STATUS:
            return { ...state, status: action.status }
        case SET_USER_PHOTOS:
            return { ...state, profile: { ...state.profile, photos: action.photos } }

        case DELETE_POST:
            return { ...state, post: state.post.filter(p => p.id !== action.userId) }
        default:
            return state;

    }
}
export const addPostAC = (text) => {
    return {
        type: ADD_POST,
        text
    }
}
export const deletePost = (userId) => {
    return {
        type: DELETE_POST,
        userId
    }
}
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}
export const setUserStatus = (status) => {
    return {
        type: SET_USER_STATUS,
        status
    }
}
export const setUserPhotos = (photos) => {

    return {
        type: SET_USER_PHOTOS,
        photos
    }
}
export const profileThunk = (userId) => {

    return (dispatch) => {

        profileAPI.getProfile(userId).then(data => {

            dispatch(setUserProfile(data));
        })

    }
}
export const getStatus = (userId) => {
    return (dispatch) => {

        profileAPI.getUserStatus(userId)
            .then(responce => {

                dispatch(setUserStatus(responce.data));
            })

    }
}

export const updateStatus = (status) => async (dispatch) => {

    let responce = await profileAPI.updateStatus(status)
    if (responce.data.resultCode === 0) {
        dispatch(setUserStatus(status));

    }




}


export const savePhoto = (file) => {

    return (dispatch) => {

        profileAPI.updatePhoto(file)
            .then(responce => {

                if (responce.data.resultCode === 0) {

                    dispatch(setUserPhotos(responce.data.data.photos));

                }
            })

    }
}

export default profileReducer;