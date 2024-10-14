import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sleep from '../components/Sleep'

type Props = object

function page({}: Props) {
  return (
    <>
    <Navbar/>
    <Sleep/>
    <Footer/>
    </>
  )
}

export default page