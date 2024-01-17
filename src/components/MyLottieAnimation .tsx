import Lottie from 'react-lottie-player'
import * as animationData from '../assets/new-year.json'
function MyLottieAnimation() {
  return (
    <Lottie
      loop
      animationData={animationData}
      play
    
    />
  )
}

export default MyLottieAnimation 