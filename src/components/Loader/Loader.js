import Spinner from 'react-loader-spinner';
import styles from '../Loader/Loader.module.css';

const Loader = () => (
  <div className={styles.loader}>
    <Spinner
      type="Circles"
      color="#00BFFF"
      height={80}
      width={80}
      timeout={3000}
    />
  </div>
);
export default Loader;
