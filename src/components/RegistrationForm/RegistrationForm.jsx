import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../../redux/contacts/auth/operations.js";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";

export default function RegisterForm() {
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is Required.")
      .min(1, "Name is Too Short."),
    email: Yup.string().email().required("Email is Required."),
    password: Yup.string()
      .required("Password is Required")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/(?=.*[0-9])/, "Password must contain a number."),
  });

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.wrapper}>
        <label className={css.label}>
          Username
          <Field type="text" name="name" className={css.input} />
          <ErrorMessage
            name="name"
            component="span"
            className={css.errorName}
          />
        </label>
        <label className={css.label}>
          Email
          <Field type="email" name="email" className={css.input} />
          <ErrorMessage
            name="email"
            component="span"
            className={css.errorEmail}
          />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" className={css.input} />
          <ErrorMessage
            name="password"
            component="span"
            className={css.errorPswrd}
          />
        </label>
        <button type="submit" className={css.btn}>
          Register
        </button>
      </Form>
    </Formik>
  );
}
