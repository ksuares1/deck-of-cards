import Button from 'react-bootstrap/Button';


const WelcomeComponent = ()=>{
    return(
        <main>
          <header>
            <h1> Welcome to Card Festival</h1>
          </header>
  <div className="mb-2">
    <Button variant="primary" size="lg">
      Large button
    </Button>{' '}
    <Button variant="secondary" size="lg">
      Large button
    </Button>
  </div>
        </main>
    )
}


export default WelcomeComponent;