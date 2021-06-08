import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Form.module.css";
import PropTypes from "prop-types";
import { getContacts } from "../../redux/phonebook-selector";
import * as contactsOperations from "../../redux/phonebook-operations";

class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = { name: "", number: "" };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name } = this.state;
    const { contacts, onSubmit } = this.state;
    const sameContact = contacts.find(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );
    if (sameContact) {
      alert(`${name} Already exists`);
      this.reset();
      return;
    }
    onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.label} htmlFor="name">
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id="name"
          />
        </label>
        <label className={styles.label} htmlFor="number">
          Number
          <input
            className={styles.input}
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            id="number"
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

const mapStateToProps = (state) => ({ contacts: getContacts(state) });
const mapDispatchToProps = (dispatch) => ({
  onSubmit: ({ name, number }) =>
    dispatch(contactsOperations.addContact({ name, number })),
});
export default connect(mapStateToProps, mapDispatchToProps)(Form);
