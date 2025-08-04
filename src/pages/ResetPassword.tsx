import { useNavigate } from 'react-router-dom';
import { themes } from '../assets/styles/themes.js';
import Button from '../components/Button.tsx';
import { useTheme } from '../contexts/ThemeContext.tsx';
import Layout from '../layouts/MobileLayout.tsx'
import { useState } from 'react';
import FormEntry from '../components/FormEntry.tsx';

function ResetPassword() {

    const { theme } = useTheme();
    const currentTheme = themes[theme];
    const [email, setEmail] = useState("")
    const [otp, setOTP] = useState("")
    const [password, setPassword] = useState("")

    const nav = useNavigate()


    return (
        <Layout allowBack={true} className="p-5">

            <div className='flex flex-col items-center justify-center w-full gap-y-5 mb-5 '>
                <h1 className='font-pistilli text-5xl mb-5' style={{ color: currentTheme.secondary }}> SWIFTLE </h1>
                <h1 className="text-2xl font-[quicksand] text-center font-extrabold" style={{ color: currentTheme.secondary }}> Reset Password? </h1>
            </div>


            <div className=" flex flex-col items-center justify-center mt-8 space-y-4">
                <div className='w-[90%] mx-auto px-4'>
                    <form className="space-y-4 mb-10">
                        <FormEntry type='email' label="Email:" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <FormEntry type='text' label="OTP Code:" value={otp} onChange={(e) => setOTP(e.target.value)} />
                        <FormEntry type='password' label="New Password:" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </form>
                </div>

                <Button onClick={() => nav('/')} className="flex items-center justify-center text-2xl w-[60%]" style={undefined} > Reset </Button>
            </div>
        </Layout >
    )
}

export default ResetPassword
