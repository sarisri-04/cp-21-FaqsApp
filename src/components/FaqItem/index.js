// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  onToggleAnswer = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  render() {
    const {faqDetails} = this.props
    const {questionText, answerText} = faqDetails
    const {isActive} = this.state

    const iconUrl = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const iconAlt = isActive ? 'minus' : 'plus'

    return (
      <li className="faq-item">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <button
            type="button"
            className="icon-button"
            onClick={this.onToggleAnswer}
          >
            <img src={iconUrl} alt={iconAlt} className="icon" />
          </button>
        </div>
        {isActive && <p className="answer">{answerText}</p>}
      </li>
    )
  }
}

export default FaqItem
