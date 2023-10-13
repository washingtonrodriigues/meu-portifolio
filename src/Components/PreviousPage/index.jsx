import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';
import classNames from 'classnames';

export default function PreviousPage({ to, className }) {
  return (
    <NavLink className={classNames([styles.previous_page], className)} to={to}>
      Página anterior
    </NavLink>
  );
}
