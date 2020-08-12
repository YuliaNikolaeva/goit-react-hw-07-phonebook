import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import contactReducer from './contacts/contacts-reducer';

const middleware = [...getDefaultMiddleware(),logger];

const store = configureStore({
    reducer: {
        contacts: contactReducer,
    },
    middleware,
});


export default store;