import { useNavigate } from 'react-router-dom';
import { themes } from '../assets/styles/themes.js';
import Button from '../components/Button.tsx';
import { useTheme } from '../contexts/ThemeContext.tsx';
import Layout from '../layouts/MobileLayout.tsx'
import { ChartColumnBig, UserRound } from 'lucide-react';
import OTPPopUp from '../components/OTPPopUp.tsx';
import { useState } from 'react';
import FormEntry from '../components/FormEntry.tsx';


function ChangePassword() {
    const navigate = useNavigate();
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const { theme } = useTheme();
    const currentTheme = themes[theme];

    return (
        <Layout allowBack={true} className="p-5">

            <div className='flex flex-col items-center justify-center w-full gap-y-5 mb-10 '>
                <h1 className='font-[quicksand] text-5xl mb-20 font-bold' style={{ color: currentTheme.secondary }}> Change Password </h1>
            </div>


            <div className=" flex flex-col items-center justify-center mt-8 space-y-8">
                <div className='w-[90%] mx-auto px-4'>
                    <form className="space-y-4 mb-20">
                        <FormEntry type='password' label="Old Password:" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
                        <FormEntry type='password' label="New Password:" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />

                    </form>
                </div>

                <Button onClick={() => { }} className="flex items-center justify-center text-2xl w-[60%] font-[quicksand]" style={undefined} > Update Password </Button>


            </div>
        </Layout >
    )
}

export default ChangePassword
