import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactActions from '../../redux/contacts/contacts-actions';

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
    changeFilter,
} = contactActions;

const items = createReducer([], {
    [fetchContactsSuccess]: (_,  { payload }) => payload,

    [addContactSuccess]: (state, { payload }) => [
        ...state,
        payload,
    ],

    [deleteContactSuccess]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
    [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
    [fetchContactsRequest]: () => true,
    [fetchContactsSuccess]: () => false,
    [fetchContactsError]: () => false,
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactContactsError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,

});

const error = createReducer(null, {
    [fetchContactsError]: (_, {payload}) => payload,
    [addContactContactsError]: (_, {payload}) => payload,
    [deleteContactError]:  (_, {payload}) => payload,
});


export default combineReducers({
    items,
    filter,
    loading,
    error, 
});