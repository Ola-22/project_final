import React from "react";

export function Validations(values) {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "The field is required.";
  }
  if (!values.email.trim()) {
    errors.email = "The field is required.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  return errors;
}
