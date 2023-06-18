import { configureStore } from '@reduxjs/toolkit';  
import loggedUserReducer from './LoggedUser/loggedUserReducer';

 const store = configureStore({
    reducer:{
        loggedUser: loggedUserReducer,
    }
})

export default store