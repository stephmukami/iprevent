import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Entertainment from '../components/Entertainment'

type Props = object

function page({}: Props) {
  return (
    <>
    <Navbar/>
    <Entertainment/>
    <Footer/>
    </>
  )
}

export default page