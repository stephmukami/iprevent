import React from "react";
import Navbar from "../(components)/Navbar";
import Footer from "../(components)/Footer";
import Gender from "../(components)/Gender";

type Props = object;

function page({}: Props) {
  return (
    <>
      <Navbar />
      <Gender />
      <Footer />
    </>
  );
}

export default page;
