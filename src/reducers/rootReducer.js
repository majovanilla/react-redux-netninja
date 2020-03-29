const initState = {
  todos: [],
  posts: []
}

const rootReducer = (state = initState, action) => {
  return state;
  // if (action.type === 'ADD_TODO') {
  //   return {
  //     ...state,
  //     todos: [...state.todos, action.todo]
  //   }
  // }

}

// store.susbscribe() => {
//   console.log(store.getState());
// }

// const store = createStore(myreducer)

// const todoAction = { type: 'ADD_TODO', todo: 'buy something' }

// store.dispatch(todoAction);

export default rootReducer;