import React from 'react'
import NavbarSection from '../../layout/landingpage/Navbar'
import LoginSection from '../../layout/landingpage/Login'
import PropertySection from '../../layout/landingpage/Property'
import AgentSection from '../../layout/landingpage/Agent'
import NewsSection from '../../layout/landingpage/News'
import FooterSection from '../../layout/mainComponent/Footer'

const Main = () => {
  return (
    <div>
      <NavbarSection/> 
      <LoginSection/> 
      <PropertySection/> 
      <AgentSection/> 
      <NewsSection/> 
      <FooterSection/> 
    </div>
  )
}

export default Main
