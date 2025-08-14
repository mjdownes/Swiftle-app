import { useNavigate } from 'react-router-dom';
import { themes } from '../assets/styles/themes.js';
import { useTheme } from '../contexts/ThemeContext.tsx';
import Layout from '../layouts/MobileLayout.tsx'
import SongSearch from '../components/SongSearch.tsx';
import Guess from '../components/Guess.tsx';

function GameBoard() {

    const { theme } = useTheme();
    const currentTheme = themes[theme];

    return (
        <Layout allowBack={true} className="p-5">

            <div className='flex flex-col items-center justify-center w-full gap-y-5 mb-5 '>
                <h1 className='font-pistilli text-3xl md:text-5xl mb-5' style={{ color: currentTheme.secondary }}> SWIFTLE </h1>
            </div>

            <SongSearch onClick={undefined} className={undefined} />


            <div className='flex flex-col items-center justify-center w-full mt-10'>
                <Guess />
            </div>

        </Layout >
    )
}

export default GameBoard
