import React from "react";
import { DefaultHeader } from "../components/DefaultHeader";
import { ReservationForm } from "../components/ReservationForm";

import { Footer } from "../components/Footer";

export const Reservation = () => {
  return (
    <>
      <DefaultHeader />
      <ReservationForm />
      <Footer />
    </>
  );
};
