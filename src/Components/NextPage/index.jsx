import { NavLink } from 'react-router-dom';
import style from './style.css';

export default function NextPage({ to }) {
  return (
    <NavLink className="next-page" to={to}>
      Próxima página
    </NavLink>
  );
}
