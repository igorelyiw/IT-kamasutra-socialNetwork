
type FriendsType={
  id:number,
  name:string
}
let initialState={
    friends: [
        { id: 1, name: 'Andriew' },
        { id: 2, name: 'Oleh' },
        { id: 3, name: 'Petro' }
    ]as Array<FriendsType>
};
export type InitialStateType = typeof initialState;
const sidebarReducer=(state=initialState,action:any):InitialStateType=>{
  return state   
}
export default sidebarReducer;