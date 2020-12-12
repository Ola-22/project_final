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

  if (!values.name.trim()) {
    errors.value =
      "One or more fields have an error. Please check and try again.";
  }
  if (!values.email.trim()) {
    errors.value =
      "One or more fields have an error. Please check and try again.";
  }
  if (values.name.trim()) {
    errors.errorVal = "Thank you for your message. It has been sent.";
  }
  if (values.email.trim()) {
    errors.errorVal = "Thank you for your message. It has been sent.";
  }

  return errors;
}
