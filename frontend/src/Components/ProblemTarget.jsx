import screen from "../assets/screen.jpg"
import screen2 from "../assets/Book-Recommendation-Engine.jpg"
import screen3 from "../assets/money.jpg"
import screen4 from "../assets/collection.jpg"
import { useState } from "react"
export const ProblemTarget = () => {
    const [show,setShow]=useState(screen);
    return <div>
        <div class=" flex flex-col items-center md:flex-row">
            <nav class="w-56 flex-none">
                <div class="text-surface text-white px-2">
                    <button
                        type="button"
                        class="block w-full rounded-lg p-4 text-center md:text-start transition duration-500 bg-[#06b6d4] text-[#cffafe] my-2"
                        onClick={()=>setShow(screen)}>
                        User Friendly Interface
                    </button>
                    <button
                        type="button"
                        class="block w-full rounded-lg p-4 text-center md:text-start transition duration-500 bg-[#06b6d4] text-[#cffafe] my-2"
                        onClick={()=>setShow(screen2)}>
                        Smart Recommendation System
                    </button>
                    <button
                        type="button"
                        class="block w-full rounded-lg p-4 text-center md:text-start transition duration-500 bg-[#06b6d4] text-[#cffafe] my-2"
                        onClick={()=>setShow(screen3)}>
                        High Interest On Lent Books
                    </button>
                    <button
                        type="button"
                        class="block w-full rounded-lg p-4 text-center md:text-start transition duration-500 bg-[#06b6d4] text-[#cffafe] my-2"
                        onClick={()=>setShow(screen4)}>
                        Vast Collection Of Books
                    </button>
                </div>
            </nav>

            <main class="flex-1 min-w-0 overflow sm:px-2 sm:mx-10">
                <img src={show} class="rounded-xl max-w-350px lg:max-w-xl lg:max-h-350px"/>
            </main>
        </div>
    </div>
}