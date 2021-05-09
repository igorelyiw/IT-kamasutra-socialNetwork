const ADD_MESSAGE = 'ADD-MESSAGE';


let initialState = {
    message: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'My name is Petya' },
        { id: 3, message: 'I work as programmer since 2015' },
        { id: 4, message: 'It*s cool' }
    ],
    dialog: [
        { id: 1, name: 'Victor' },
        { id: 2, name: 'Marina' },
        { id: 3, name: 'Oxana' },
        { id: 4, name: 'Petya' },
        { id: 5, name: 'Dima' }
    ],
    newMessageText: 'Hey,I am react'

};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let text = action.text;
            return {
                ...state,
                message: [...state.message, { id: 6, message: text }]
            }

       

        default:
            return state;

    }
}
export const addMessage = (text) => {
    return {
        type: ADD_MESSAGE,
        text

    }
}


export default dialogsReducer;

