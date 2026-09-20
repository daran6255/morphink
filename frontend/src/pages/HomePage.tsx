import { useEffect } from 'react'
import {
  AboutTeaserSection,
  FinalCtaSection,
  HeroSection,
  ImpactSection,
  ResourcesTeaserSection,
  WhyMorphinkSection,
} from '../sections/home'

/** Morphink Architecture homepage */
export const HomePage = () => {
  useEffect(() => {
    document.title = 'Morphink Architecture | Architectural & Building Design Firm'
  }, [])

  return (
    <>
      <HeroSection />
      <AboutTeaserSection />
      <WhyMorphinkSection />
      <ImpactSection />
      <ResourcesTeaserSection />
      <FinalCtaSection />
    </>
  )
}
