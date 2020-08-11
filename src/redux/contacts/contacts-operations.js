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

console.log(222, `http://localhost:2000/contacts/2`)

const addContact= contact => dispatch => {
    const newContact = {
        name: contact.name,
        number: contact.number,
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