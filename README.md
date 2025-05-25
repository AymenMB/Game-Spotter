# Game Hub

Game Hub is a modern, responsive web application for discovering, searching, and sorting video games. Built with React, TypeScript, and Chakra UI, it leverages the RAWG Video Games Database API to provide up-to-date information about thousands of games, genres, and platforms.

## Features

- **Browse Games:** View a grid of popular games with cover images, ratings, and platform icons.
- **Search:** Instantly search for games by name using the search bar.
- **Filter by Genre:** Select a genre from the sidebar to filter games.
- **Filter by Platform:** Choose a platform (PC, PlayStation, Xbox, etc.) to narrow down results.
- **Sort Results:** Sort games by relevance, date added, name, release date, popularity, or average rating.
- **Responsive Design:** Works beautifully on desktop and mobile devices.
- **Dark Mode:** Toggle between light and dark themes.
- **Loading Skeletons:** Smooth loading experience with skeleton cards.

## Tech Stack

- **React** (with hooks and functional components)
- **TypeScript**
- **Chakra UI** (for UI components and theming)
- **Axios** (for API requests)
- **Vite** (for fast development and build)
- **RAWG Video Games Database API**
- **React Icons** (for platform and UI icons)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```sh
   git clone <your-repo-url>
   cd game-hub
   ```

2. **Install dependencies:**

   ```sh
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```
   The app will be available at `http://localhost:5173` (or as indicated in your terminal).

### Build for Production

```sh
npm run build
# or
yarn build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

```sh
npm run preview
# or
yarn preview
```

## Project Structure

```
src/
  App.tsx           # Main app component and layout
  App.css           # App-level styles
  index.css         # Global styles
  main.tsx          # Entry point
  theme.ts          # Chakra UI theme config
  assets/           # Images and icons
  components/       # Reusable UI components
  hooks/            # Custom React hooks for data fetching
  services/         # API client and image utilities
```

## API Key

This project uses the [RAWG API](https://rawg.io/apidocs). The API key is included in the code for demonstration purposes. For production use, consider securing your API key.

## Customization

- **Theme:** Edit `src/theme.ts` to customize the color scheme or initial color mode.
- **API:** Update `src/services/api-client.ts` to change the API base URL or key.

## Credits

- [RAWG Video Games Database API](https://rawg.io/apidocs)
- [Chakra UI](https://chakra-ui.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

## License

This project is for educational/demo purposes. Please check the RAWG API terms for commercial use.
