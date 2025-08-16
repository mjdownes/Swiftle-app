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
        <Layout allowBack={true} allowTitle={true} isHome={true} className="p-10">

            <div className='flex flex-col flex-1 items-center justify-center gap-y-6'>

                <Button onClick={() => navigate('/gameBoard')} className="flex items-center justify-center text-2xl w-[80%]" style={{ backgroundColor: currentTheme.primary, color: currentTheme.secondary, borderColor: currentTheme.secondary }}>
                    Play Todays Game
                </Button>
                <Button onClick={() => navigate('/archiveCalendar')} className="flex items-center justify-center text-2xl w-[80%]" style={{ backgroundColor: currentTheme.primary, color: currentTheme.secondary, borderColor: currentTheme.secondary }}>
                    Play Archived Games
                </Button>
            </div>
        </Layout >
    )
}

export default Home
