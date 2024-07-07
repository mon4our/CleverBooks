import logo from "./assets/cleverbooks-high-resolution-logo-transparent (1).png"
import pic from "./assets/Untitled design (1).png"
import book from "./assets/book-svgrepo-com.svg"
import money from "./assets/money-bag-svgrepo-com.svg"
import shelf from "./assets/shelf-svgrepo-com.svg"
import infinity from "./assets/infinity-svgrepo-com.svg"
import './App.css'
import { Hero } from './Components/Hero'
import { CardComp } from './Components/Card'
import { Metrics } from './Components/Metrics'
import { Footer } from './Components/Footer'
import { CTA } from './Components/CTA'
import { Reviews } from './Components/Reviews'
import { ProblemTarget } from './Components/ProblemTarget'

function Home() {

    return (
      <>
        <div class="flex flex-col bg-[#111827] items-center">
          <img src={logo} class="h-20 w-200 py-2" />
          <div class="flex py-10" >
            <Hero title1={"Save money and space spent on books."} title2={"Make your books smarter."} desc={"Read books without owning them. Make the ones you own work for you."} />
            <img src={pic} class="h-500px max-w-500px hidden lg:block" />
          </div>
          <div class="py-2 my-10">
            <h2 className="text-3xl text-[#cffafe] font-extrabold sm:text-5xl">
              Four key questions answered by CleverBooks
            </h2>
          </div>
          <div class="flex  flex-col justify-center gap-5 my-10 lg:flex-row">
            <CardComp logo={book} title={"How to save money on books"} desc={"Pay a small fee to read for a time period of your choice."} />
            <CardComp logo={money} title={"What to do with old books"} desc={"Rent out or sell the books you have finished reading to earn money."} />
            <CardComp logo={shelf} title={"Where to store books"} desc={"Send the book back to us when you finish reading and save space."} />
            <CardComp logo={infinity} title={"Where to find more books"} desc={"Any book you want, at your doorstep and at a fraction of the price"} />
          </div>
          <div class="py-10 my-10">
            <Metrics />
          </div>
          <div class="py-10 flex flex-col items-center my-10">
          <h1 className="text-3xl text-[#cffafe] font-extrabold sm:text-5xl my-2">
              Reviews
            </h1>
            <Reviews />
          </div>
          <div class="py-10 flex flex-col items-center my-10">
            <h1 className="text-3xl text-[#cffafe] font-extrabold text-wrap sm:text-3xl my-10">
              What makes us different?
            </h1>
            <ProblemTarget />
          </div>
          <div class="py-10 my-10">
            <CTA />
          </div>
          <div class="my-10">
            <Footer />
          </div>
        </div>
      </>
    )
  }
  
  export default Home
  