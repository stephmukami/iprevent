import React from "react";
import Navbar from "../(components)/Navbar";
import Footer from "../(components)/Footer";
import PreviousMedication from "../(components)/PreviousMedication";

type Props = object;

function page({}: Props) {
  return (
    <>
      <Navbar />
      <PreviousMedication/>
      <Footer />
    </>
  );
}

export default page;
