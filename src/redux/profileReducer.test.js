import profileReducer, { addPostAC, deletePost } from "./profileReducer";

let state = {
    post: [
        { id: 1, message: 'Hi', like: 15 },
        { id: 2, message: 'My name is Petya', like: 20 },
        { id: 3, message: 'I work as programmer since 2015', like: 25 },
        { id: 4, message: 'It*s cool', like: 1 }
    ]

};
test('renders learn react link', () => {
    let action=addPostAC('hello,World');
    let newState=profileReducer(state,action)
expect (newState.post.length).toBe(5)
  });
  
  test('have that message', () => {
    let action=addPostAC('hello,World');
    let newState=profileReducer(state,action)
expect (newState.post[4].message).toBe('hello,World')
  });
  
  test('deleting element', () => {
   let action=deletePost(1);
   let newState=profileReducer(state,action)

expect (newState.post.length).toBe(3)
  });
  
