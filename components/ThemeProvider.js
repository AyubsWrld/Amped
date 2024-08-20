// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

// Define the themes
const themes = {
  light: {
    backgroundColor: '#ffffff',
    color: '#000000',
  },
  dark: {
    backgroundColor: '#000000',
    color: '#ffffff',
  },
};

// Create the context
const ThemeContext = createContext();

// Create a provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light'); // Default to 'light'

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeStyles: themes[theme] }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use the theme context
export function useTheme() {
  return useContext(ThemeContext);
}
