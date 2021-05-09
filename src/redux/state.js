import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";



let store = {
    _rerenderDisplay() {
        console.log('state changed');
    },
    _state: {
        profilePage: {
            post: [
                { id: 1, message: 'Hi', like: 15 },
                { id: 2, message: 'My name is Petya', like: 20 },
                { id: 3, message: 'I work as programmer since 2015', like: 25 },
                { id: 4, message: 'It*s cool', like: 1 }
            ],
            newPostText: 'it-kamasutra.com'

        },
        messagePage: {
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
        },
        sidebar: {
            friends: [
                { id: 1, name: 'Andriew' },
                { id: 2, name: 'Oleh' },
                { id: 3, name: 'Petro' }
            ]
        }
    },


    dispatch(action) {
      this._state.profilePage=profileReducer(this._state.profilePage,action);
      this._state.messagePage=dialogsReducer(this._state.messagePage,action);
      this._state.sidebar=sidebarReducer(this._state.sidebar,action);
      this._rerenderDisplay(this._state)


    },

    subscribe(observer) {
        this._rerenderDisplay = observer
    },
    getState() {
        return this._state
    }

}







export default store;