import { UsersType } from './../types/types';
import { followAPI, usersAPI } from '../api/api';
import { BaseThunkType, InferActionsTypes } from './redux-store';


let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 10,
    totalUsersCount: 15,
    currentPage: 1,
    isFetching: false,
    isFollowProcess: [] as Array<Number>, //array of users id's
    filter: {
        term: '',
        friend: null as null | boolean
    }
};
export type InitialStateType = typeof initialState;
export type FilterType = typeof initialState.filter;
type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsTypes>;
export const friendsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SN/FRIENDS/FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.payload) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case 'SN/FRIENDS/UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.payload) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case 'SN/FRIENDS/SET_USERS':
            return {
                ...state, users: action.payload
            }
        case 'SN/FRIENDS/SET_FILTER':
            return {
                ...state, filter: action.payload
            }
        case 'SN/FRIENDS/SET_PAGE_SIZE':
            return {
                ...state, pageSize: action.payload
            }
        case 'SN/FRIENDS/SET_CURRENT_PAGE':
            return {
                ...state, currentPage: action.payload
            }
        case 'SN/FRIENDS/SET_TOTAL_USERS_COUNT':
            return {
                ...state, totalUsersCount: action.payload
            }
        case 'SN/FRIENDS/TOGGLE_IS_FETCHING':
            return {
                ...state, isFetching: action.payload
            }
        case 'SN/FRIENDS/IS_FOLLOW_PROCESS':
            return {
                ...state,
                isFollowProcess: action.toggle
                    ? [...state.isFollowProcess, action.userId]
                    : state.isFollowProcess.filter(userId => userId !== action.userId)
            }
        default:
            return state;
    }
}

export const actions = {
    followSuccess: (userId: number) => ({ type: 'SN/FRIENDS/FOLLOW', payload: userId } as const),
    unfollowSuccess: (userId: number) => ({ type: 'SN/FRIENDS/UNFOLLOW', payload: userId } as const),
    setUsers: (users: Array<UsersType>) => ({ type: 'SN/FRIENDS/SET_USERS', payload: users } as const),
    setCurrentPage: (currentPage: number) => ({ type: 'SN/FRIENDS/SET_CURRENT_PAGE', payload: currentPage } as const),
    setFilter: (filter: FilterType) => ({ type: 'SN/FRIENDS/SET_FILTER', payload: filter } as const),
    setTotalUsersCount: (count: number) => ({ type: 'SN/FRIENDS/SET_TOTAL_USERS_COUNT', payload: count } as const),
    toggleIsFetching: (toggle: boolean) => ({ type: 'SN/FRIENDS/TOGGLE_IS_FETCHING', payload: toggle } as const),
    toggleFollowProcess: (toggle: boolean, userId: number) => ({ type: 'SN/FRIENDS/IS_FOLLOW_PROCESS', toggle, userId } as const),
    setPageSize: (pageSize: number) => ({ type: 'SN/FRIENDS/SET_PAGE_SIZE', payload: pageSize } as const)
}
export const getUsers = (currentPage: number, pageSize: number, filter: FilterType): ThunkType => async (dispatch) => {
    dispatch(actions.toggleIsFetching(true));
    dispatch(actions.setFilter(filter));
    let response = await usersAPI.getUsers(currentPage, pageSize, filter.term, filter.friend);
    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setUsers(response.data.items));
    dispatch(actions.setTotalUsersCount(response.data.totalCount));
}
export const follow = (usersId: number): ThunkType => async (dispatch) => {
    dispatch(actions.toggleFollowProcess(true, usersId))
    let response = await followAPI.postFollow(usersId)
    if (response.data.resultCode === 0) {
        dispatch(actions.followSuccess(usersId));
    }
    dispatch(actions.toggleFollowProcess(false, usersId))
}
export const unfollow = (usersId: number): ThunkType => async (dispatch) => {
    dispatch(actions.toggleFollowProcess(true, usersId))
    let response = await followAPI.deleteFollow(usersId)
    if (response.resultCode === 0) {
        dispatch(actions.followSuccess(usersId));
    }
    dispatch(actions.toggleFollowProcess(false, usersId))
}

export default friendsReducer;
