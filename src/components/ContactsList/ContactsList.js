import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactActions from '../../redux/contacts/contacts-actions';
import Button from '../Buttons';
import s from './ContactsList.module.css';

const ContactsList = ({ contacts, onclickBtn }) => {
    return (
        <ul>
            {contacts.map(contact => (
                <li className={s.contactBox} key={contact.id}>
                    <div className={s.name}>{contact.name}</div>
                    <div className={s.number}>{contact.number}</div>
                    <div className={s.btnBox}>
                        <Button onClick={onclickBtn} contactId={contact.id} />
                    </div>
                </li>
            ))}
        </ul>
    );
};

const mapStateToProps = state => {
    const { items, filter } = state.contacts;
    const normalizerFilter = filter.toLocaleLowerCase();

    const visibleContacts = items.filter(contact =>
        contact.name.toLocaleLowerCase().includes(normalizerFilter),
    );

    return {
        contacts: visibleContacts,
    };
};

const mapDispatchToProps = dispatch => ({
    onclickBtn: id => dispatch(contactActions.deleteContact(id)),
});

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.string,
        }).isRequired,
    ),
    onclickBtn: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
