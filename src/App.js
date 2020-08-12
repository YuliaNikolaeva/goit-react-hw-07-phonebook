import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import s from './App.module.css';

import ContactForm from './components/ContactForm';
import Container from './components/Container';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';
import Message from './components/Message';

import {contactOperations, contactSelectors} from './redux/contacts';

const {fetchContacts} = contactOperations;

const {getContacts, getLoading} = contactSelectors;

class App extends Component {

    componentDidMount() {
        this.props.getAllContacts();
    };

    render() {
        const { contacts, isLoadingContacts } = this.props;

        return (
            <div className={s.page__wrapper}>

                <Container title={'Phonebook'}>
                    {contacts.length > 1 && <Filter />}
                    <ContactForm />
                </Container>
                <Container title={'Contacts'}>
                    {this.props.isLoadingContacts && <Loader
                        type="Puff"
                        color="#666464"
                        height={60}
                        width={60}
                    />}
                    {contacts.length > 0 ? (
                        <ContactsList />
                    ) : (
                        !isLoadingContacts &&
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
        contacts: getContacts(state),
        isLoadingContacts: getLoading(state),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);