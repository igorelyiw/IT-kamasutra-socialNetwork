import { followAPI, usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USER';
const SET_PAGE_SIZE = 'SET_PAGE_SIZE';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const IS_FOLLOW_PROCESS = 'IS_FOLLOW_PROCESS';
let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 15,
    currentPage: 1,
    isFetching: false,
    isFollowProcess: []
};
const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_PAGE_SIZE:
            return {
                ...state, pageSize: action.pageSize
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.toggle
            }
        case IS_FOLLOW_PROCESS:
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
export const followSuccess = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollowSuccess = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}
export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}
export const setTotalUsersCount = (count) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count
    }
}
export const toggleIsFetching = (toggle) => {
    return {
        type: TOGGLE_IS_FETCHING,
        toggle
    }
}
export const toggleFollowProcess = (toggle, userId) => {
    return {
        type: IS_FOLLOW_PROCESS,
        toggle,
        userId
    }
}
export const setPageSize = (pageSize) => {
    return { type: SET_PAGE_SIZE, pageSize }
}

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(response => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(response.data.items));
            dispatch(setTotalUsersCount(response.data.totalCount));
        })
    }
}

export const follow = (usersId) => {
    return (dispatch) => {
        dispatch(toggleFollowProcess(true, usersId))
        followAPI.postFollow(usersId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(usersId));
            }
            dispatch(toggleFollowProcess(false, usersId))
        })
    }
}
export const unfollow = (usersId) => {
    return (dispatch) => {
        dispatch(toggleFollowProcess(true, usersId))
        followAPI.deleteFollow(usersId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(usersId));
            }
            dispatch(toggleFollowProcess(false, usersId))
        })
    }
}
export default friendsReducer;
