import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={css.wrapper}>
      <NavLink to="/register" className={css.nav}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.nav}>
        Log In
      </NavLink>
    </div>
  );
}
