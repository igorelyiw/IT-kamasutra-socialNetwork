import friendsReducer, { actions, InitialStateType } from './friendsReducer';

let state: InitialStateType;
beforeEach(() => {
  state = {
    users: [
      {
        id: 0, name: 'Dimych', followed: true,
        photos: { small: null, large: null }, status: 'status 0'
      },
      {
        id: 1, name: 'Dimych1', followed: true,
        photos: { small: null, large: null }, status: 'status 1'
      },
      {
        id: 2, name: 'Dimych2', followed: false,
        photos: { small: null, large: null }, status: 'status 2'
      },
      {
        id: 3, name: 'Dimych3', followed: false,
        photos: { small: null, large: null }, status: 'status 3'
      },
    ],
    pageSize: 10,
    totalUsersCount: 15,
    currentPage: 1,
    isFetching: false,
    isFollowProcess: []
  }

})

test("success follow", () => {
  const newState = friendsReducer(state, actions.followSuccess(2))
  expect(newState.users[1].followed).toBeTruthy()
  expect(newState.users[2].followed).toBeTruthy()
})

test("success unfollow", () => {
  const newState = friendsReducer(state, actions.unfollowSuccess(1))
  expect(newState.users[0].followed).toBeTruthy()
  expect(newState.users[1].followed).toBeFalsy()
})

test("success setUsers", () => {
  const newState = friendsReducer(state, actions.setUsers([]))
  expect(newState.users).toHaveLength(0)
})

test("success setCurrentPage", () => {
  const newState = friendsReducer(state, actions.setCurrentPage(5))
  expect(newState.currentPage).toBe(5)
})

test("success setCurrentPage", () => {
  const newState = friendsReducer(state, actions.setCurrentPage(5))
  expect(newState.currentPage).toBe(5)
})

