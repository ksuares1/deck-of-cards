import Button from 'react-bootstrap/Button';
 import {Link} from 'react-router-dom';

const Home = ()=>{
    return(
        <div class="homepage">
          <div>
            <h1 id="welcome"> Welcome to Card Festival</h1>
        
      <div className="mb-2">
      <Button class="play"  size="lg"><Link to="/game">
       Play
       </Link>
      </Button>
      
      <Button variant="secondary" size="lg">
      Quit
      </Button>
      <br/>
    <div class="home-card">
   <img class="bg" src={require("../assets/img/array-of-cards.jpg")} alt="assortment-of-cards"/>
    </div>
   </div>
      </div>
        </div>
    )
}


export default Home;