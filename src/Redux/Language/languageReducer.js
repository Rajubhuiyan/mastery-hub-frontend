import { createSlice } from '@reduxjs/toolkit'
import i18next from 'i18next'

const initialState = {
    currentLanguage: localStorage.getItem('currentLanguage') || 'en',
}

export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        handleChangeLanguage: (state, payload) => { 
            state.currentLanguage = payload.payload
            localStorage.setItem('currentLanguage', payload.payload)
            i18next.changeLanguage(payload.payload)
        }, 
    },
})

export const { handleChangeLanguage} = languageSlice.actions

export default languageSlice.reducer