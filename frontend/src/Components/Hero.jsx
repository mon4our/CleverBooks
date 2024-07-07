import { useNavigate } from "react-router-dom"

export const Hero = ({ title1, title2, desc }) => {
    const navigate=useNavigate()
    return <div>
        <section className="bg-[#111827]">
            
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
                <div className="mx-auto max-w-xl text-center">
                    <h1 className="text-3xl text-[#cffafe] font-extrabold sm:text-5xl">
                        {title1}
                        <strong className="font-extrabold text-[#06b6d4] sm:block">{title2}</strong>
                    </h1>

                    <p className="mt-4 text-[#cffafe] sm:text-xl/relaxed">
                        {desc}
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            className="block w-full rounded bg-[#06b6d4] px-12 py-3 text-sm font-medium text-[#cffafe] shadow hover:bg-#083344 focus:outline-none focus:ring active:bg-[#0e7490] sm:w-auto"
                            href="#"
                            onClick={()=>{navigate("/signup")}}
                        >
                            Get Started
                        </a>

                    </div>
                </div>
            </div>
        </section>
    </div>
}
