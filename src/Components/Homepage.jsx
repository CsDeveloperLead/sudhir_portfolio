import React from 'react'
import LandingPage from './HomePageComponents/LandingPage'
import Section2 from './HomePageComponents/Section2'
import Section3 from './HomePageComponents/Section3'

function Homepage() {
  return (
    <div className='w-full h-auto flex flex-col'>
      <LandingPage />
      <Section2 />
      <Section3 />
    </div>
  )
}

export default Homepage