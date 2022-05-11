import Button from 'react-bootstrap/Button';
 import {Link} from 'react-router-dom';

const Home = ()=>{
    return(
        <div class="homepage">
          <div>
            <h1 id="welcome"> Welcome to Card Festival</h1>
        <br/>
      <div className="mb-2">
      
      <Button variant="secondary" size="lg">
      Quit
      </Button>
      <br/>
    <div class="home-card">
   <img class="bg" src={require("../assets/img/array-of-cards.jpg")} alt="assortment-of-cards"/>
    <Button class="play-button" variant="info" size="lg"><Link to="/game">
       Play
       </Link>
      </Button>
    </div>
   </div>
      </div>
        </div>
    )
}


export default Home;