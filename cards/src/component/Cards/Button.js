import React from 'react';

class LoggingButton extends React.Component {
    handleClick = () => {
      console.log('this is:', this);
    }
  
    render() {
      return (
        <button class="start-game" onClick={this.handleClick}>
          Start Game
        </button>
      );
    }
}
  export default LoggingButton;