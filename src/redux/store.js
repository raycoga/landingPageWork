import { createStore } from 'redux'

const initialState = { data: 'initialData' }

const reducer = ((state = initialState, action) => {
    return state
})

export default createStore(reducer)