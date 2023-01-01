import { createStore } from 'redux'
import rootReducers from './reducers/rootReducers'

const store = createStore(rootReducers)

export default store

// our own redux implemention
// const createStore = (reducer, initState) => {
//     const store = {}
//     store.state = initState

//     store.listeners = []

//     store.getState = () => store.state

//     store.subscribe = listener => store.listeners.push(listener)

//     store.dispatch = action => {
//         store.state = reducer(store.state, action)
//         store.listeners.forEach(listener => listener())
//     }

//     return store
// }

// export default createStore