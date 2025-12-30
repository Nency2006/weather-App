# 🌦️ React Weather App

A simple weather application built using React that allows users to search weather details by city name using the WeatherAPI.

## 📌 Overview

This project demonstrates:
- API integration in React
- Controlled inputs
- Event-based data fetching
- Conditional rendering
- Clean state management

Weather data is fetched only when the user clicks the search icon.

## ✨ Features

- Search weather by city name
- Displays real-time:
  - Temperature (°C)
  - Humidity (%)
  - Wind Speed (km/h)
  - Weather condition icon
- Input validation (alert on empty search)
- No unnecessary API calls
- Responsive UI

## 🧠 Core Logic

- `useState` is used to manage:
  - City input
  - Weather data
- API call is triggered only on user action
- Conditional rendering prevents runtime errors
- `useEffect` is intentionally not used for searching to avoid infinite calls

---

<img width="1898" height="907" alt="image" src="https://github.com/user-attachments/assets/d62c997e-9ae4-4a4d-99ab-f7a699269f05" />
