import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loggedUserData: localStorage.getItem('logged_user') ? JSON.parse(localStorage.getItem('logged_user')) : null,
}

export const loggedUserSlice = createSlice({
    name: 'loggedUser',
    initialState,
    reducers: {
        setLoggedUserData: (state, payload) => {
            state.loggedUserData = payload.payload
        },
        resetLoggedUserData: (state) => {
            state.loggedUserData = null
        }
    },
})

export const { setLoggedUserData, resetLoggedUserData } = loggedUserSlice.actions

export default loggedUserSlice.reducer