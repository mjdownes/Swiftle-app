import React, { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { twMerge } from "tailwind-merge"
import { useTheme } from "../contexts/ThemeContext"
import { themes } from "../assets/styles/themes"

export type CalendarProps = {
    className?: string, // styles the div of the calendar
    classNames?: {
        today?: string, // needed to style the today date
        selected?: string // needed to style the selected date
        today_selected?: string // Optional, used for today and selected date
    }
    onSelect?: (date: Date | undefined) => void, // callback when a date is selected
    selected?: Date, // the currently selected date
    getDayClassName?: (date: Date) => string // function to get the class name for background colour for a specific day
    styles?: string
}

function Calendar({ className, onSelect, selected, classNames, getDayClassName, styles }: CalendarProps) {

    const today = new Date()
    const [currentMonth, setCurrentMonth] = useState(today.getMonth())
    const [currentYear, setCurrentYear] = useState(today.getFullYear())
    const [selectedDate, setSelected] = useState<Date | undefined>(selected)

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decemeber"]
    const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"]

    const { theme } = useTheme();
    const currentTheme = themes[theme];


    const DaysInMonth = (month: number, year: number) => {
        return new Date(year, month + 1, 0).getDate()
    }

    const FirstDayOfMonth = (month: number, year: number) => {
        const day = new Date(year, month, 1).getDay()
        return day === 0 ? 6 : day - 1
    }

    const PrevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11)
            setCurrentYear(currentYear - 1)
        } else {
            setCurrentMonth(currentMonth - 1)
        }
    }

    const NextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0)
            setCurrentYear(currentYear + 1)
        } else {
            setCurrentMonth(currentMonth + 1)
        }
    }

    const renderCalendarDays = () => {
        const daysInMonth = DaysInMonth(currentMonth, currentYear);
        const firstDay = FirstDayOfMonth(currentMonth, currentYear);
        const days: React.ReactNode[] = []


        // empty cells for the days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="h-10 flex items-center justify-center"></div>)
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(currentYear, currentMonth, day)

            const isToday = day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()
            const isSelected = day === selectedDate?.getDate() && currentMonth === selectedDate?.getMonth() && currentYear === selectedDate?.getFullYear()
            const isFuture = date > today; // 🚨 disable future dates

            const dayClassName = twMerge(
                getDayClassName?.(date),
                "flex items-center justify-center rounded-full text-sm md:text-2xl",
                isToday ? classNames?.today : "",
                isSelected ? classNames?.selected : "text-black",
                isToday && isSelected ? classNames?.today_selected : "",
                isFuture ? "text-black/40" : ""
            )

            days.push(
                <div key={day} onClick={() => {
                    if (!isFuture) {
                        const selectedDate = new Date(currentYear, currentMonth, day)
                        setSelected(selectedDate)
                        onSelect?.(selectedDate)
                    }
                }} className={dayClassName}>
                    {day}
                </div>
            )

        }

        return days

    }

    return (
        <div className={twMerge(" mx-auto rounded-3xl border-[0.65vw] md:border-[0.15vw] border-primary p-6 font-[quicksand] px-10", className)} style={{ background: currentTheme.primary }} >

            <div className="flex justify-between items-center mb-6 ">
                <button onClick={PrevMonth} className="w-6 md:w-12 rounded-full">
                    <ChevronLeft className="w-full h-full" />
                </button>

                <h2 className="sm:text-lg md:text-3xl font-pistilli font-bold text-center"> {months[currentMonth]} {currentYear} </h2>

                <button onClick={NextMonth} className="w-6 md:w-12 rounded-full">
                    <ChevronRight className="w-full h-full" />
                </button>
            </div>

            <div className="grid grid-cols-7 gap-y-5 gap-x-1 sm:gap-x-2">
                {daysOfWeek.map((day, index) => (
                    <div key={`${day}-${index}`} className="flex items-center justify-center font-extrabold text-sm md:text-2xl ">
                        {day}
                    </div>
                ))}

                {renderCalendarDays()}

            </div>

        </div >
    )
}
Calendar.displayName = "Calendar"

export { Calendar }

