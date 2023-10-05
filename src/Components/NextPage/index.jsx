import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';
import classNames from 'classnames';

export default function NextPage({ to }) {
  return (
    <NavLink className={classNames(styles.next_page)} to={to}>
      Próxima página
    </NavLink>
  );
}
