import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux';
import styles from "./Form.module.css";
//import PropTypes from "prop-types";
import { getContacts } from "../../redux/phonebook-selector";
import * as contactsOperations from "../../redux/phonebook-operations";

export default function Form(){
  const dispatch = useDispatch();
//const [name, setName] = useState('');
//const [number, setNumber] = useState('');

const [contact, setContact] = useState({ name: "", number: "", })
const contacts = useSelector(getContacts);

const handleChange = ({ currentTarget: { name, value } }) => {
  setContact(prev => ({ ...prev, [name]: value }));
};

const handleSubmit = useCallback( event => {const onSubmit = (name, number) => {
  dispatch(contactsOperations.addContact({ name, number }));
}; event.preventDefault();
const sameContact = contacts.find(
  item => item.name.toLowerCase() === contact.name.toLowerCase(),
);
if (sameContact) {alert(`${contact.name} already there`);
reset();
return;
}
onSubmit(contact.name, contact.number);
reset();
},
[contacts, dispatch, contact],
);
const reset = ()=> { 
  setContact({ name: "", number: "", })
};
 
    return (
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="name">
          Name
        </label>
        <input
          className={styles.input}
          type="text"
          name="name"
          value={contact.name}
          onChange={handleChange}
          id="name"
          placeholder="Name"
          autoComplete="off"
          autoFocus
        />

        <label className={styles.label} htmlFor="number">
          Number
        </label>
        <input
          className={styles.input}
          type="text"
          name="number"
          value={contact.number}
          onChange={handleChange}
          id="number"
          placeholder="Phone number"
          autoComplete="off"
        />

        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }



//class Form extends Component {
 // static propTypes = {
 //   onSubmit: PropTypes.func.isRequired,
 // };
 // state = { name: "", number: "" };

//  handleChange = (event) => {
 //   const { name, value } = event.currentTarget;
 //   this.setState({ [name]: value });
 // };

 // handleSubmit = (event) => {
 //   event.preventDefault();
 //   const { name } = this.state;
 //   const { contacts, onSubmit } = this.props;
 //   const sameContact = contacts.find(
 //     (item) => item.name.toLowerCase() === name.toLowerCase()
 //   );
  //  if (sameContact) {
  //    alert(`${name} Already exists`);
  //    this.reset();
 //     return;
 //   }
  //  onSubmit(this.state);
  //  this.reset();
 // };

 // reset = () => {
 //   this.setState({
 //     name: "",
 //     number: "",
 //   });
 // };

 // render() {
 //   const { name, number } = this.state;
 //   return (
 //     <form className={styles.form} onSubmit={this.handleSubmit}>
 //       <label className={styles.label} htmlFor="name">
 //         Name
 //       </label>
 //       <input
 //         className={styles.input}
 //         type="text"
 //         name="name"
//         value={name}
//         onChange={this.handleChange}
//       id="name"
//         placeholder="Name"
//          autoComplete="off"
//          autoFocus
//        />
//
 //       <label className={styles.label} htmlFor="number">
//          Number
//        </label>
//        <input
//          className={styles.input}
//          type="text"
//          name="number"
//          value={number}
//          onChange={this.handleChange}
//          id="number"
//          placeholder="Phone number"
//          autoComplete="off"
//  /      />
//
//        <button className={styles.button} type="submit">
//          Add contact
 //       </button>
//      </form>
//    );
//  }
//}
//Form.propTypes = {
//  name: PropTypes.string,
//  number: PropTypes.number,
//};

//const mapStateToProps = (state) => ({ contacts: getContacts(state) });

//const mapDispatchToProps = (dispatch) => ({
//  onSubmit: ({ name, number }) =>
//    dispatch(contactsOperations.addContact({ name, number })),
//});
//export default connect(mapStateToProps, mapDispatchToProps)(Form);
