import React from 'react';
//  import {Link} from 'react-router-dom';
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
        {/* <Button class="play-button" variant="info" size="lg"><Link to="/game">
       Play
       </Link> */}
        </div>
      );
    }
}
  export default LoggingButton;