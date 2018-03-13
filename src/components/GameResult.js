import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './GameResult.css'

export class Result extends PureComponent {
  static PropTypes = {
    wrongGuessCount: PropTypes.number.isRequired,
    rightGuessCount: PropTypes.number.isRequired,
    word: PropTypes.string.isRequired
  }

  render() {
    const { wrongGuessCount, rightGuessCount, word } = this.props
    if (rightGuessCount === word.length)
        return (
          <div className="Won">
            <div className="message">
              <p>YOU WON :)</p>
            </div>
          </div>
        )
    else if (wrongGuessCount >= 6)
      return (
        <div className="Lost">
          <div className="message">
            <p>GAME OVER</p>
          </div>
        </div>
      )
    return null
 }
}

const mapStateToProps = ({ Word: { wrongGuessCount }, Word:{ rightGuessCount }, Word:{ word } }) => ({ wrongGuessCount, rightGuessCount, word })

export default connect(mapStateToProps)(Result)