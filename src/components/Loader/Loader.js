import Spinner from 'react-loader-spinner';
import s from '../Loader/Loader.module.css';

const Loader = () => (
  <div className={s.loader}>
    <Spinner
      type="Audio"
      color="#00BFFF"
      height={180}
      width={180}
      timeout={3000}
    />
  </div>
);
export default Loader;
