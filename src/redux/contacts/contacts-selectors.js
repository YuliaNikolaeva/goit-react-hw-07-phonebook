import {createSelector} from '@reduxjs/toolkit';

const getContacts = state => state.contacts.items;
const getLoading = state => state.contacts.loading;
const getFilter = state => state.contacts.filter;

const getVisibleContacts = createSelector(
    [getContacts, getFilter],
    (contacts, filter) => {
        const normalizerFilter = filter.toLocaleLowerCase();

        return contacts.filter(contact => contact.name
            .toLocaleLowerCase()
            .includes(normalizerFilter)
        );
    },
);


export default {
    getContacts,
    getLoading,
    getFilter,
    getVisibleContacts,
};