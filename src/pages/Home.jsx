import React, {useState} from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'
import Contacts from '../components/module/Contacts'
import Installation from '../components/module/Installation'
import Repair from '../components/module/Repair'
import Service from '../components/module/Service'
import "../styles/Home.css";
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const [isModalContactOpen, setModalContactOpen] = useState(false);

  const [isModalInstallOpen, setIsModalInstallOpen] = useState(false);
  const [isModalRepairOpen, setIsModalRepairOpen] = useState(false);
  const [isModalServiceOpen, setIsModalServiceOpen] = useState(false);
  return (
    <>

    <Helmet>
        <title>Clear water | Чистые воды - сервис по ремонту, очистке и установка колодцев</title>
        <meta name="description" content="Копка и установка новых колодцев/септиков. Чистка, обслуживание и ремонт Ваших старых колодцев/септиков. Витебск и близлежащие районы." />
        <meta name="keywords" content="Чистка колодца, установка колодцев, копка колодцев, колодцы для воды, септики, установка септика, колодец для канализации" />

        {/* Open Graph / Социальные сети */}
        <meta property="og:title" content="Clear water | Чисты воды — Чистка, установка и ремонт колодцев" />
        <meta property="og:description" content="Установка, обслуживание и ремонт колодцев/септиков." />
        <meta property="og:image" content="https://clearwater.by/Img3.png" />
        <meta property="og:url" content="https://clearwater.by" />
        <meta property="og:type" content="website" />

        {/* Favicon */}
        <link rel="icon" href="/water-flash-fill.svg" />
        <link rel="icon" href="/water-flash-fill.svg" type="image/svg" />
        <link rel="icon" href="/water-flash-fill.svg" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/water-flash-fill.svg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://clearwater.by" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Clearwater",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Витебск",
              "addressCountry": "BY"
            },
            "telephone": "+375 (25) 669-15-81",
            "url": "https://clearwater.by"
           })}
      </script> 
      </Helmet>

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