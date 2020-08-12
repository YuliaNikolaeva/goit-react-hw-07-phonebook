import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactOperation from '../../redux/contacts/contacts-operations';
import Button from '../Buttons';
import s from './ContactsList.module.css';
import contactSelectors from '../../redux/contacts/contacts-selectors';

const {deleteContact} = contactOperation;
const {getVisibleContacts} = contactSelectors;

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

const mapStateToProps = state => ({
    contacts: getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
    onclickBtn: id => dispatch(deleteContact(id)),
});

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            number: PropTypes.string,
        }).isRequired,
    ),
    onclickBtn: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);