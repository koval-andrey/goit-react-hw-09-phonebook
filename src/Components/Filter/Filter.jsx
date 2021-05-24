import styles from './Filter.module.css'


const Filter = ({ value, onChange }) => (
  <label className={styles.label}>
    Find contacts by Name
    <input
      type="text"
      className={styles.input}
      value={value}
      onChange={onChange}
    />
  </label>
);



export default Filter;