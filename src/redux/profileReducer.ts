import { profileAPI } from "../api/api";
import { PhotosType, PostType, ProfileType } from "../types/types";
import { BaseThunkType, InferActionsTypes } from "./redux-store";

let initialState = {
    post: [
        { id: 1, message: 'Hi', like: 15 },
        { id: 2, message: 'My name is Petya', like: 20 },
        { id: 3, message: 'I work as programmer since 2015', like: 25 },
        { id: 4, message: 'It*s cool', like: 1 }
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: ''
};
export type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkActions = BaseThunkType<ActionsTypes>

const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SN_PROFILE_ADD_POST':
            if (action.newPostText) {
                return {
                    ...state,
                    post: [...state.post, { id: 5, message: action.newPostText, like: 0 }]
                }
            }
            return state
        case 'SN/PROFILE/SET_USER_PROFILE':
            return { ...state, profile: action.profile }
        case 'SN/PROFILE/SET_USER_STATUS':
            return { ...state, status: action.status }
        case 'SN/PROFILE/SET_USER_PHOTOS':
            return { ...state, profile: { ...state.profile, photos: action.photos } as ProfileType }
        case 'SN/PROFILE/DELETE_POST':
            return {
                ...state,
                post: state.post.filter(p => p.id !== action.userId),
            }
        default:
            return state;
    }
}
export const actions = {
    addPostAC: (newPostText: string) => ({ type: 'SN_PROFILE_ADD_POST', newPostText } as const),
    deletePost: (userId: number) => ({
        type: 'SN/PROFILE/DELETE_POST',
        userId
    } as const),
    setUserProfile: (profile: any) => ({
        type: 'SN/PROFILE/SET_USER_PROFILE',
        profile
    } as const),
    setUserStatus: (status: string) => ({
        type: 'SN/PROFILE/SET_USER_STATUS',
        status
    } as const),
    setUserPhotos: (photos: PhotosType) => ({
        type: 'SN/PROFILE/SET_USER_PHOTOS',
        photos
    } as const)
}
export const profileThunk = (userId: number): ThunkActions => async (dispatch) => {
    let response = await profileAPI.getProfile(userId)
    dispatch(actions.setUserProfile(response));
}
export const getStatus = (userId: number): ThunkActions => async (dispatch) => {
    let response = await profileAPI.getUserStatus(userId)
    dispatch(actions.setUserStatus(response.data));
}
export const updateStatus = (status: string): ThunkActions => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)

    dispatch(actions.setUserStatus(status));

}
export const savePhoto = (file: File): ThunkActions => async (dispatch) => {
    let response = await profileAPI.updatePhoto(file)

    if (response.resultCode === 0) {

        dispatch(actions.setUserPhotos(response.data.photos));
    }
}

export default profileReducer;