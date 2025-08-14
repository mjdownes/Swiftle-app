import { useTheme } from "../contexts/ThemeContext";
import { themes } from "../assets/styles/themes";

const Guess = () => {

    const data = ['Album', 'Track Length', 'Track Name', 'Eras SetList?', 'Single?']

    return (
        <div className="flex flex-col items-center justify-center w-full gap-y-5 mb-5">
            <h3 className="font-bold text-xl font-[quicksand]"> Song Title  </h3>

            <div className=" flex flex-col items-center gap-4 font-[quicksand] md:hidden">

                <div className="flex gap-4 items-center justify-center w-full ">
                    <div
                        key={0}
                        className="flex items-center justify-center text-center bg-white w-20 sm:w-28 md:w-36 lg:w-44 aspect-[6/5] rounded-2xl border-2 border-black "
                    >
                        <p> {data[0]}</p>
                    </div>
                    <div
                        key={1}
                        className="flex items-center justify-center text-center bg-white w-20 sm:w-28 md:w-36 lg:w-44 aspect-[6/5] rounded-2xl border-2 border-black"
                    >
                        <p> {data[1]}</p>
                    </div>
                    <div
                        key={2}
                        className="flex items-center justify-center text-center bg-white w-20 sm:w-28 md:w-36 lg:w-44 aspect-[6/5] rounded-2xl border-2 border-black"
                    >
                        <p> {data[2]}</p>
                    </div>
                </div >


                <div className="flex gap-4">

                    <div
                        key={3}
                        className="flex items-center justify-center text-center bg-white w-20 sm:w-28 md:w-36 lg:w-44 aspect-[6/5] rounded-2xl border-2 border-black"
                    >
                        <p> {data[3]}</p>
                    </div>
                    <div
                        key={4}
                        className="flex items-center justify-center text-center bg-white w-20 sm:w-28 md:w-36 lg:w-44 aspect-[6/5] rounded-2xl border-2 border-black"
                    >
                        <p> {data[4]}</p>
                    </div>

                </div >
            </div>

            <div className=" flex flex-col items-center gap-4 font-[quicksand]">

                <div className="hidden md:flex gap-4 items-center justify-center w-full ">
                    <div
                        key={0}
                        className="flex items-center justify-center text-center bg-white w-20 sm:w-28 md:w-36 lg:w-44 aspect-[6/5] rounded-2xl border-2 border-black "
                    >
                        <p> {data[0]}</p>
                    </div>
                    <div
                        key={1}
                        className="flex items-center justify-center text-center bg-white w-20 sm:w-28 md:w-36 lg:w-44 aspect-[6/5] rounded-2xl border-2 border-black"
                    >
                        <p> {data[1]}</p>
                    </div>
                    <div
                        key={2}
                        className="flex items-center justify-center text-center bg-white w-20 sm:w-28 md:w-36 lg:w-44 aspect-[6/5] rounded-2xl border-2 border-black"
                    >
                        <p> {data[2]}</p>
                    </div>

                    <div
                        key={3}
                        className="flex items-center justify-center text-center bg-white w-20 sm:w-28 md:w-36 lg:w-44 aspect-[6/5] rounded-2xl border-2 border-black"
                    >
                        <p> {data[3]}</p>
                    </div>
                    <div
                        key={4}
                        className="flex items-center justify-center text-center bg-white w-20 sm:w-28 md:w-36 lg:w-44 aspect-[6/5] rounded-2xl border-2 border-black"
                    >
                        <p> {data[4]}</p>
                    </div>

                </div >
            </div>
        </div >
    )
}
export default Guess;