import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Filter from '../Components/Filter';
import Form from '../Components/Form';
import ContactList from "../Components/ContactList";
import Container from "../Components/Container/Container"
import { getIsLoading } from '../redux/phonebook-selector';
import * as contactsOperations from '../redux/phonebook-operations';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

    return (
      <>
        <Container title="ContactList">
          <Form />
        </Container>
        <Container title="Contacts">
          <Filter />
          {isLoadingContacts && <h2> Loading contacts...</h2>}
          <ContactList />
        </Container>
      </>
    );
  }
