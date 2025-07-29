import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../contexts/ThemeContext";
import { themes } from "../assets/styles/themes";

type SelectorProps = {
    options: string[],
    def: string,
    className?: string,
    onChange?: (value: any) => void
}

// Deals with the user choosing between different options
const Selector = ({ options, def, className, onChange }: SelectorProps) => {

    const [selected, setSelected] = useState(def) // for styling based on what the user is selected
    const { theme } = useTheme()
    const currentTheme = themes[theme]

    // Deals with what happens when the user clicks a different option 
    const handleChange = (range: any) => {
        console.log(range);

        setSelected(range);
        if (onChange) onChange(range);
    };

    return (

        <div className={twMerge("", className)}>
            <div className=" grid grid-cols-1 my-5 ">
                <div className="flex justify-between items-center h-16 ">
                    <div className="flex-1">
                        <div className="flex-1 flex justify-center">
                            <div className="rounded-2xl w-full max-w-md flex justify-between border" style={{ backgroundColor: currentTheme.primary, color: currentTheme.secondary, borderColor: currentTheme.secondary }}>
                                {/* Map all of the options passed in - in separate buttons */}
                                {options.map((range: string) => (
                                    <button key={range} onClick={() => { handleChange(range) }}
                                        className={twMerge('flex-1 py-2 px-2 my-2 mx-1 rounded-xl shadow-md border font-[quicksand]', selected === range ? "inset-shadow-sm/50" : "")} style={{ backgroundColor: selected === range ? currentTheme.background : currentTheme.primary, color: currentTheme.secondary, borderColor: currentTheme.secondary }}>
                                        {range.charAt(0).toUpperCase() + range.slice(1)} {/* Ensure the first letter is capital and the rest is lowercase */}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div >
    );
}
export default Selector;