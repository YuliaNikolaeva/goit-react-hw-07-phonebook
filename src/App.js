import React, { Component } from 'react';
import { connect } from 'react-redux';

import s from './App.module.css';

import ContactForm from './components/ContactForm';
import Container from './components/Container';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';
import Message from './components/Message';

import contactOperations from './redux/contacts/contacts-operations';

const {fetchContacts} = contactOperations;

class App extends Component {

    componentDidMount() {
        this.props.getAllContacts();
    };

    
    render() {
        const { contacts } = this.props;

        return (
            <div className={s.page__wrapper}>
                <Container title={'Phonebook'}>
                    {contacts.length > 1 && <Filter />}
                    <ContactForm />
                </Container>

                <Container title={'Contacts'}>
                    {contacts.length > 0 ? (
                        <ContactsList />
                    ) : (
                        <Message text={'Phonebook is empty'} />
                    )}
                </Container>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    getAllContacts: () => dispatch(fetchContacts()),
})

const mapStateToProps = state => {
    return {
        contacts: state.contacts.items,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
