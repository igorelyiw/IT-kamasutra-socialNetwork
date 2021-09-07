
import { followAPI, ResultCodesEnum } from "../api/api"
import { follow } from "./friendsReducer"
jest.mock("../api/api")
const mockAPI=followAPI as jest.Mocked<typeof followAPI>

const result={
    resultCode:ResultCodesEnum.Success,
    messages:[],
    data:{}
}
//@ts-ignore
mockAPI.postFollow.mockReturnValue(Promise.resolve(result))
test('',async()=>{
    const thunk=follow(1)
    const dispatchMock=jest.fn()
    const getStateMock=jest.fn()
    //@ts-ignore
   await thunk(dispatchMock,getStateMock,{})
    expect(dispatchMock).toBeCalledTimes(3)
})