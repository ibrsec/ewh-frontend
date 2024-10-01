
const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-start  justify-between gap-1 py-1 px-2 poppins-font ">
        <div className="  pt-20 flex-1">
            <h1 className="text-6xl font-bold">WONDERFULL STORIES</h1>
            <p className="text-gray-500 font-semibold mt-5">Listen to the little stories to improve your Russian and immerse yourself in the nuances of the language, enhancing your comprehension and fluency over time.</p>

        </div>
        <div className="flex-1">
            <img src="/images/hero.png" alt="hero" className=" max-h-[500px]" />
        </div>



    </div>
  )
}

export default Hero