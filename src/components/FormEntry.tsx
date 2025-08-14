import { themes } from "../assets/styles/themes"
import { useTheme } from "../contexts/ThemeContext"

type FormEntryProps = {
    type: string,
    label?: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string,
    className?: string
}

// Deals with the user choosing between different options
const FormEntry = ({ type, label, value, onChange, placeholder, className }: FormEntryProps) => {

    const { theme } = useTheme()
    const currentTheme = themes[theme]

    return (
        <div className={className} >
            <label className="block text-xl font-medium mb-1 font-[quicksand]" style={{ color: currentTheme.secondary }}>{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className="w-full rounded-2xl border px-3 py-2"
                style={{ backgroundColor: currentTheme.primary, color: currentTheme.secondary }}
                placeholder={placeholder}
            />
        </div>
    );
}
export default FormEntry;