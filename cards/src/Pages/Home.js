import Button from 'react-bootstrap/Button';


const Home = ()=>{
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
    <div class="home-card">
   <img class="bg" src={require("../assets/img/array-of-cards.jpg")} alt="assortment-of-cards"/>
  </div>
  </div>
        </div>
    )
}


export default Home;