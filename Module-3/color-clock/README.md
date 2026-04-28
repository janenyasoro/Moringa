# 🎨 Color Clock

A dynamic, real-time digital clock application built with React and Vite. It displays the current date and time in a colorful, visually appealing format and was created as part of a lab to master React fundamentals, component state, and external package integration.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)

🎯 Overview

The **Color Clock** is a widget designed for a productivity dashboard. It displays the current date and time, updating every second. The project demonstrates core React concepts like component-based architecture, state management with `useState`, side-effect handling with `useEffect`, and integration of an external npm package (`date-fns`) for elegant date and time formatting.
 ✨ Features

- **Real-time Clock** – Displays live time, updating every second.
- **Multiple Format Display** – Shows time in `hh:mm:ss a` format and date in `EEEE, MMMM do, yyyy` format.
- **Dynamic Greeting** – Changes the greeting message based on the time of day.
- **Colorful, Responsive UI** – Features a gradient background, glassmorphism card effect, custom fonts, and is fully responsive for mobile and desktop screens.
- **Visually Appealing** – Includes subtle hover animations and a glowing text effect on the time display.
 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **React 18** | Front-end UI library for building the component. |
| **Vite** | Next-generation build tool and development server. |
| **date-fns** | Modern JavaScript date utility library for formatting. |
| **CSS3** | Custom styling including gradients, animations, and responsive design. |
| **Google Fonts** | Used 'Orbitron' for the digital time and 'Poppins' for supporting text. |


📁 Project Structure
color-clock/
├── public/
├── src/
│ ├── assets/
│ ├── App.jsx # Main clock component with logic and JSX
│ ├── App.css # All custom styling for the clock
│ ├── main.jsx # Application entry point
│ └── index.css # Global styles (Tailwind base if used)
├── index.html
├── package.json
├── vite.config.js
└── README.md
