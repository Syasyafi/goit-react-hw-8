import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactForm from "../../components/ContactForm/ContactForm";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import {
  selectContacts,
  selectError,
  selectLoading,
} from "../../redux/contacts/selectors";
import toast, { Toaster } from "react-hot-toast";
import css from "./ContactsPage.module.css";

export default function ContactsPage() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoading);

  const isError = useSelector(selectError);

  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (isLoading) {
      toast.success("Contacts updated...");
    } else if (isError) {
      toast.error("Something went wrong...");
    }
  }, [isLoading, isError]);

  return (
    <div>
      <ContactForm />
      <SearchBox />
      {isLoading && !isError && (
        <div>
          <Loading />
          <Toaster position="top-center" reverseOrder={false} />
        </div>
      )}
      {isError && !isLoading && (
        <div>
          <Error />
          <Toaster position="top-center" reverseOrder={false} />
        </div>
      )}
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p className={css.altText}>Add your first contact 😉</p>
      )}
    </div>
  );
}
