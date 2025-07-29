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
            <div className="rounded-lg border shadow-lg w-11/12 p-5 space-y-6 flex flex-col items-center" style={{ backgroundColor: currentTheme.background, borderColor: currentTheme.secondary }}>
                <div className="w-full">
                    <X className="float-left w-[10%]" onClick={onClose} />
                    <h1 className="flex-1 text-2xl text-center font-extrabold" style={{ color: currentTheme.secondary }}> OTP Code: </h1>
                </div>

                <form className="space-y-6 flex flex-row space-x-1">
                    <FormEntry type='string' value={otp} onChange={(e) => setOtp(e.target.value)} />
                </form>

                <Button onClick={() => { }} className={""} style={{ background: currentTheme.background, color: currentTheme.secondary }} > Confirm </Button>

            </div>
        </div>
        , document.body
    );

}

export default OTPPopUp