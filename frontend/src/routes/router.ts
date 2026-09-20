import { createRouter } from '@tanstack/react-router'
import { rootRoute } from './root'
import { homeRoute } from './home'
import { ourStoryRoute } from './ourStory'
import { ourTeamRoute } from './ourTeam'
import { successStoriesRoute } from './successStories'
import { testimonialsRoute } from './testimonials'
import { clientsPartnersRoute } from './clientsPartners'
import { blogsRoute, blogAliasRoute, blogDetailsRoute, blogDetailsAliasRoute } from './blogs'
import { careersRoute } from './careers'
import { contactUsRoute, contactAliasRoute } from './contact'
import {
  adminLoginRoute,
  adminDashboardRoute,
  adminRootRoute,
  adminBlogsRoute,
  adminCareersRoute,
  adminInquiriesRoute,
  adminTestimonialsRoute,
  adminStoriesRoute,
  adminCategoriesRoute,
} from './admin'
import { maintenanceRoute, serverErrorRoute } from './common'
import { NotFoundPage, ServerErrorPage } from '../pages/common'

const routeTree = rootRoute.addChildren([
  homeRoute,
  ourStoryRoute,
  ourTeamRoute,
  successStoriesRoute,
  testimonialsRoute,
  clientsPartnersRoute,
  blogsRoute,
  blogAliasRoute,
  blogDetailsRoute,
  blogDetailsAliasRoute,
  careersRoute,
  contactUsRoute,
  contactAliasRoute,
  adminLoginRoute,
  adminDashboardRoute,
  adminRootRoute,
  adminBlogsRoute,
  adminCareersRoute,
  adminInquiriesRoute,
  adminTestimonialsRoute,
  adminStoriesRoute,
  adminCategoriesRoute,
  maintenanceRoute,
  serverErrorRoute,
])

export const router = createRouter({
  routeTree,
  defaultNotFoundComponent: NotFoundPage,
  defaultErrorComponent: ServerErrorPage,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
