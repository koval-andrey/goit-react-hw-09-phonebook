import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";
import styles from "./SignupView.module.css";

export default function  Signup () {
  const dispatch = useDispatch();
  //const [name, setName] = useState('');
  //const [email, setEmail] = useState('');
  //const [password, setPassword] = useState('');
  const [user, setUser] = useState({name: "", email: "", password: "",})
  
  const onChange = 
  ({ currentTarget: { name, value } }) => {
    setUser(prev => ({ ...prev, [name]: value }));
  };
  
  //useCallback(event => {
  //  const { name, value } = event.currentTarget;
  //  switch (name) {
  //      setName(value);
  //      break;
  //    case 'email':
 //       setEmail(value);
 //       break;
 //     case 'password':
 //       setPassword(value);
 //       break;
//      default:
//        console.log(new Error());
//    }
//  }, []);

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      dispatch(authOperations.register( user ));
      setUser({name: "", email: "", password: "",})
    },
    [dispatch, user],
  );

    return (
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>SIGN UP</h2>
        <label className={styles.label}>
          NAME
          <input
            className={styles.input}
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Enter name"
            onChange={onChange}
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
            placeholder="Enter password"
            onChange={onChange}
          />
        </label>
        <button type="submit" className={styles.button}>
          REGISTER
        </button>
      </form>
    );
  }

