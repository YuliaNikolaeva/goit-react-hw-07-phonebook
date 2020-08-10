import { createAction } from '@reduxjs/toolkit';

import { v4 as uuidv4 } from 'uuid';

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

export default { addContact, deleteContact, changeFilter };
