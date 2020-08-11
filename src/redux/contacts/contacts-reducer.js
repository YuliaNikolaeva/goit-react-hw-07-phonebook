import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactActions from '../../redux/contacts/contacts-actions';


const items = createReducer([], {
    'contacts/fetchContactsSuccess': (state, { payload }) => `???`,


    [contactActions.addContact.type]: (state, { payload }) => [
        ...state,
        payload,
    ],

    [contactActions.deleteContact.type]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
    [contactActions.changeFilter.type]: (_, { payload }) => payload,
});

export default combineReducers({
    items,
    filter,
});
