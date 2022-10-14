// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {onPlayAgain, isWon, score} = props
  const heading = isWon ? 'Won' : 'Lose'
  const imagelink = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const playAgain = () => {
    onPlayAgain()
  }
  return (
    <div className="gameResultsContainer">
      <div className="detailsContainer">
        <h1 className="heading">You {heading}</h1>
        <p>Best Score</p>
        <h1 className="score">{score}/12</h1>
        <button type="button" className="btn" onClick={playAgain}>
          Play Again
        </button>
      </div>
      <div className="imgContainer">
        <img src={imagelink} className="resultImage" alt="win or lose" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
