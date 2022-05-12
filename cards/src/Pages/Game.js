// import Button from 'react-bootstrap/Button';
import Cards from '../component/Cards/Cards.js';

const Game= ()=>{
    return(
        <section class="game-begins">
             <div class="game-bg">
                {/* <img class="game-bg" src={require("../assets/img/card-game-img.jpg")} alt="green-background" /> */}
                <Cards/>
            </div> 
        </section>
        
       
        
            
    )
}

export default Game;