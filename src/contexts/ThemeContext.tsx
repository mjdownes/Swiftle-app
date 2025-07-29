import React, { createContext, useContext, useEffect, useState } from 'react';

// HANDLES THE COLOUR SCHEME FOR THE WHOLE APP 


type Theme = 'Debut' | 'Fearless' | 'SpeakNow' | 'Red' | 'Nineteen' | 'Reputation' | 'Lover' | 'Folklore' | 'Evermore' | 'Midnights' | 'TTPD';  // Specifies the options

// Defines the type for the context 
interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

// Creates the context using the type 
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Creates a provider - this wraps the main entry point for the app so that all the children of the app can access the state and the setState
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setThemeState] = useState<Theme>('SpeakNow'); // Default should be colourful - default is always the LD accessible option

    // Set Theme when there is a new state 
    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme); // set the state
        localStorage.setItem('theme', newTheme); // add it to locla storage 
    };

    // on first render get the current settings from local storage and set the theme state
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'Debut' || storedTheme === 'Fearless' || storedTheme === 'SpeakNow' || storedTheme === 'Red' || storedTheme === 'Nineteen' || storedTheme === 'Reputation' || storedTheme === 'Lover' || storedTheme === 'Folklore' || storedTheme === 'Evermore' || storedTheme === 'Midnights' || storedTheme === 'TTPD') {
            setThemeState(storedTheme);
        }
    }, []);

    //Provide the context to all children of the app
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// To allow components and pages to access the theme
export const useTheme = () => {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
    return ctx;
};
