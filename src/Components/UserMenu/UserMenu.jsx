import React from "react";
import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import authOperations from "../../redux/auth/auth-operations";
import styles from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUserName);
  const onLogout = () => {
    dispatch(authOperations.logout());
  }
  return (
    <div className={styles.wrapper}>
    <span className={styles.avatar}>{userName.slice(0, 1)}</span>
    <span className={styles.name}>{userName}</span>
    <button type="button" className={styles.button} onClick={onLogout}>
            LOG OUT
          </button>
        </div>
      );
}  

//const UserMenu = ({ userName, onLogout }) => {
//  return (
//    <div className={styles.wrapper}>
//      <span className={styles.avatar}>{userName.slice(0, 1)}</span>
//      <span className={styles.name}>{userName}</span>
//      <button type="button" className={styles.button} onClick={onLogout}>
//        LOG OUT
//      </button>
//    </div>
//  );
//};

//const mapStateToProps = (state) => ({
//  userName: authSelectors.getUserName(state),
//});

//const mapDispatchToProps = (dispatch) => ({
//  onLogout: () => dispatch(authOperations.logout()),
//});

//export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
