import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactActions from '../../redux/contacts/contacts-actions';
import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';

import s from './ContactForm.module.css';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    createIdName = uuidv4();
    createIdNumber = uuidv4();

    saveContact = e => {
        const { name, value } = e.currentTarget;
        this.setState({
            [name]: value,
        });
    };

    submitContact = e => {
        const { contacts } = this.props;

        e.preventDefault();

        const isCorrectInput =
            this.state.name.length !== 0 && this.state.number.length !== 0;

        if (!isCorrectInput) {
            alert('One or more fields is full');
            return;
        }

        const isNewContactDublicate = contacts.some(
            contact => contact.name === this.state.name.trim(),
        );

        if (isNewContactDublicate) {
            alert(`${this.state.name.trim()} is alredy in contacts`);
            return;
        }

        this.props.onSubmit(this.state);
        this.reset();
        localStorage.removeItem('not save contact');
    };

    reset = () => {
        this.setState({
            name: '',
            number: '',
        });
    };

    render() {
        return (
            <form onSubmit={this.submitContact}>
                <label className={s.label} htmlFor={this.createIdName}>
                    <div className={s.head__field}>Name</div>
                    <input
                        type="text"
                        name="name"
                        className={s.input}
                        value={this.state.name}
                        onChange={this.saveContact}
                        id={this.createIdName}
                    />
                </label>

                <label className={s.label} htmlFor={this.createIdNumber}>
                    <div className={s.head__field}>Number</div>
                    <input
                        type="tel"
                        name="number"
                        className={s.input}
                        value={this.state.number}
                        onChange={this.saveContact}
                        id={this.createIdNumber}
                    />
                </label>
                <button className={s.btn} type="submit">
                    Add contact
                </button>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onSubmit: newContact => dispatch(contactActions.addContact(newContact)),
});

const mapStateToProps = state => {
    return {
        contacts: state.contacts.items,
    };
};

ContactForm.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
