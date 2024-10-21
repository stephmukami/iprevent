import React from "react";
import Navbar from "../(components)/Navbar";
import Footer from "../(components)/Footer";
import Prediction from "../(components)/Prediction";

type Props = object;

function page({}: Props) {
  return (
    <>
      <Navbar />
      <Prediction/>
      <Footer />
    </>
  );
}

export default page;
