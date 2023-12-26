import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {time: 25, isClicked: false}

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  onClickToggleImg = () => {
    const {isClicked} = this.state
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  tick = () => {
    this.setState(prevState => ({time: prevState.time}))
  }

  onClickResetImg = () => {
    const {time} = this.state
    this.setState({time: 25})
  }

  onClickPlusBtn = () => {
    const {time} = this.state
    this.setState(prevState => ({time: prevState.time + 1}))
  }

  onClickMinusBtn = () => {
    const {time} = this.state
    this.setState(prevState => ({time: prevState.time - 1}))
  }

  render() {
    const {isClicked} = this.state
    const {time} = this.state

    const statusImg = isClicked
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'

    const statusText = isClicked ? 'Running' : 'Paused'

    return (
      <div className="app-container">
        <h1 className="title">Digital Timer</h1>
        <div className="timer-container">
          <div className="timer">
            <h1 className="time">{time}:00</h1>
            <p className="status">{statusText}</p>
          </div>
          <div className="options">
            <button type="button" onClick={this.onClickToggleImg}>
              <img src={statusImg} id="logo" />
            </button>
            <p className="Statustext">{statusText}</p>
            <button type="button" onClick={this.onClickResetImg}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                alt="reset icon"
                className="img"
              />
            </button>
            <p className="text">Reset</p>
          </div>
          <div className="set-Timer">
            <p className="heading">Set Timer limit</p>
            <button type="button" onClick={this.onClickMinusBtn}>
              -
            </button>
            <p className="box">{time}</p>
            <button type="button" onClick={this.onClickPlusBtn}>
              +
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
