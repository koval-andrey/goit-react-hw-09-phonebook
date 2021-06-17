import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";
import styles from "./LoginView.module.css";

export default function Login () {
  const dispatch = useDispatch();
  //const [email, setEmail] = useState('');
  //const [password, setPassword] = useState('');
  const [user, setUser] = useState({ email: "", password: "", })

  const onChange = ({ currentTarget: { name, value } }) => {
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      dispatch(authOperations.login(user));
      setUser({email: "", password: "",})
    },
    [dispatch, user],
  );

    return (
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>LOG IN</h2>
        <label className={styles.label}>
          EMAIL
          <input
            className={styles.input}
            type="email"
            name="email"
            autoComplete="off"
            placeholder="enter email"
            onChange={onChange}
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
            onChange={onChange}
          />
        </label>
        <button type="submit" className={styles.button}>
          SIGN IN
        </button>
      </form>
    );
  }
