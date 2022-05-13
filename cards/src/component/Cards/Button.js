import React from 'react';

class LoggingButton extends React.Component {
    handleClick = () => {
      console.log('this is:', this);
    }
  
    render() {
      return (
        <div class="start-game">
        <button class="start-game" onClick={this.handleClick}>
          Start Game
        </button>
        </div>
      );
    }
}
  export default LoggingButton;