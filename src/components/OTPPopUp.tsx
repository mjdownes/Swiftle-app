import ReactDOM from "react-dom"
import FormEntry from "./FormEntry";
import Button from "./Button";
import { X } from 'lucide-react';
import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { themes } from "../assets/styles/themes";

const OTPPopUp = ({ onClose, onSuccess, email }: { onClose: () => void, onSuccess: () => void, email?: string }) => {

    const [otp, setOtp] = useState("")

    const { theme } = useTheme()
    const currentTheme = themes[theme]


    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" >
            <div className="relative rounded-lg border shadow-lg w-11/12 p-5 space-y-6" style={{ backgroundColor: currentTheme.background, borderColor: currentTheme.secondary }}>

                <button className="absolute top-4 left-4" onClick={onClose}>
                    <X size={24} />
                </button>
                <h1 className='font-[quicksand] text-center font-extrabold text-2xl' style={{ color: currentTheme.secondary }}> OTP Code: </h1>


                <form className="w-full flex justify-center ">
                    <div className="w-[70%]">
                        <FormEntry type='string' value={otp} onChange={(e) => setOtp(e.target.value)} />

                    </div>
                </form>

                <div className="flex  justify-center w-full">
                    <Button onClick={() => onSuccess()} className={"w-[30%] text-2xl text-center"} style={{ background: currentTheme.background, color: currentTheme.secondary }} > Confirm </Button>

                </div>

            </div>
        </div>
        , document.body
    );

}

export default OTPPopUp