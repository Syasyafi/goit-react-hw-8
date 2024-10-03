import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../filters/auth/operations";
import * as Yup from "yup";
import css from "./LoginForm.module.css";

export default function LoginForm() {
  const FeedbackSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is Required."),
    password: Yup.string()
      .required("Password is Required")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/(?=.*[0-9])/, "Password must contain a number."),
  });
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form autoComplete="off" className={css.wrapper}>
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
          Login
        </button>
      </Form>
    </Formik>
  );
}
