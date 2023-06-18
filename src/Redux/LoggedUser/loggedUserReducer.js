import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loggedUserData: {},
}

export const loggedUserSlice = createSlice({
    name: 'loggedUser',
    initialState,
    reducers: {
        setLoggedUserData: (state, payload) => { 
            state.loggedUserData = payload.payload
        },
        resetLoggedUserData: (state) => {
            state.loggedUserData = {}
        }
    },
})

export const { setLoggedUserData,resetLoggedUserData } = loggedUserSlice.actions

export default loggedUserSlice.reducer