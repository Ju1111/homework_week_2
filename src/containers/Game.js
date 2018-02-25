import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Game extends PureComponent {
  static propTypes = {
    guesses: PropTypes.arrayOf(
      PropTypes.string).isRequired
  }
  render() {
    console.log(this.props.guesses);
    return (
      <div className="Game">
        <h3>Your guesses: {this.props.guesses}</h3>
      </div>
    )
  }
}

const mapStateToProps = ({guesses}) => ({guesses})

export default connect(mapStateToProps)(Game)
