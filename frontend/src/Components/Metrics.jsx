/* eslint-disable react/no-unknown-property */
import book from "../assets/book-svgrepo-com.svg"
import money from "../assets/money-bag-svgrepo-com.svg"
import infinity from "../assets/infinity-svgrepo-com.svg"
export const Metrics = () => {
    return <div>
        <div class="">

            <div class="col-span-3 md:col-span-2 flex flex-col items-center md:items-start gap-4 pt-16 px-2">

                <p class="flex justify-center w-full gap-2 pt-4 font-extrabold text-3xl text-[#cffafe] font-extrabold sm:text-5xl">
                    <span>Metrics</span>
                </p>


                <div class="grid grid-cols-2 gap-8 pb-8 pt-4 mx-auto">

                    <div title="All countributed components"
                        class="flex flex-col justify-center items-center gap-2 border-2 border-dashed border-gray-500/50 p-4 rounded-md h-32 text-[#cffafe]">
                        <div class="flex gap-2 items-center">
                            <span class="font-bold text-3xl md:text-4xl">
                                40
                            </span>
                            <img class="w-8 h-8" src={book} />
                        </div>
                        <span class="font-semibold text-lg text-center">Books read by an average user</span>
                    </div>

                    <div title="Users got help"
                        class="flex flex-col justify-center items-center gap-2 border-2 border-dashed border-gray-500/50 p-4 rounded-md h-32 text-[#cffafe]">
                        <div class="flex gap-2 items-center">
                            <span class="font-bold text-3xl md:text-4xl">
                                80 lac
                            </span>
                            <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z">
                                </path>
                            </svg>
                        </div>
                        <span class="font-semibold text-lg text-center">Active users</span>
                    </div>

                    <div title="Total favorites received on components"
                        class="flex flex-col justify-center items-center gap-2 border-2 border-dashed border-gray-500/50 p-4 rounded-md h-32 text-[#cffafe]">
                        <div class="flex gap-2 items-center">
                            <span class="font-bold text-3xl md:text-4xl">
                                50 cr+
                            </span>
                            <img class="w-8 h-8" src={money} />
                        </div>
                        <span class="font-semibold text-lg text-center">Total money paid out in Interest</span>
                    </div>

                    <div title="component views"
                        class="md:col-start-2 lg:col-auto flex flex-col justify-center items-center gap-2 border-2 border-dashed border-gray-500/50 p-4 rounded-md h-32 text-[#cffafe]">
                        <div class="flex gap-2 items-center">
                            <span class="font-bold text-3xl md:text-4xl">
                                300 cr
                            </span>
                            <img class="w-8 h-8" src={infinity} />
                        </div>
                        <span class="font-semibold text-lg text-center">Available books (and growing)</span>
                    </div>

                </div>

            </div>

        </div>
    </div>
}