import { useEffect } from 'react'
import {
  SuccessStoriesHeroSection,
  SuccessStoriesGridSection,
  NamedCaseStudySpotlightSection,
  SuccessStoriesCtaSection,
} from '../sections/impact/successStories'
import { useStories } from '../hooks'

/** Impact: Success Stories Page — Verified case studies across residential design, commercial architecture, institutional buildings, urban master planning, and sustainable construction projects. */
export const SuccessStoriesPage = () => {
  const { stories } = useStories()

  useEffect(() => {
    document.title = 'Project Portfolio & Case Studies | Morphink Architecture'
  }, [])

  return (
    <>
      <SuccessStoriesHeroSection />
      <SuccessStoriesGridSection stories={stories as any} />
      <NamedCaseStudySpotlightSection />
      <SuccessStoriesCtaSection />
    </>
  )
}
