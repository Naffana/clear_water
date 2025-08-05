import React, {useState} from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'
import Contacts from '../components/module/Contacts'
import Installation from '../components/module/Installation'
import Repair from '../components/module/Repair'
import Service from '../components/module/Service'
import "../styles/Home.css";

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
    <module>
     <Contacts isOpen = {isModalOpen} onClose = {()=> setModalOpen(false)}/>
     <Installation/>
     <Repair/> 
     <Service/>
    </module>
    <Header onOpen = {()=> setModalOpen(true)}/>
    <Body onOpen = {()=> setModalOpen(true)}/>
    <Footer onOpen = {()=> setModalOpen(true)}/>
    </>
  )
}

export default Home