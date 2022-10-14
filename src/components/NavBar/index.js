// Write your code here.\

import './index.css'

const NavBar = props => {
  const {score, totalScore, hideScore, isGameOver} = props
  return (
    <div className="navBarBg">
      <div className="navItems">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="navImg"
        />

        <h1>Emoji Game</h1>
      </div>
      {!isGameOver ? (
        <div className="navItems">
          <p className="scorepara">Score:{score} </p>
          <p className="topscore">Top Score:{totalScore}</p>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
export default NavBar
