import { Component } from "react";
import { connect } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";
import styles from "./LoginView.module.css";

class Login extends Component {
  state = {
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
        <h2 className={styles.title}>LOG IN</h2>
        <label className={styles.label}>
          EMAIL
          <input
            className={styles.input}
            type="email"
            name="email"
            autoComplete="off"
            placeholder="enter email"
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
            placeholder="enter password"
            onChange={this.onChange}
          />
        </label>
        <button type="submit" className={styles.button}>
          SIGN IN
        </button>
      </form>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  onSubmit: (state) => dispatch(authOperations.login(state)),
});

export default connect(null, mapDispatchToProps)(Login);
