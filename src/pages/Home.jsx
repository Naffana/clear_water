import React from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'
import Contacts from '../components/module/Contacts'
import Installation from '../components/module/Installation'
import Repair from '../components/module/Repair'
import Service from '../components/module/Service'
import "../styles/Home.css";

const Home = () => {
  return (
    <>
    <module>
     <Contacts/>
     <Installation/>
     <Repair/> 
     <Service/>
    </module>
    <Header/>
    <Body/>
    <Footer/>
    </>
  )
}

export default Home