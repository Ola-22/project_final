// import React from "react";
import * as S from "./style";
import { InputBox } from "../Input";
import { Label } from "../Label";
import { ContactInfo } from "./ContactInfo";

export function ContactUs() {
  return (
    <S.ContactMain>
      <S.Layout>
        <S.ContactTitle>Contact</S.ContactTitle>
        <Label forLabel="name" LabelTxt="Your Name (required)" />
        <InputBox name="name" id="name" type="text" className="inputContact" />
        <Label forLabel="email" LabelTxt="Your Email (required)" />
        <InputBox
          name="email"
          id="email"
          type="email"
          className="inputContact"
        />
        <Label forLabel="subject" LabelTxt="Subject" />
        <InputBox
          name="email"
          id="email"
          type="text"
          className="inputContact"
        />
        <Label forLabel="message" LabelTxt="Your Message" />
        <textarea cols="40" rows="10" className="textarea" />
        <div>
          <S.SubmitVal type="submit" value="Send" />
        </div>
      </S.Layout>
      <ContactInfo />
    </S.ContactMain>
  );
}
