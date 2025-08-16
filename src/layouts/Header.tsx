import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router-dom";
import { ChartColumnBig, ChevronLeft, UserRound } from "lucide-react"
import { useTheme } from "../contexts/ThemeContext";
import { themes } from "../assets/styles/themes";

const Header = ({ className, style, allowBack, allowTitle, isHome }) => {

    const navigate = useNavigate()
    const { theme } = useTheme();
    const currentTheme = themes[theme];

    return (

        <div className={twMerge("flex flex-row justify-between items-center", className)} style={style}>
            {/* Left slot: Back button */}
            <div className="flex items-top justify-start w-24 h-full ml-4">
                {allowBack ? (
                    <div className="flex items-center" onClick={() => navigate(-1)}>
                        <ChevronLeft size={30} style={{ color: currentTheme.secondary }} />
                        <p className="text-lg font-[quicksand] font-bold" style={{ color: currentTheme.secondary }}>Back</p>
                    </div>
                ) : null}
            </div>

            {/* Center slot: Title */}
            <div className="flex items-top justify-center flex-1">
                {allowTitle ? (
                    <h1 className='font-pistilli text-3xl md:text-5xl' style={{ color: currentTheme.secondary }} onClick={() => navigate('/home')}>SWIFTLE</h1>
                ) : null}
            </div>

            {/* Right slot: Icons */}
            <div className="flex items-top justify-end w-24 space-x-4 h-full mr-4">
                {isHome && (
                    <>
                        <ChartColumnBig size={30} style={{ color: currentTheme.secondary }} />
                        <UserRound size={30} style={{ color: currentTheme.secondary }} onClick={() => navigate("/profile")} />
                    </>
                )}
            </div>
        </div>


    );
}

export default Header;