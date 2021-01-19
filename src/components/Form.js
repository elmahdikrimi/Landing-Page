/* eslint-disable react/jsx-no-duplicate-props */
import { useState } from "react";
const Form = () => {
  const initialFormState = {
    fullName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formInputs, setFormInputs] = useState(initialFormState);

  const [inputError, setInputError] = useState(initialFormState);

  let [isDisabled, setIsDisabled] = useState(false);

  const emailRegExp = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
  const phoneRegExp = RegExp(
    /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
  );

  const formValid = (isError, formInputs) => {
    for (const error of Object.values(isError)) {
      if (error.length > 0) {
        return false;
      }
    }

    for (const val of Object.values(formInputs)) {
      if (val.length === 0 || !val || val == null) {
        return false;
      }
    }

    return true;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(formInputs);
    setFormInputs(initialFormState);
    setInputError(initialFormState);
    setIsDisabled(formValid(initialFormState, initialFormState));
  };

  const formValChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let isError = { ...inputError };

    switch (name) {
      case "fullName":
        isError.fullName =
          value.length < 4 ? "Atleast 4 characaters required" : "";
        break;
      case "email":
        isError.email = emailRegExp.test(value)
          ? ""
          : "Email address is invalid";
        break;
      case "message":
        isError.message =
          value.length < 10 ? "Atleast 10 characaters required" : "";
        break;
      case "phone":
        isError.phone = phoneRegExp.test(value)
          ? ""
          : "Phone number is invalid";
        break;
      default:
        break;
    }

    setFormInputs({
      ...formInputs,
      [name]: value,
    });
    setInputError(isError);
    setIsDisabled(formValid(isError, formInputs));
  };

  return (
    <div className="column is-half is-flex ">
      <div className="hero-body">
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="field">
            <input
              className={
                inputError.fullName.length > 0
                  ? "input input-style is-danger"
                  : "input input-style"
              }
              type="text"
              placeholder="Full name"
              name="fullName"
              value={formInputs.fullName}
              onChange={(e) => formValChange(e)}
            />

            {inputError.fullName.length > 0 && (
              <span className="error">{inputError.fullName}</span>
            )}
          </div>
          <div className="field">
            <input
              className={
                inputError.email.length > 0
                  ? "input input-style is-danger"
                  : "input input-style"
              }
              type="email"
              name="email"
              placeholder="Email"
              value={formInputs.email}
              onChange={(e) => formValChange(e)}
            />
            {inputError.email.length > 0 && (
              <span className="error">{inputError.email}</span>
            )}
          </div>
          <div className="field">
            <input
              className={
                inputError.phone.length > 0
                  ? "input input-style is-danger"
                  : "input input-style"
              }
              type="text"
              name="phone"
              value={formInputs.phone}
              onChange={(e) => formValChange(e)}
              placeholder="example : 123-456-7890"
            />
            {inputError.phone.length > 0 && (
              <span className="error">{inputError.phone}</span>
            )}
          </div>
          <div className="field">
            <textarea
              className={
                inputError.phone.length > 0
                  ? "textarea input-style is-danger"
                  : "textarea input-style"
              }
              placeholder="Your message"
              name="message"
              value={formInputs.message}
              onChange={(e) => formValChange(e)}
            />
            {inputError.message.length > 0 && (
              <span className="error">{inputError.message}</span>
            )}
          </div>
          <div className="is-flex is-justify-content-flex-end">
            <button
              className="button send-btn"
              type="submit"
              disabled={!isDisabled}
            >
              Send it
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Form;
