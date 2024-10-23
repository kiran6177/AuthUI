import React from 'react'

function RightFace() {
  return (
    <div className="w-[100%] md:w-[50%] lg:w-[60%] h-[30vh] md:h-auto relative bg-[url('/public/assets/753dfa8dc0971ecaa14e494e3c0d9743.png')] flex flex-col gap-8 md:gap-28 items-center justify-center">
        <div className="z-10 w-[75%] md:w-[95%] lg:w-[65%] xl:w-[40%] mx-auto flex flex-col items-center" >
            <h2 className="text-[#36393F] text-2xl md:text-3xl font-bold">Welcome to Orgface</h2>
            <h6 className="text-center text-sm md:text-base opacity-65">Enjoy the new experience of chatting in organization</h6>
        </div>
        <div className="w-full h-full bg-white absolute opacity-80"></div>
        <div className='flex flex-row md:flex-col gap-3 sm:gap-10 md:gap-28'>
            <div className="flex gap-3 sm:gap-12 lg:gap-20 xl:gap-28">
                <div className="w-[3.5rem] sm:w-[5rem] md:w-[8rem] lg:w-[10rem] xl:w-[12rem]  h-[3.5rem] sm:h-[5rem] md:h-[8rem] lg:h-[10rem] xl:h-[12rem] rounded-full bg-[#B08C77] overflow-none relative">
                    <img src={"/assets/b561f2bdc4581a4a596c674882e1d03a.png"} alt="" className="z-10 object-cover w-[150%] h-[150%] absolute bottom-0 rounded-s-full rounded-e-full" />
                </div>
                <div className="w-[3.5rem] sm:w-[5rem] md:w-[8rem] lg:w-[10rem] xl:w-[12rem]  h-[3.5rem] sm:h-[5rem] md:h-[8rem] lg:h-[10rem] xl:h-[12rem] rounded-full bg-[#632407] overflow-none relative">
                    <img src={"/assets/99fb5aebc27f077da03d4bf5f960bcee.png"} alt="" className="z-10 object-cover w-[130%] h-[130%] absolute bottom-0 rounded-s-full aspect-square rounded-e-full " />
                </div>
            </div>
            <div className="flex gap-3 sm:gap-12 lg:gap-20 xl:gap-28">
                <div className="w-[3.5rem] sm:w-[5rem] md:w-[8rem] lg:w-[10rem] xl:w-[12rem]  h-[3.5rem] sm:h-[5rem] md:h-[8rem] lg:h-[10rem] xl:h-[12rem] rounded-full bg-[#632407] overflow-none relative">
                    <img src={"/assets/887342b8920da7a38ce82b82ad7d2403.png"} alt="" className="z-10 object-cover w-[150%] h-[150%] absolute bottom-0 rounded-s-full rounded-e-full" />
                </div>
                <div className="w-[3.5rem] sm:w-[5rem] md:w-[8rem] lg:w-[10rem] xl:w-[12rem]  h-[3.5rem] sm:h-[5rem] md:h-[8rem] lg:h-[10rem] xl:h-[12rem] rounded-full bg-[#B08C77] overflow-none relative">
                    <img src={"/assets/59d0e0f751547ea3b60d0d6150cdc8ae.png"} alt="" className="z-10 object-cover w-[150%] h-[150%] absolute bottom-0 rounded-s-full rounded-e-full" />
                </div>
            </div>
        </div>
      </div>
  )
}

export default RightFace
