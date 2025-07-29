import { useNavigate } from 'react-router-dom';
import { themes } from '../assets/styles/themes.js';
import Button from '../components/Button.tsx';
import { useTheme } from '../contexts/ThemeContext.tsx';
import Layout from '../layouts/MobileLayout.tsx'
import { ChartColumnBig, UserRound } from 'lucide-react';


function Home() {
    const navigate = useNavigate();
    const { theme } = useTheme();
    const currentTheme = themes[theme];

    return (
        <Layout allowBack={false} className="p-10">

            <div className='flex flex-col gap-y-10'>
                <div className="flex flex-row gap-x-3 justify-end px-15">
                    <ChartColumnBig size={30} className='text-center mb-5' style={{ color: currentTheme.secondary }} />
                    <UserRound size={30} className='text-center mb-5' style={{ color: currentTheme.secondary }} onClick={() => navigate("/profile")} />
                </div>

                <div className='flex flex-col items-center justify-center w-full '>
                    <h1 className='font-pistilli text-5xl' style={{ color: currentTheme.secondary }}> SWIFTLE </h1>
                </div>
            </div>


            <div className='flex flex-col flex-1 items-center justify-center gap-y-6'>

                <Button onClick={undefined} className="flex items-center justify-center text-2xl w-[80%]" style={{ backgroundColor: currentTheme.primary, color: currentTheme.secondary, borderColor: currentTheme.secondary }}>
                    Play Todays Game
                </Button>
                <Button onClick={undefined} className="flex items-center justify-center text-2xl w-[80%]" style={{ backgroundColor: currentTheme.primary, color: currentTheme.secondary, borderColor: currentTheme.secondary }}>
                    Play Archived Games
                </Button>
            </div>
        </Layout>
    )
}

export default Home
