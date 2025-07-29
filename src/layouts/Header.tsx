import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react"

const Header = ({ className, style }) => {

    const navigate = useNavigate()

    return (

        <div className={twMerge(className)} style={style} onClick={() => navigate(-1)}>
            {/* Create the back button in the top left corner which navigates back a page when clicked */}
            <div className="flex float-left" onClick={() => navigate(-1)}>
                <ChevronLeft className=" w-[50%] h-auto ml-5 mr-2 text-blue-700" />
                <p className="text-sm font-light text-blue-700"> Back </p>
            </div>

        </div >


    );
}

export default Header;