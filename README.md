# Personal Website

A modern, responsive personal website built with React, Vite, and Tailwind CSS.

## Features

- Clean, professional design
- Responsive layout for all devices
- Sections for About, Experience, Education, and Publications
- Smooth navigation between sections
- Social media links integration

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

### Running the Development Server

To start the development server:
```bash
npm run dev
```

The website will be available at `http://localhost:5173` (or the port shown in the terminal).

### Building for Production

To create a production build:
```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
PersonalWeb/
├── src/
│   ├── App.jsx          # Main React component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Tailwind CSS imports
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── postcss.config.js    # PostCSS configuration
```

## Customization

Edit `src/App.jsx` to customize:
- Your name and job title
- Contact information and social media links
- About section content
- Experience entries
- Education details
- Publications

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- Lucide React (icons)
