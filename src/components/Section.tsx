// import { lazy } from 'react';
// const MyLottieAnimation = lazy(() => import('../components/MyLottieAnimation '));

import { cn } from "lib/utils"
import { Boxes } from "./background-boxes"

function Section() {

  return (
    <div>
      <section className="mx-auto max-w-3xl md:max-w-6xl">
        {/* <div className='flex flex-col'>
          <h1 className="text-center text-teal-200xl font-bold leading-tight tracking-tighter md:text-xl ">QR Code Generator (VCard File)</h1>

          <div className='max-w-[140px] md:max-w-[380px] '>
            <MyLottieAnimation />


          </div>


        </div> */}

    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            <Boxes />
            <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
            QR Code Generator (VCard File)
            </h1>
            <p className="text-center mt-2 text-neutral-300 relative z-20">
              This is a QR Code Generator that takes in a VCard file and generates a QR Code for it.
            </p>
          </div>
      </section>

     
    </div>
  )
}

export default Section