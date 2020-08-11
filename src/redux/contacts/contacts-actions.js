import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { v4 as uuidv4 } from 'uuid';

const fetchContacts = () => dispatch => {
    dispatch({
        type: 'contacts/fetchContactsRequest'
    })
    return axios.get('http://localhost:4040/contacts')
    .then(response => dispatch({
        type: 'contacts/fetchContactsSuccess',
        payload: response.data,
    }))
    .catch(err => dispatch({
        type: 'contacts/fetchContactsError',
        payload: err,
    }))
};


const addContact = createAction('contacts/Add', newContact => {
    return {
        payload: {
            id: uuidv4(),
            name: newContact.name,
            number: newContact.number,
        },
    };
});

const deleteContact = createAction('contacts/Delete');
const changeFilter = createAction('contacts/Filter');

export default { 
    fetchContacts,
    addContact, 
    deleteContact, 
    changeFilter 
};
