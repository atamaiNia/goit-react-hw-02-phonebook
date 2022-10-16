import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { Container, MainTitle, SubTitle } from './App.styled';
import { Notify } from 'notiflix';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  findContactByName = name => {
    const { contacts } = this.state;
    return contacts.find(contact => contact.name.toLowerCase() === name);
  };

  formSubmitHandler = data => {
    const { name, number } = data;
    const { findContactByName } = this;
    const normalizeName = name.toLowerCase();
    if (findContactByName(normalizeName)) {
      Notify.warning(`${name} is already in contacts`);
      return;
    }
    this.newContact(name, number);
  };

  newContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const { formSubmitHandler, filterContacts, changeFilter, deleteContact } =
      this;
    const filteredContacts = filterContacts();
    return (
      <Container>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm contacts={contacts} onSubmitForm={formSubmitHandler} />
        <Filter filter={filter} onChange={changeFilter} />
        <SubTitle>Contacts</SubTitle>
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={deleteContact}
        />
      </Container>
    );
  }
}
