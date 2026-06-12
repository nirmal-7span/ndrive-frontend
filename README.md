# NDrive - Used Cars

Hi there! 👋 Welcome to the frontend repository for **NDrive**, a modern, responsive and user-friendly web application for browsing and buying used cars.

I built this project during my internship to showcase a clean UI, solid React architecture, and a great user experience.

## ✨ What's Inside

- **Dynamic Car Discovery**: A beautiful home page featuring top picks and an automatically updated "Recently Viewed" section.
- **Advanced Search & Filters**: Users can quickly find the exact car they want. Filters like Brand, Fuel Type, and Transmission sync directly with the URL so users can easily copy and share exact search results with friends!
- **Smooth Pagination**: Built-in client-side pagination that makes browsing large inventories seamless.
- **Detailed Car Views**: A dedicated page for every car, featuring an interactive image gallery, full specifications, and a one-click "Share" button.
- **Smart Local Storage**: The "Recently Viewed" feature runs purely on the frontend. It cleverly stores only lightweight car IDs in `localStorage` to keep the app fast.
- **SEO Ready**: Configured with `react-helmet-async` for dynamic browser tab titles, and static Open Graph (`og:`) tags so the site looks amazing when links are shared on WhatsApp or Twitter.

## 🛠️ Tech Stack

This project was built using modern web development tools:

- **React** - The core UI library.
- **Vite** - For local development and optimized production builds.
- **Tailwind CSS** - For rapid, custom, and highly responsive styling.
- **Shadcn UI** - For beautiful, accessible, and highly customizable UI components.
- **React Router DOM** - For seamless single-page application navigation.

## 🚀 Getting Started

If you want to run this project locally on your machine, it's super easy!

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

1. **Clone the repository** (or download the zip):

   ```bash
   git clone <repo-url>
   cd ndrive-frontend
   ```

2. **Install the dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
4. **Open it in your browser**:
   Vite will give you a local URL (usually `http://localhost:5173`). Open that in your browser to see the app running!

## 📂 Project Structure

Here is a quick overview of how the code is organized:

- `/src/components` - Reusable UI elements (Navbar, Footer, Car Cards, Layout containers).
- `/src/pages` - The main views of the application (Home, Cars List, Car Details).
- `/src/data` - Contains `cars.json`, our mock database that powers the application.
- `/src/api` - The simulated API logic that fetches our car data.
- `/public` - Static assets like the main `og-image.png`.
- `index.html` - The main HTML entry point containing our global SEO/Open Graph tags.

---

_Built during my frontend internship._
