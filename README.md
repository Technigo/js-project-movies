# CINEBASE

**Deployed demo:** [https://movies-project-react-router.netlify.app/](https://movies-project-react-router.netlify.app/)

CINEBASE is a responsive, accessible React and Tailwind CSS web application that lets users browse popular movies fetched from the TMDB API. It features dynamic multi‑page navigation via React Router, a splash screen animation, custom branding, and SEO optimizations.

---

## Features & Requirements fulfilled

* **Multi-Page Application:** Home page listing popular movies; detail page for individual movies.
* **React Router Integration:** Client-side routing with dynamic segments (`/movie/:id`).
* **API Integration:** Fetches popular movies and movie details from TMDB API.
* **Template-based implementation**  Built upon the template and tweaked a bit further.
* **Responsive Design:** Mobile-first grid on home (1 column), tablet (3 columns), desktop (4 columns); detail page adjusts layout at MD and LG breakpoints.
* **Styling with Tailwind CSS:** Utility‑first classes for layout, spacing, typography, and hover/transition effects.
* **Branding & Custom Fonts:** Custom navbar with logo and **CINEBASE** brand name with professional-grade fonts for titles and metadata via Adobe Typekit.
* **Accessibility & SEO:**

  * 100% score in Lighthouse
  * Alt attributes on all images
  * Ensured sufficient contrast (dark overlays, text shadows)
  * SEO meta tags (description, keywords)
* **Loading & Error States:**

  * Loading spinner/message while fetching data
  * 404‑style `<NotFound />` page for invalid movie IDs

## Stretch Goals Implemented

* **Not Found Page:** Displays when a movie ID is invalid or fetch errors occur.
* **Loading States:** States for both list and detail pages to inform the user.

---

By Talo & Juan - Feel free to explore, test and suggest improvements! 🚀
