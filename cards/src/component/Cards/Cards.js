 import LoggingButton from "./Button.js";


let Cards =() =>{
    return(
        <main>
        <div class="welcome">
        <h1> Welcome to Festival Cards</h1>
        </div>
        <br/>
        <>
        <LoggingButton/>
        </>
        <br/>
        <div class="ND">
        {/* ND- Cards */}
        <div class="suit-clubs">
            <img class="suit-clubs-cards 2" src={require("../../assets/img/suit-of-clubs/Club-Suit-2.jpg")} alt="suit-of clubs" /> 
        </div>
        <div class="suit-clubs">
            <img class="suit-clubs-cards 3" src={require("../../assets/img/suit-of-clubs/Club-Suit-3.jpg")} alt="suit-of clubs" /> 
        </div>
        <div class="suit-clubs">
            <img class="suit-clubs-cards 4" src={require("../../assets/img/suit-of-clubs/Club-Suit-4.jpg")} alt="suit-of clubs" /> 
        </div>

        <div class="suit-clubs">
            <img class="suit-clubs-cards 5" src={require("../../assets/img/suit-of-clubs/Club-Suit-5.jpg")} alt="suit-of clubs" /> 
        </div>
        <div class="suit-clubs">
            <img class="suit-clubs-cards 6" src={require("../../assets/img/suit-of-clubs/Club-Suit-6.jpg")} alt="suit-of clubs" /> 
        </div>

        <div class="suit-clubs">
            <img class="suit-clubs-cards 7" src={require("../../assets/img/suit-of-clubs/Club-Suit-7.jpg")} alt="suit-of clubs" /> 
        </div>
        <div class="suit-clubs">
            <img class="suit-clubs-cards 8" src={require("../../assets/img/suit-of-clubs/Club-Suit-8.jpg")} alt="suit-of clubs" /> 
        </div>
        <div class="suit-clubs">
            <img class="suit-clubs-cards 9" src={require("../../assets/img/suit-of-clubs/Club-Suit-9.jpg")} alt="suit-of clubs" /> 
        </div>
        <div class="suit-clubs">
            <img class="suit-clubs-cards 10" src={require("../../assets/img/suit-of-clubs/Club-Suit-10.jpg")} alt="suit-of clubs" /> 
        </div>

        <div class="suit-clubs">
            <img class="suit-clubs-cards A" src={require("../../assets/img/suit-of-clubs/Club-Suit-A.jpg")} alt="suit-of clubs" /> 
        </div>
        <div class="suit-clubs">
            <img class="suit-clubs-cards J" src={require("../../assets/img/suit-of-clubs/Club-Suit-J.jpg")} alt="suit-of clubs" /> 
        </div>
        <div class="suit-clubs">
            <img class="suit-clubs-cards K" src={require("../../assets/img/suit-of-clubs/Club-Suit-King.jpg")} alt="suit-of clubs" /> 
        </div>
        <div class="suit-clubs">
            <img class="suit-clubs-cards Q" src={require("../../assets/img/suit-of-clubs/Club-Suit-Queen.jpg")} alt="suit-of clubs" /> 
        </div>
        </div>
        </main>
        
    
    )
}

export default Cards;