import { NavLink } from 'react-router-dom';
import style from './style.css';

export default function PreviousPage({ to }) {
  return (
    <NavLink className="previous-page" to={to}>
      Página anterior
    </NavLink>
  );
}
