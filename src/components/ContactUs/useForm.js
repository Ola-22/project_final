import React from "react";
import { useState } from "react";

export const useForm = (Validations) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(Validations(values));
  };
  return { handleChange, values, handleSubmit, errors };
};
