import { ThunkAction } from "redux-thunk";
import { newsAPI } from "../api/api";
import { AppStateType } from "./redux-store";

const SET_TO_DO = "SET_TO_DO";
const SET_IS_FETCHING = "SET_IS_FETCHING";
export type NewsType = {
  userId: number,
  id: number,
  title: string,
  body: string
}

const initialState = {
  news: [] as Array<NewsType>,
  isFetching: false
};
export type InitialStateType = typeof initialState;
export const newsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case SET_TO_DO:
      return {
        ...state,
        news: action.data
      }
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.toggle
      }
    default:
      return state
  }
}
type SetToDoType = {
  type: typeof SET_TO_DO,
  data: Array<NewsType>
}
export const setToDo = (data: Array<NewsType>): SetToDoType => {
  return {
    type: SET_TO_DO,
    data
  }
}
type SetIsFetchingType = {
  type: typeof SET_IS_FETCHING,
  toggle: boolean
}
const setIsFetching = (toggle: boolean): SetIsFetchingType => {
  return {
    type: SET_IS_FETCHING,
    toggle
  }
}
type ActionsTypes=SetIsFetchingType|SetToDoType
export const news = ():ThunkAction<Promise<void>,AppStateType,unknown,ActionsTypes> => async (dispatch) => {
  dispatch(setIsFetching(true))
  let response = await newsAPI.getData()
  dispatch(setToDo(response))
  dispatch(setIsFetching(false))
}