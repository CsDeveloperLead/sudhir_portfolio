import React from 'react'
import LandingPage from './HomePageComponents/LandingPage'
import Section2 from './HomePageComponents/Section2'
import Section3 from './HomePageComponents/Section3'
import BlogSection from './HomePageComponents/BlogSection'
import ContactSection from './HomePageComponents/ContactSection'
import Carousel from './Carousel'

function Homepage() {
  const slides = [
    {
      title: "Advanced Outcome Predictions",
      description:
        "Build models that accurately predict patients' risk of cancer recurrence, progression, or death.",
    },
    {
      title: "Innovative Solutions",
      description:
        "Revolutionize healthcare predictions using advanced AI and survival analysis techniques.",
    },
    {
      title: "Future of HealthTech",
      description:
        "Empower decision-making with multi-modal learning for unparalleled precision.",
    },
  ];
  return (
    <div className='w-full h-auto flex flex-col'>
      <LandingPage />
      <Section2 />
      <Section3 />
      <BlogSection />
      <div className=" h-[450px] mx-1 md:mx-0 md:min-h-screen bg-[#fff] flex items-center justify-center">
      <Carousel slides={slides} />
    </div>
      <ContactSection />
    </div>
  )
}

export default Homepage