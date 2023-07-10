import { useState } from "react";

export function useAgeCalculatorLogic() {
  const [values, setValues] = useState({ day: "", month: "", year: "" });

  const hasError = Object.values().some((value) => !value);

  function handleChange(event) {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
  }

  function handleBlur(event) {
    const { name } = event.target;
    setTouched({ ...touched, [name]: true });
  }

  return {
    values,
    touched,
    hasError,
    handleBlur,
    handleChange,
  };
}

// If the input field has been clicked but not filled
// print the specified error message or do nothing
export function errorMessage({ name, touched, values, message }) {
  return touched[name] && !values[name] ? message : "";
}
