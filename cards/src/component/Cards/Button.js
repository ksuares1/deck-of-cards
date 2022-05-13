import React from 'react';

class LoggingButton extends React.Component {
    // This syntax ensures `this` is bound within handleClick.
    // Warning: this is *experimental* syntax.
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