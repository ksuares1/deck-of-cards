import Button from 'react-bootstrap/Button';


const WelcomeComponent = ()=>{
    return(
        <div class="homepage">
          <header>
            <h1> Welcome to Card Festival</h1>
          </header>
  <div className="mb-2">
    <Button variant="primary" size="lg">
      Play
    </Button>
    <Button variant="secondary" size="lg">
      Quit
    </Button>
  </div>
        </div>
    )
}


export default WelcomeComponent;