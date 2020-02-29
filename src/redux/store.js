import { createStore } from 'redux'

const initialState = { data: 'initialData'}

const reducer = ((state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
})

export default createStore(reducer)