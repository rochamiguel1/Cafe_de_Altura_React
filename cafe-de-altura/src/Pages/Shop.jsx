import React from 'react'
import CoffeeList from '../components/CoffeeList/CoffeeList'
import Conditions from '../components/Conditions/Conditions'
import Copyrights from '../components/Copyrights/Copyrights'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

export default function Shop() {
  return (
    <>
      <Header />
      <CoffeeList />
      <Conditions />
      <Footer />
      <Copyrights />
    </>
  )
}

