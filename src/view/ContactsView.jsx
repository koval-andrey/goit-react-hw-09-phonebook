import { Component } from 'react';
import { connect } from 'react-redux';

import Filter from '../Components/Filter';
import Form from '../Components/Form';
import { getIsLoading } from '../redux/phonebook-selector';
import * as contactsOperations from '../redux/phonebook-operations';
import { render } from '@testing-library/react';


class Contacts extends component {
    componentDidMount() {
        this.props.fetchContacts();
    }
}
render() {
    <>
    
    </>
}