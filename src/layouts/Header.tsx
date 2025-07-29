import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react"
import { useTheme } from "../contexts/ThemeContext";
import { themes } from "../assets/styles/themes";

const Header = ({ className, style }) => {

    const navigate = useNavigate()
    const { theme } = useTheme();
    const currentTheme = themes[theme];

    return (

        <div className={twMerge(className)} style={style} onClick={() => navigate(-1)}>
            {/* Create the back button in the top left corner which navigates back a page when clicked */}
            <div className="flex float-left" onClick={() => navigate(-1)}>
                <ChevronLeft className=" w-[50%] h-auto ml-5" style={{ color: currentTheme.secondary }} />
                <p className="text-md font-[quicksand] font-bold" style={{ color: currentTheme.secondary }}> Back </p>
            </div>

        </div >


    );
}

export default Header;