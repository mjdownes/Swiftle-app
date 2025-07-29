import { useNavigate } from 'react-router-dom';
import { themes } from '../assets/styles/themes.js';
import Button from '../components/Button.tsx';
import { useTheme } from '../contexts/ThemeContext.tsx';
import Layout from '../layouts/MobileLayout.tsx'
import { ChartColumnBig, ChevronLeft, UserRound } from 'lucide-react';
import { use, useState } from 'react';
import ColourSchemeSelector from '../components/ColourSchemeSelector.tsx';
import FormEntry from '../components/FormEntry.tsx';
import OTPPopUp from '../components/OTPPopUp.tsx';

function ForgotPassword() {

    const { theme } = useTheme();
    const currentTheme = themes[theme];
    const [open, setOpen] = useState(false)
    const [email, setEmail] = useState("")
    const nav = useNavigate()


    return (
        <Layout allowBack={true} className="p-5">

            <div className='flex flex-col items-center justify-center w-full gap-y-5 mb-10 '>
                <h1 className='font-pistilli text-5xl mb-20' style={{ color: currentTheme.secondary }}> SWIFTLE </h1>
                <h1 className="text-2xl font-[quicksand] text-center font-extrabold" style={{ color: currentTheme.secondary }}> Forgot Password? </h1>
                <p className="text-xl font-[quicksand] text-center font-regular" style={{ color: currentTheme.secondary }}> Enter your email and we will send you a OTP code to reset your password. </p>
            </div>


            <div className=" flex flex-col items-center justify-center mt-8 space-y-8">
                <div className='w-[90%] mx-auto px-4'>
                    <form className="space-y-4 mb-20">
                        <FormEntry type='email' label="Email:" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </form>
                </div>

                <Button onClick={() => setOpen(true)} className="flex items-center justify-center text-2xl w-[60%]" style={undefined} > Send me a code </Button>

                {open && (
                    <OTPPopUp onClose={() => setOpen(!open)} onSuccess={() => { nav('/home') }} email={email} />
                )}

            </div>
        </Layout >
    )
}

export default ForgotPassword
