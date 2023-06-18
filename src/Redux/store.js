import { configureStore } from '@reduxjs/toolkit';  
import loggedUserReducer from './LoggedUser/loggedUserReducer';
import languageReducer from './Language/languageReducer';

 const store = configureStore({
    reducer:{
        loggedUser: loggedUserReducer,
        language: languageReducer
    }
})

export default store