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
  const [isModalContactOpen, setModalContactOpen] = useState(false);

  const [isModalInstallOpen, setIsModalInstallOpen] = useState(false);
  const [isModalRepairOpen, setIsModalRepairOpen] = useState(false);
  const [isModalServiceOpen, setIsModalServiceOpen] = useState(false);
  return (
    <>
    <module>
     <Contacts isOpenContacts = {isModalContactOpen} onCloseContacts = {()=> setModalContactOpen(false)}/>
     <Installation isOpenInstall = {isModalInstallOpen} onCloseInstall = {()=> setIsModalInstallOpen(false)}/>
     <Repair  isOpenRepair = {isModalRepairOpen} onCloseRepair = {()=> setIsModalRepairOpen(false)}/> 
     <Service  isOpenService = {isModalServiceOpen} onCloseService = {()=> setIsModalServiceOpen(false)}/>
    </module>
    <Header 
    onOpenContact = { ()=> setModalContactOpen(true)}
    onOpenInstall = { ()=> setIsModalInstallOpen(true)}
    onOpenRepair = { ()=> setIsModalRepairOpen(true)}
    onOpenService = { ()=> setIsModalServiceOpen(true)}
    />
    <Body 
    onOpenContact = { ()=> setModalContactOpen(true)}
    onOpenInstall = { ()=> setIsModalInstallOpen(true)}
    onOpenRepair = { ()=> setIsModalRepairOpen(true)}
    onOpenService = { ()=> setIsModalServiceOpen(true)}
    />
    <Footer/>
    </>
  )
}

export default Home