import React, { useReducer, useEffect, useState } from "react";
import { ReserContent } from "./ReserContent";
import { InputBox } from "../Input";
import { Label } from "../Label";
import * as S from "./style";
import * as F from "../ContactUs/style";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "../ContactUs/useForm";
import { Validations } from "../ContactUs/Validations";
import * as E from "../ContactUs/style";

const initState = {
  data: {
    email: "",
  },
  loading: false,
  error: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        loading: true,
      };
    case "success":
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case "error":
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
}

export function ReservationForm() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [state, dispatch] = useReducer(reducer, initState);
  const { handleChange, values, handleSubmit } = useForm(Validations);

  async function fetchData(_email) {
    try {
      const action = { type: "loading" };
      dispatch(action);
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/1${email}`
      );
      // console.log(data);
      // console.log(state.data.completed);
      const action2 = { type: "success", payload: data };
      dispatch(action2);
    } catch (error) {
      let errMsg;
      // const err = error.response;
      if (!errors === {}) {
        errMsg =
          "One or more fields have an error. Please check and try again.";
      }
      const action3 = { type: "error", error: errMsg };
      dispatch(action3);
    }
  }

  useEffect(() => {}, []);

  const handleClick = (e) => {
    if (!state.loading) {
      fetchData(email);
    }
    setErrors(Validations(values));
  };
  return (
    <S.MainRes>
      <ReserContent />
      <form onSubmit={handleSubmit}>
        <InputBox
          className="inputVal"
          name="name"
          id="name"
          type="text"
          placeholder="Your Name"
          value={values.name}
          onChange={handleChange}
        />

        {errors.name && <E.ErrorVal primary>{errors.name}</E.ErrorVal>}
        <InputBox
          name="email"
          id="email"
          type="email"
          placeholder="Your Email"
          className="inputVal"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <E.ErrorVal primary>{errors.email}</E.ErrorVal>}
        <Label forLabel="checkIn" LabelTxt="Check In" className="check" />
        <InputBox
          name="checkIn"
          id="checkIn"
          type="date"
          placeholder="Check In"
          className="inputVal"
        />
        <Label forLabel="checkOut" LabelTxt="Check Out" className="check" />
        <InputBox
          name="checkOut"
          id="checkOut"
          type="date"
          placeholder="Check Out"
          className="inputVal"
        />
        <InputBox
          name="number"
          id="number"
          type="number"
          placeholder="Rooms"
          className="inputVal"
        />
        <InputBox
          name="number"
          id="number"
          type="number"
          placeholder="Person"
          className="inputVal"
        />
        <div>
          <F.SubmitVal
            onClick={handleClick}
            primary
            type="submit"
            value="Book Now"
            disabled={state.loading}
          />
          {state.loading && <FontAwesomeIcon icon={faSync} />}
          {state.data.title && <S.SuccessDiv>{state.data.title}</S.SuccessDiv>}
          {state.error && <span>{state.error}</span>}
        </div>
      </form>
    </S.MainRes>
  );
}
