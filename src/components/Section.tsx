import { lazy } from 'react';
const MyLottieAnimation = lazy(() => import('../components/MyLottieAnimation '));

function Section() {

  return (
    <div>
      <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <div className='flex flex-col'>
          <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-2xl lg:leading-[1.1]">QR Code Generator (VCard File)</h1>

          <MyLottieAnimation />
        </div>
      </section>
    </div>
  )
}

export default Section