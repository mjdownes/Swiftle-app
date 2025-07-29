import React from "react";
import ReactDOM from "react-dom"
import { useTheme } from "../contexts/ThemeContext.tsx";
import { themes } from "../assets/styles/themes";
import type { Theme } from "../contexts/ThemeContext.tsx";
import { X } from "lucide-react";

interface ColourSchemeSelectorProps {
    onClose: () => void;
}

const Themes: { id: number; theme: Theme; themeName: string; style: React.CSSProperties }[] = [
    {
        id: 1, theme: "Debut", themeName: "Debut", style: { backgroundColor: themes.Debut.background }
    }, {
        id: 2, theme: "Fearless", themeName: "Fearless", style: { backgroundColor: themes.Fearless.background }
    }, {
        id: 3, theme: "SpeakNow", themeName: "Speak Now", style: { backgroundColor: themes.SpeakNow.background }
    }, {
        id: 4, theme: "Red", themeName: "Red", style: { backgroundColor: themes.Red.background }
    }, {
        id: 5, theme: "Nineteen", themeName: "1989", style: { backgroundColor: themes.Nineteen.background }
    }, {
        id: 6, theme: "Reputation", themeName: "Reputation", style: { backgroundColor: themes.Reputation.background }
    }, {
        id: 7, theme: "Lover", themeName: "Lover", style: { backgroundColor: themes.Lover.background }
    }, {
        id: 8, theme: "Folklore", themeName: "Folklore", style: { backgroundColor: themes.Folklore.background }
    }, {
        id: 9, theme: "Evermore", themeName: "Evermore", style: { backgroundColor: themes.Evermore.background }
    }, {
        id: 10, theme: "Midnights", themeName: "Midnights", style: { backgroundColor: themes.Midnights.background }
    }, {
        id: 11, theme: "TTPD", themeName: "TTPD", style: { backgroundColor: themes.TTPD.background }
    },

]

// This pop up forms the add additional symptom pop up and is used when the user wants to add a symptom
const ColourSchemeSelector = ({ onClose }: ColourSchemeSelectorProps) => {

    // deals with the colour scheme based on user settings
    const { theme, setTheme } = useTheme()
    const currentTheme = themes[theme]

    return ReactDOM.createPortal(

        // Main div for the pop up which makes the rest of the screen darker to make the pop up stand out. 
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" style={{ pointerEvents: "auto" }}>

            <div className="grid grid-cols-4 gap-4 rounded-2xl p-10 border-4" style={{ background: currentTheme.background, borderColor: currentTheme.secondary }}>

                <X size={24} className="" onClick={onClose} style={{ color: currentTheme.secondary }} />

                <h1 className="font-[quicksand] col-span-4 text-center text-2xl font-bold" style={{ color: currentTheme.secondary }}>
                    Select Your Colour Scheme: </h1>

                {Themes.map(({ id, theme, themeName, style }) => (
                    <button
                        key={id}
                        onClick={() => setTheme(theme)}
                        className={`flex items-center gap-3 p-2 rounded-md outline ${theme === currentTheme.name ? "outline-4" : ""}`}
                        style={{ background: currentTheme.background, color: currentTheme.secondary, borderColor: currentTheme.secondary }}>
                        <div
                            className="w-12 h-12 rounded-full border border-gray-300"
                            style={style}
                        />
                        <span className={`text-lg font-medium`}>{themeName}</span>
                    </button>
                ))}
            </div>

        </div >,
        document.body
    );
}
export default ColourSchemeSelector;