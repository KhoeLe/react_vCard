import { lazy } from 'react';
const MyLottieAnimation = lazy(() => import('../components/MyLottieAnimation '));

function Section() {

  return (
    <div>
      <section className="mx-auto flex flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <div className='flex flex-col'>
          <h1 className="text-center text-teal-200xl font-bold leading-tight tracking-tighter md:text-xl ">QR Code Generator (VCard File)</h1>

          <div className='max-w-[140px] md:max-w-[380px] '>
          <MyLottieAnimation />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Section