import { themes } from '../assets/styles/themes.js';
import { useTheme } from '../contexts/ThemeContext.tsx';
import Layout from '../layouts/MobileLayout.tsx'
import SongSearch from '../components/SongSearch.tsx';
import Guess from '../components/Guess.tsx';

function GameBoard() {

    const { theme } = useTheme();
    const currentTheme = themes[theme];

    return (
        <Layout allowBack={true} allowTitle={true} className="p-10">

            <div className="mt-5 space-y-10">
                <SongSearch />

                <div className='flex flex-col items-center justify-center w-full'>
                    <Guess />
                </div>

            </div>
        </Layout >
    )
}

export default GameBoard
