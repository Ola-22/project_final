import React, { useReducer, useEffect, useState } from "react";
import { ReserContent } from "./ReserContent";
import { InputBox } from "../Input";
import { Label } from "../Label";
import * as S from "./style";
import * as F from "../ContactUs/style";
import axios from "axios";
import { Switch } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";

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

    case "email":
      return {
        ...state,
      };

    case "name":
      return {
        ...state,
      };
    default:
      return state;
  }
}

export function ReservationForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [emailError, setEmailErr] = useState({});
  const [nameError, setNameErr] = useState({});
  const [state, dispatch] = useReducer(reducer, initState);

  async function fetchData(_email) {
    try {
      const action = { type: "loading" };
      dispatch(action);
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/1${email}`
      );
      console.log(data);
      console.log(state.data.body);
      const action2 = { type: "success", payload: data };
      dispatch(action2);
    } catch (error) {
      let errMsg;
      const err = error.response;
      if (err.status === 404) {
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
    const isValid = formValidation();
    if (isValid) {
      setName("");
    }
  };

  const formValidation = () => {
    const emailError = {};
    const nameError = {};
    let isValid = true;

    if (name.trim().length < 5) {
      nameError.nameShort = "The field is required.";
      isValid = false;
    }

    // if (!name.includes("")) {
    //   nameError.nameShort = "The field is required.";
    //   isValid = false;
    // }

    setNameErr(nameError);
    return isValid;
  };
  return (
    <S.MainRes>
      <ReserContent />
      <InputBox
        className="inputVal"
        name="name"
        id="name"
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {Object.keys(nameError).map((key) => {
        return (
          <div
            style={{
              color: "#dc3232",
              marginLeft: "27.5%",
              fontSize: "1em",
              fontWeight: "400",
              marginBottom: "1%",
              marginTop: "-25px",
            }}
          >
            {nameError[key]}
          </div>
        );
      })}
      <InputBox
        name="email"
        id="email"
        type="email"
        placeholder="Your Email"
        className="inputVal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* {Object.keys(nameError).map((key) => {
        return (
          <div
            style={{
              color: "#dc3232",
              marginLeft: "27.5%",
              fontSize: "1em",
              fontWeight: "400",
              marginBottom: "1%",
              marginTop: "-25px",
            }}
          >
            {nameError[key]}
          </div>
        );
      })} */}
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
    </S.MainRes>
  );
}
