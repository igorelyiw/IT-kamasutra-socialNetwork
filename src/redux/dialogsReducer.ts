import { InferActionsTypes } from './redux-store';

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;
export const actions = {
    addMessage: (text: string) => ({
        type: 'SN/DIALOGS/ADD_MESSAGE',
        text
    }as const)
}
type MessageType = {
    id: number,
    message: string
}
type DialogType = {
    id: number,
    name: string
}
let initialState = {
    message: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'My name is Petya' },
        { id: 3, message: 'I work as programmer since 2015' },
        { id: 4, message: 'It*s cool' }
    ] as Array<MessageType>,
    dialog: [
        { id: 1, name: 'Victor' },
        { id: 2, name: 'Marina' },
        { id: 3, name: 'Oxana' },
        { id: 4, name: 'Petya' },
        { id: 5, name: 'Dima' }
    ] as Array<DialogType>,
    newMessageText: 'Hey,I am react'
};
const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/DIALOGS/ADD_MESSAGE':
            const text = action.text
            return {
                ...state,
                message: [...state.message, { id: 6, message: text }],
            }
        default:
            return state;
    }
}

export default dialogsReducer;

