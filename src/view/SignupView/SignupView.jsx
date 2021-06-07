import { Component } from "react";
import { connect } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";
import styles from "./SignupView.module.css";

class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  onChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <h2 className={styles.heading}>Sign up</h2>
        <label className={styles.label}>
          NAME
          <input
            className={styles.input}
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Enter name"
            onChange={this.onChange}
          />
        </label>
        <label className={styles.label}>
          EMAIL
          <input
            className={styles.input}
            type="email"
            name="email"
            autoComplete="off"
            placeholder="Enter email"
            onChange={this.onChange}
          />
        </label>
        <label className={styles.label}>
          PASSWORD
          <input
            className={styles.input}
            type="password"
            name="password"
            autoComplete="off"
            placeholder="Enter password"
            onChange={this.onChange}
          />
        </label>
        <button type="submit" className={styles.button}>
          REGISTER
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (state) => dispatch(authOperations.register(state)),
});

export default connect(null, mapDispatchToProps)(Signup);
