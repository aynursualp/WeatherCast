# WeatherCast 🌤️

WeatherCast is a modern, responsive weather forecasting web application that provides real-time weather data for any city worldwide. This project was developed to demonstrate core front-end engineering skills, including asynchronous programming and persistent data storage.

## 🚀 Features
- **Real-time Data:** Fetches live weather information using the `wttr.in` JSON API.
- **Persistent History:** Saves the last 5 searched cities using `LocalStorage` for quick access.
- **Asynchronous Operations:** Implements `Async/Await` and `Fetch API` for a smooth user experience.
- **Robust Error Handling:** Features `try...catch` blocks to manage network errors and invalid city inputs.
- **Modern UI:** A clean, minimalist design with dynamic "Loading" states and empty state management.

## 🛠️ Tech Stack
- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **API:** [wttr.in](https://wttr.in/)
- **Storage:** Browser LocalStorage

## 🧩 Key Engineering Concepts Applied
- **DOM Manipulation:** Efficiently updating the UI with cached DOM elements.
- **Asynchronous JS:** Handling API promises without blocking the main thread.
- **UX Design:** Managing initial states (Welcome Screen) and visual feedback during data fetching.

