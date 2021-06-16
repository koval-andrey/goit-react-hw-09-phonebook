import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";
import styles from "./LoginView.module.css";

export default function Login () {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onChange = useCallback(event => {
    const { name, value } = event.currentTarget;
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  }, []);

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      dispatch(authOperations.login({ email, password }));
    },
    [dispatch, email, password],
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
