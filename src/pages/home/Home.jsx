import React from 'react'
import Navbar from '../../componants/navbar/Navbar'
import Header from '../../componants/header/Header'
import { Feature } from '../../componants/featured/Feature'
import './home.css'
import PropertyList from '../../componants/propertyList/PropertyList'
import FeaturedPropertise from '../../componants/featureProperty/FeaturedPropertise'
import MailList from '../../componants/mailList/MailList'
import Footer from '../../componants/Footer/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Feature />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedPropertise/>
        <MailList/>
        <Footer/>
      </div>
    </>
  )
}
