# Live site

https://screamflix.netlify.app/

# Overview

ScreamFlix is a responsive web application for discovering and exploring horror movies across different decades. The application provides users with a curated selection of horror films, detailed movie information, and the ability to filter content by decade.

# Features

- Browse Horror Movies: Discover popular horror films from our curated collection
- Decade Filtering: Filter movies by decade (50's through 20's) to explore horror trends through time
- Detailed Movie Information: View comprehensive details including synopsis, ratings, release date, and runtime
- Responsive Design: Fully optimized for mobile, tablet, and desktop viewing
- Dynamic Backdrops: Beautiful movie backdrops create an immersive browsing experience

# Technology Stack

- [React 18](https://reactjs.org/): Built with the latest React features and hooks
- [React Router](https://reactrouter.com/): For seamless navigation and route management
- [Styled Components](https://styled-components.com/): Component-based styling with dynamic theming
- [TMDB API](https://www.themoviedb.org/documentation/api): Powered by The Movie Database for comprehensive movie data
- Custom Hooks: Includes custom hooks for loading states, navigation, and UI controls

# Project Structure

js-project-movies/
├── src/
│ ├── api/ # API integration layer
│ ├── components/ # Reusable UI components
│ ├── helpers/ # Utility and helper functions
│ ├── hooks/ # Custom React hooks
│ ├── pages/ # Page-level components
│ ├── styles/ # Global styles and theme
│ ├── App.jsx # Main application component
│ └── index.jsx # Application entry point
└── public/ # Static assets

# Key Components

- Header: Navigation and decade filtering
- MovieInfo: Detailed movie view with backdrop and information
- Card: Movie card with hover effects and quick information
- Dropdown: Decade filter with animated dropdown menu
- DecadeView: Filtered view of horror movies by decade

# Custom Hooks

- useLoader: Manages loading states for async operations
- useDropdown: Controls dropdown menu open/close state
- useGoBack: Handles browser history navigation

# Getting Started

**Prerequisites**

- Node.js (v14+)
- npm or yarn

**Installation**

1. Clone the repository:
   git clone https://github.com/LindaSchonfeldt/js-project-movies

**2. Install dependencies**
npm install

**3. Create an .env file with your TMDB API key:**
VITE_API_KEY=your_tmdb_api_key_here

**4. Start the development server:**
npm run dev

# Acknowledgements

Favicon from: https://www.flaticon.com/free-icons/scary
Ghost icons created by Freepik - Flaticon

# Contributors

[Cathi](https://github.com/violacathrine) & [Linda](https://github.com/LindaSchonfeldt)

**Note**: _ScreamFlix is a personal project and is not affiliated with any commercial streaming service._
