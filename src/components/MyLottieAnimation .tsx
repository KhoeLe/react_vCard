import Lottie from 'react-lottie-player'
import * as animationData from '../assets/new-year.json'
function MyLottieAnimation() {
  return (
    <Lottie
      loop
      animationData={animationData}
      play
      style={{ width: 600, height: 300 }}
    />
  )
}

export default MyLottieAnimation 