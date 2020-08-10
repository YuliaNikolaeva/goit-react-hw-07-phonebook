import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactActions from '../../redux/contacts/contacts-actions';

const initialState = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const items = createReducer(initialState, {
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
