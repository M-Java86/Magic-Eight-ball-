import React, { Component } from "react";
import "../App.css";

class Ball extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posibbleAnswers: [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again",
        "Do not count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful.",
      ],
      selectedAnswers: null
    }
  }

  handleClick = () => {
    this.setState({
      selectedAnswers: this.state.possibleAnswers[
        Math.floor(Math.random() * this.state.possibleAnswers.length)
      ]
    });

    console.log(this.state.selectedAnswers);
  };

  render() {
    return (
      <div className='App'>
        <div className='shadow'></div>

        <div className='epos' onClick={this.handleClick}>
          <div className='eball'>
            <div className='egrad'></div>
            <div className='ewin'>
              <div>
                <div className='triangle'></div>
                <div className='textbox'> </div>
                {this.state.selectedAnswers}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ball;
