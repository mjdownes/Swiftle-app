import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { Search } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { themes } from "../assets/styles/themes";

type SongSearchProps = {
    className?: string,
    onClick?: (value: any) => void
}

const SongSearch = ({ className, onClick }: SongSearchProps) => {

    const [song, setSong] = useState("");
    const { theme } = useTheme()
    const currentTheme = themes[theme]

    return (

        <div onClick={onClick} style={{ backgroundColor: currentTheme.primary, color: currentTheme.secondary }} className={twMerge(' font-[quicksand] mx-10 rounded-full flex items-center border border-black px-4 py-2 shadow-sm', className)} >
            <input type={"text"} placeholder="Search for a song..." value={song} onChange={(e) => setSong(e.target.value)} className="flex-grow " />
            <button className="border-[0.5]"> <Search /> </button>
        </div >
    )
}
export default SongSearch;