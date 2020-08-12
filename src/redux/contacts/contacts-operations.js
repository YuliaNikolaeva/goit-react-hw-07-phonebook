// contacts-operations
import axios from 'axios';
import contactActions from './contacts-actions';

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

const fetchContacts = () => dispatch => {
    dispatch(fetchContactsRequest());

    axios.get('http://localhost:4040/contacts')
    .then(response => dispatch(fetchContactsSuccess(response.data)))
    .catch(err => dispatch(fetchContactsError(err)))
};


const addContact= ({name, number}) => dispatch => {
    const newContact = {
        name,
        number,
    };

    dispatch(addContactRequest())

    axios.post('http://localhost:4040/contacts', newContact)
    .then(({data}) => dispatch(addContactSuccess(data)))
    .catch(err => dispatch(addContactContactsError(err)))
};


const deleteContact = id => dispatch => {
    dispatch(deleteContactRequest());

    axios.delete(`http://localhost:4040/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(err => dispatch(deleteContactError(err)))
}


export default { 
    fetchContacts,
    addContact,
    deleteContact, 
};