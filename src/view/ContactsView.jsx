import { Component } from 'react';
import { connect } from 'react-redux';

import Filter from '../Components/Filter';
import Form from '../Components/Form';
import ContactList from "../Components/ContactList";
import Container from "../Components/Container/Container.js"
import { getIsLoading } from '../redux/phonebook-selector';
import * as contactsOperations from '../redux/phonebook-operations';



class Contacts extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <>
        <Container title="ContactList">
          <Form />
        </Container>
        <Container title="Contacts">
          <Filter />
          {this.props.isLoadingContacts && <h2> Loading contacts...</h2>}
          <ContactList />
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoadingContacts: getIsLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);