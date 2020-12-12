// import React from "react";
import * as S from "./style";
import { InputBox } from "../Input";
import { Label } from "../Label";
import { ContactInfo } from "./ContactInfo";
import { useForm } from "./useForm";
import { Validations } from "./Validations";
import * as F from "../ReservationForm2/style";

export function ContactUs() {
  const { handleChange, values, handleSubmit, errors } = useForm(Validations);
  return (
    <S.ContactMain>
      <S.Layout>
        <S.ContactTitle>Contact</S.ContactTitle>
        <form onSubmit={handleSubmit}>
          <Label forLabel="name" LabelTxt="Your Name (required)" />
          <InputBox
            name="name"
            id="name"
            type="text"
            className="inputContact"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <S.ErrorVal>{errors.name}</S.ErrorVal>}
          <Label forLabel="email" LabelTxt="Your Email (required)" />
          <InputBox
            name="email"
            id="email"
            type="email"
            className="inputContact"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <S.ErrorVal>{errors.email}</S.ErrorVal>}
          <Label forLabel="subject" LabelTxt="Subject" />
          <InputBox
            name="subject"
            id="subject"
            type="text"
            className="inputContact"
          />
          <Label forLabel="message" LabelTxt="Your Message" />
          <textarea cols="40" rows="10" className="textarea" />
          <div>
            <S.SubmitVal type="submit" value="Send" onClick={handleSubmit} />
          </div>
          {errors.value && <F.ErrorDiv primary>{errors.value}</F.ErrorDiv>}
          {errors.errorVal && (
            <F.SuccessMsg primary>{errors.errorVal}</F.SuccessMsg>
          )}
        </form>
      </S.Layout>
      <ContactInfo />
    </S.ContactMain>
  );
}
