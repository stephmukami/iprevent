import React from 'react'
import Navbar from '../(components)/Navbar'
import Footer from '../(components)/Footer'
import Money from '../(components)/Money'

type Props = object

function page({}: Props) {
  return (
    <>
        <Navbar/>
        <Money/>
        <Footer/>
    </>
   
  )
}

export default page