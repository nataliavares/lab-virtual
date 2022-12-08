//Funções do Lab 0 - Jogo da Memória

(function() {
    var matches = 0;

    var images = [];

    var flippedCards = [];

    var gameOver = document.querySelector("#gameOver");

    var imgMatch = document.querySelector("#imgMatch");

    for(var i = 0; i< 16; i++){
        var img = {
            src: "../static/img/"+ i +".jpg",
            id: i%8
        };
        images.push(img);
    }

    startGame();

    function startGame() {
        matches = 0;
        
        flippedCards = []
        images = randomSort(images);
        
        var frontFaces = document.getElementsByClassName("front");
        var backFaces = document.getElementsByClassName("back");
        
        for(var i = 0; i < 16; i++) {
            frontFaces[i].classList.remove("match","flipped");
            backFaces[i].classList.remove("flipped","match");

            var card = document.querySelector("#card" + i);
            card.style.left = i % 8 === 0 ? 5 + "px" : i % 8 * 130 + 5 + "px";
            card.style.top = i < 8 ? 5 + "px" : 230 + "px";

            card.addEventListener("click",flipCard,false);

            frontFaces[i].style.background = "url('"+ images[i].src +"')";
            frontFaces[i].setAttribute("id",images[i].id);
        }

        gameOver.style.zIndex = "-2";  
        gameOver.removeEventListener("click",function(){
            startGame();
        },false);
    }

    function randomSort(oldArray) {
        var newArray = [];

        while(newArray.length !== oldArray.length){
            var i = Math.floor(Math.random()*oldArray.length);

            if (newArray.indexOf(oldArray[i]) < 0){
                newArray.push(oldArray[i]);
            }
        }

        return newArray;
    }

    function flipCard(){
        if(flippedCards.length < 2) {
            var faces = this.getElementsByClassName("face");

            if(faces[0].classList[2]) {
                return;
            }
 
            faces[0].classList.toggle("flipped");
            faces[1].classList.toggle("flipped");

            flippedCards.push(this);

            if(flippedCards.length === 2) {
                if(flippedCards[0].childNodes[3].id === flippedCards[1].childNodes[3].id) {
                    flippedCards[0].childNodes[1].classList.toggle("match");
                    flippedCards[0].childNodes[3].classList.toggle("match");
                    flippedCards[1].childNodes[1].classList.toggle("match");
                    flippedCards[1].childNodes[3].classList.toggle("match");

                    matchCardSign();

                    flippedCards = [];

                    matches++;

                    if(matches >= 8) {
                        gameOver();
                    }
                }
            }
        } else {
            flippedCards[0].childNodes[1].classList.toggle("flipped");
            flippedCards[0].childNodes[3].classList.toggle("flipped");
            flippedCards[1].childNodes[1].classList.toggle("flipped");
            flippedCards[1].childNodes[3].classList.toggle("flipped");

            flippedCards = [];
        }
    }

    function gameOver(){
        gameOver.style.zIndex = "99";
        gameOver.addEventListener("click",function(){
            startGame();
        },false);
    }

    function matchCardSign(){
        imgMatch.style.zIndex = "1";
        imgMatch.style.top = "150px";
        imgMatch.style.opacity = "0";
        setTimeout(function(){
            imgMatch.style.zIndex = "-1";
            imgMatch.style.top = "250px";
            imgMatch.style.opacity = "1";
        },1500);
    }
}());
