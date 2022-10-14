import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  state = {score: 0, totalScore: 0, submittedEmojis: [], isGameOver: false}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onPlayAgain = () => {
    this.setState({score: 0, isGameOver: false})
  }

  onSubmitEmoji = id => {
    const {submittedEmojis, score, totalScore} = this.state

    const emojiAlreadyContain = submittedEmojis.some(
      eachItem => eachItem === id,
    )

    console.log(emojiAlreadyContain, submittedEmojis)
    if (!emojiAlreadyContain) {
      this.setState(prev => ({
        submittedEmojis: [...prev.submittedEmojis, id],
        score: prev.score + 1,
      }))
    } else {
      this.setState({isGameOver: true, submittedEmojis: []})
      if (score > totalScore) {
        this.setState({totalScore: score})
      }
    }
  }

  render() {
    const shuffledEmojis = this.shuffledEmojisList()
    const {submittedEmojis, score, isGameOver, totalScore} = this.state

    const isWon = score === 12

    const hideScore = isGameOver ? 'hide' : ''
    // console.log(submittedEmojis)
    return (
      <div className="bg">
        <NavBar
          score={score}
          totalScore={totalScore}
          hideScore={hideScore}
          isGameOver={isGameOver}
        />
        <div className="bg1">
          <div className="cardsContainer">
            {isGameOver ? (
              <WinOrLoseCard
                onPlayAgain={this.onPlayAgain}
                isWon={isWon}
                score={score}
              />
            ) : (
              <ul className="emojiContainer">
                {shuffledEmojis.map(each => (
                  <EmojiCard
                    emojiItem={each}
                    key={each.id}
                    onSubmitEmoji={this.onSubmitEmoji}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default EmojiGame
