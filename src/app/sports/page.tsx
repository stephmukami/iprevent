import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sports from '../components/Sports'

type Props = object

function page({}: Props) {
  return (
    <>
    <Navbar/>
    <Sports/>
    <Footer/>
    </>
  )
}

export default page