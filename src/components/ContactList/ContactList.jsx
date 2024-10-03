import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

export default function ContactList() {
  const allUsersWithFiltred = useSelector(selectFilteredContacts);

  return (
    <ul className={css.ul}>
      {allUsersWithFiltred.map((item) => (
        <li className={css.li} key={item.id}>
          <Contact id={item.id} name={item.name} number={item.number} />
        </li>
      ))}
    </ul>
  );
}
