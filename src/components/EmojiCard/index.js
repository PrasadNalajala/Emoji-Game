// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiItem, onSubmitEmoji} = props
  const submitEmoji = () => {
    onSubmitEmoji(emojiItem.id)
  }
  return (
    <li className="emojiItem">
      <button onClick={submitEmoji} type="button" className="emojiBtn">
        <img
          src={emojiItem.emojiUrl}
          alt={emojiItem.emojiName}
          className="emojiImg"
        />
      </button>
    </li>
  )
}

export default EmojiCard
