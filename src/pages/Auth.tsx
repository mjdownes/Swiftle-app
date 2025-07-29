import { useState } from "react"
import Layout from "../layouts/MobileLayout"
import Selector from "../components/Selector"
import FormEntry from "../components/FormEntry"
import Button from "../components/Button"
import { useNavigate } from "react-router-dom"
import OTPPopUp from "../components/OTPPopUp"
import { useTheme } from "../contexts/ThemeContext"
import { themes } from "../assets/styles/themes"

function Auth() {

    const [selected, setSelected] = useState('Register')


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [open, setOpen] = useState(false)
    const nav = useNavigate()

    const { theme } = useTheme()
    const currentTheme = themes[theme]
    return (
        <>
            <Layout allowBack={false} className="p-10">
                <div>
                    <h1 className="text-5xl mb-10 mt-10 text-center font-extrabold font-pistilli  " style={{ color: currentTheme.secondary }}> WELCOME  </h1>
                </div>

                <Selector options={["Register", "Login"]} def={"Register"} onChange={(newSelected) => { setSelected(newSelected) }} className="w-[90%] mx-auto" />

                <div className="flex flex-col items-center justify-center mt-8 space-y-8">

                    <div className='w-[90%] mx-auto px-4'>
                        <form className="space-y-4">
                            {selected === "Register" && (
                                <>
                                    <FormEntry type='text' label="Name:" value={name} onChange={(e) => setName(e.target.value)} />
                                    <FormEntry type='email' label="Email:" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <FormEntry type='password' label="Password:" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </>
                            )}
                            {selected === "Login" && (
                                <>
                                    <FormEntry type='email' label="Email:" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <FormEntry type='password' label="Password:" value={password} onChange={(e) => setPassword(e.target.value)} />

                                    <div className="flex items-center justify-center">
                                        <Button className="text-center underline bg-transparent text-md shadow-none border-none" onClick={() => { }} style={{ color: currentTheme.secondary }}> Forgot Password? </Button>
                                    </div>
                                </>
                            )}
                        </form>
                    </div>

                    <Button onClick={() => setOpen(true)} className="flex items-center justify-center text-2xl w-[60%]" style={undefined} > {selected} </Button>

                    {open && (
                        < OTPPopUp onClose={() => setOpen(!open)} email={email} onSuccess={() => nav('/home')} />
                    )}

                </div>
            </Layout >

        </>
    )
}

export default Auth
