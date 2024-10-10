import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Responsibility from '../components/Responsibility'

type Props = object

function page({}: Props) {
  return (
    <>
   <Navbar/>
   <Responsibility/>
   <Footer/>
    </>
  )
}

export default page