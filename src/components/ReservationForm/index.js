import React from "react";
import { ReserContent } from "./ReserContent";
import { InputBox } from "../Input";
import { Label } from "../Label";
import * as S from "./style";
import * as F from "../ContactUs/style";

export function ReservationForm() {
  return (
    <S.MainRes>
      <ReserContent />
      <InputBox
        className="inputVal"
        name="name"
        id="name"
        type="text"
        placeholder="Your Name"
      />
      <InputBox
        name="email"
        id="email"
        type="email"
        placeholder="Your Email"
        className="inputVal"
      />
      <Label forLabel="checkIn" LabelTxt="Check In" className="check" />
      <InputBox
        name="date"
        id="checkIn"
        type="date"
        placeholder="Check In"
        className="inputVal"
      />
      <Label forLabel="checkOut" LabelTxt="Check Out" className="check" />
      <InputBox
        name="date"
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
        <F.SubmitVal primary type="submit" value="Book Now" />
      </div>
    </S.MainRes>
  );
}
