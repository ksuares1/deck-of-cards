import LoggingButton from "./Button.js";


let Cards =() =>{
    return(
        <div class="deck-game">
        <div>
        <img class="nd" src={require("../../assets/img/deck-pile.jpg")} alt="52-deck-of-cards"/>
        <>
        <LoggingButton/>
        </>
    </div>
    </div>
    )
}

export default Cards;