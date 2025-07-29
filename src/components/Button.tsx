import { twMerge } from "tailwind-merge";

const Button = ({ children, onClick, className, style }) => {

    return (

        <div onClick={onClick} style={{ ...style }} className={twMerge('rounded-3xl border-[0.5vw] md:border-[0.25vw] shadow-md/50 p-3 font-[quicksand]', className)} >
            {children}
        </div >
    );
}
export default Button;