import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactOperation from '../../redux/contacts/contacts-operations';
import Button from '../Buttons';
import s from './ContactsList.module.css';

const {deleteContact} = contactOperation;

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
    // console.log('111-state', state.contacts)
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

// export default connect(mapStateToProps)(ContactsList);
