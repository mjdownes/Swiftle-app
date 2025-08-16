import { useNavigate } from 'react-router-dom';
import { themes } from '../assets/styles/themes.js';
import { useTheme } from '../contexts/ThemeContext.tsx';
import Layout from '../layouts/MobileLayout.tsx'
import { Calendar } from '../components/Calendar.tsx';
import Button from '../components/Button.tsx';
import { useEffect, useState } from 'react';
import { Backpack } from 'lucide-react';


function ArchiveCalendar() {
    const navigate = useNavigate();
    const { theme } = useTheme();
    const currentTheme = themes[theme];

    const [date, setDate] = useState<Date>()

    useEffect(() => {
        console.log(date)
    }, [date])

    return (
        <Layout allowBack={true} allowTitle={true} className="p-10">

            <div className="flex flex-col items-center justify-center">

                <Calendar className="w-[95%] h-[90%] rounded-xl px-4 text-xl border-none mb-5 mt-5 "
                    classNames={{
                        today: "underline",
                        selected: "rounded-full outline-2 outline-black "
                    }}
                    selected={date}
                    onSelect={(newDate) => setDate(newDate)} />

                <Button onClick={() => navigate('/gameBoard')} className="w-[80%] text-center text-lg md:text-2xl" style={{ background: currentTheme.primary }} >
                    <div className=""> {date
                        ? <>
                            Play{" "}
                            <span className="font-bold underline">
                                {date.toLocaleDateString("en-US", { month: "long", day: "numeric" })}
                            </span>
                            's Game
                        </>
                        : "Pick a date first"
                    }
                    </div>
                </Button>

            </div>
        </Layout >
    )
}

export default ArchiveCalendar
