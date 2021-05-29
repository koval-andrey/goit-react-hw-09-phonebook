import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import styles from './Form.module.css';
import PropTypes from 'prop-types';
import { getContacts } from '../../redux/phonebook-selectors';
import * as contactsOperations from '../../redux/phonebook-operations';

class Form extends Component {
  state = { name: '', number: '' };
  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    const { name, number } = this.state;
    event.preventDefault();
    this.props.onSubmit(name, number);
    this.reset();
  };

  reset() {
    this.setState({
      name: '',
      number: '',
    });
  }

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.label} htmlFor={this.nameInputId}>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>
        <label className={styles.label} htmlFor={this.numberInputId}>
          Number
          <input
            className={styles.input}
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            id={this.numberInputId}
          />
        </label>

        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};

const mapStateToProps = state =>({contacts: getContacts(state),});
const mapDispatchToProps = dispatch => ({ onSubmit: ({ name, number }) => dispatch(contactsOperations.addContact({ name,number }))})
export default connect(mapStateToProps, mapDispatchToProps)(Form);
