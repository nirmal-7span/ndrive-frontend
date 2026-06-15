# NDrive

NDrive is a frontend web application for browsing used cars. Users can search, filter, sort, and view detailed information about cars available in the inventory.

I built this project during my frontend internship to practice React, routing, state management, reusable components, and responsive UI development.

## Important Links

- **[GitHub Repository](https://github.com/nirmal-7span/ndrive-frontend)**
- **[Live Deployment](https://ndrive.nirmalpatel.tech/)**
- **[Documentation](https://github.com/nirmal-7span/ndrive-frontend/blob/main/README.md)**
- **[Architecture Explanation](https://github.com/nirmal-7span/ndrive-frontend/blob/main/Architecture.png)**
- **[Screen Recording](https://drive.google.com/drive/folders/1NFCDCNXpiV2-FQhGWoFs5uxOFkN4S_1H?usp=sharing)**

## Features

- Browse available used cars
- Search cars by brand, model, or variant
- Filter cars by:
  - Brand
  - Body Type
  - Fuel Type
  - Transmission
  - Ownership
  - Price Range
  - Year
  - KM Driven

- Sort cars by price, year, and mileage
- Client-side pagination
- Car details page with image gallery and specifications
- Recently viewed cars using localStorage
- Share car details page using the Clipboard API
- Responsive design for mobile, tablet, and desktop
- Dynamic page titles using react-helmet-async

## Tech Stack

- React
- Vite
- React Router DOM
- Tailwind CSS
- Shadcn UI
- JavaScript (ES6+)

## Getting Started

### Prerequisites

Make sure Node.js is installed on your machine.

### Installation

Clone the repository:

```bash
git clone https://github.com/nirmal-7span/ndrive-frontend
cd ndrive-frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the application in your browser:

```txt
http://localhost:5173
```

## Project Structure

```txt
src/
├── api/          # API simulation and data fetching
├── assets/       # Images and static assets
├── components/   # Reusable UI components
├── data/         # Cars data
├── hooks/        # Custom React hooks
├── pages/        # Application pages
├── utils/        # Utility functions
```

## Concepts Used

- React Hooks (useState, useEffect, useMemo)
- Custom Hooks
- Component Reusability
- Client-side Routing
- URL Search Parameters
- Local Storage
- Responsive Design
- Basic SEO

## About

This project was built as part of my frontend internship to build a simple & responsive single-page application.
