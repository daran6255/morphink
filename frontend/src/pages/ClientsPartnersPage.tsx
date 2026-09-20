import { useEffect } from 'react'
import {
  ClientsPartnersHeroSection,
  SectorsServedSection,
  PublicPartnersSection,
  EduConnectAcademicPartnersSection,
  ClientsPartnersCtaSection,
} from '../sections/impact/clientsPartners'

/** Impact: Clients & Partners Page — Sectors served across fintech, healthcare, NGOs, and higher education, alongside public on-record collaborations and the EduConnect academic network. */
export const ClientsPartnersPage = () => {
  useEffect(() => {
    document.title = 'Clients & Strategic Partners | Morphink Architecture'
  }, [])

  return (
    <>
      <ClientsPartnersHeroSection />
      <SectorsServedSection />
      <PublicPartnersSection />
      <EduConnectAcademicPartnersSection />
      <ClientsPartnersCtaSection />
    </>
  )
}
