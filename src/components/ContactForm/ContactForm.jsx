import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
// import { addContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-z]+$/, "Name must only contain letters")
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must only contain numbers")
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const initialValue = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <Formik
        initialValues={initialValue}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <div className={css.wrapperFormName}>
            <label>Name</label>
            <Field type="text" name="name" className={css.input} />
            <ErrorMessage
              name="name"
              component="span"
              className={css.errorMessageName}
            />
          </div>

          <div className={css.wrapperFormNumber}>
            <label>Number</label>
            <Field type="tel" name="number" className={css.input} />
            <ErrorMessage
              name="number"
              component="span"
              className={css.errorMessageNumber}
            />
          </div>

          <button type="submit" className={css.btn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
