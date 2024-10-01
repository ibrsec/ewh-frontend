
const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center md:items-start  md:justify-between gap-1 py-1 px-2 poppins-font ">
        <div className="  pt-20 flex-1">
            <h1 className="text-3xl md:text-6xl font-bold text-center md:text-left ">WONDERFULL STORIES</h1>
            <p className="text-sm md:text-md text-gray-500 font-semibold mt-5 text-center md:text-left">Listen to the little stories to improve your Russian and immerse yourself in the nuances of the language, enhancing your comprehension and fluency over time.</p>

        </div>
        <div className="flex-1">
            <img src="/images/hero.png" alt="hero" className=" max-h-[300px] md:max-h-[500px]" />
        </div>



    </div>
  )
}

export default Hero