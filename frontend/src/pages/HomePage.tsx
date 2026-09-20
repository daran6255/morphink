import { useEffect } from 'react'
import {
  HeroSection,
  AboutTeaserSection,
  ServicesSection,
  WhyMorphinkSection,
  ImpactSection,
  LeadershipTeaserSection,
  ResourcesTeaserSection,
  FinalCtaSection,
} from '../sections/home'

/** Morphink Architecture homepage */
export const HomePage = () => {
  useEffect(() => {
    document.title = 'Morphink Architecture | Architectural & Building Design Firm | Karur & Hosur'
  }, [])

  return (
    <>
      <HeroSection />
      <AboutTeaserSection />
      <ServicesSection />
      <WhyMorphinkSection />
      <ImpactSection />
      <LeadershipTeaserSection />
      <ResourcesTeaserSection />
      <FinalCtaSection />
    </>
  )
}
