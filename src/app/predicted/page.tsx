import React from "react";
import Navbar from "../(components)/Navbar";
import Footer from "../(components)/Footer";
import Prediction from "../(components)/Prediction";
import { Suspense } from 'react'

type Props = object;

function page({}: Props) {
  return (
    <>
      <Navbar />

      <Suspense>
        <Prediction/>
      </Suspense>


      <Footer />
    </>
  );
}

export default page;
