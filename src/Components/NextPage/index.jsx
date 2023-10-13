import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';
import classNames from 'classnames';

export default function NextPage({ to, className }) {
  return (
    <NavLink className={classNames([styles.next_page], className)} to={to}>
      Próxima página
    </NavLink>
  );
}
