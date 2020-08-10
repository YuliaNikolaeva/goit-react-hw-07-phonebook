import React, { Component } from 'react';
import { connect } from 'react-redux';

import s from './App.module.css';

import ContactForm from './components/ContactForm';
import Container from './components/Container';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';
import Message from './components/Message';

class App extends Component {
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

const mapStateToProps = state => {
    return {
        contacts: state.contacts.items,
    };
};

export default connect(mapStateToProps)(App);
