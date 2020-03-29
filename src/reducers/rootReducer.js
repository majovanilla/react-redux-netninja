const initState = {
  posts: [
    { id: '1', title: 'Squirtle Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat' },
    { id: '2', title: 'Charmander Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat' },
    { id: '3', title: 'a Helix Fossil was Found', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat' }
  ]
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