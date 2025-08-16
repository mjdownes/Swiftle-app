import { useNavigate } from 'react-router-dom';
import { themes } from '../assets/styles/themes.js';
import Button from '../components/Button.tsx';
import { useTheme } from '../contexts/ThemeContext.tsx';
import Layout from '../layouts/MobileLayout.tsx'
import { ChartColumnBig, ChevronLeft, UserRound } from 'lucide-react';
import { use, useState } from 'react';
import ColourSchemeSelector from '../components/ColourSchemeSelector.tsx';

function Profile() {

    const { theme } = useTheme();
    const currentTheme = themes[theme];
    const [showPopup, setShowPopup] = useState(false);
    const nav = useNavigate();

    return (
        <Layout allowBack={true} allowTitle={true} className="p-10">

            <div className='flex flex-col flex-1 items-center justify-center gap-y-6 w-full'>
                <div className='gap-y-3'>
                    <h1 className='font-[quicksand] font-bold text-2xl text-center'> Name: </h1>
                    <h2 className='font-[quicksand] text-xl text-center'> Molly Downes</h2>
                </div>

                <div className='gap-y-3'>
                    <h1 className='font-[quicksand] font-bold text-2xl text-center'> Email Address: </h1>
                    <h2 className='font-[quicksand] text-xl text-center'> user@example.com</h2>
                </div>
            </div>


            <div className='flex flex-col flex-1 items-center justify-center gap-y-6'>
                <Button onClick={() => nav('/changePassword')} className="flex items-center justify-center text-2xl w-[80%]" style={{ backgroundColor: currentTheme.primary, color: currentTheme.secondary, borderColor: currentTheme.secondary }}>
                    Change Password
                </Button>
                <Button onClick={() => setShowPopup(true)} className="flex items-center justify-center text-2xl w-[80%]" style={{ backgroundColor: currentTheme.primary, color: currentTheme.secondary }}>
                    Choose your Colour Scheme
                </Button>
                <Button onClick={() => nav('/')} className="flex items-center justify-center text-2xl w-[40%]" style={{ backgroundColor: currentTheme.primary, color: currentTheme.secondary }}>
                    Log Out
                </Button>
            </div>


            {showPopup && (<ColourSchemeSelector onClose={() => { setShowPopup(false) }} />)}
        </Layout>
    )
}

export default Profile
