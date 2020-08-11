import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactActions from '../../redux/contacts/contacts-actions';
import { createRenderer } from 'react-dom/test-utils';

const {
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    addContactRequest,
    addContactSuccess,
    addContactContactsError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
} = contactActions;

const items = createReducer([], {
    [fetchContactsSuccess]: (state,  { payload }) => payload,


    [addContactSuccess]: (state, { payload }) => [
        ...state,
        payload,
    ],

    [deleteContactSuccess]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
    [contactActions.changeFilter.type]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
    [fetchContactsRequest]: () => true,
    [fetchContactsSuccess]: () => false,
    [fetchContactsError]: () => false,
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactContactsError]: () => false,
    [deleteContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [deleteContactError]: () => false,

});

export default combineReducers({
    items,
    filter,
    loading,
});
