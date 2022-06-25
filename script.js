    var randomVariable1 = Math.floor(Math.random()*6)+1;
    document.querySelector(".img1").setAttribute("src",'images/dice'+randomVariable1+'.png'); 

   var randomVariable2 = Math.floor(Math.random()*6)+1;
    document.querySelector(".img2").setAttribute("src",'images/dice'+randomVariable2+'.png');

    if (randomVariable1 > randomVariable2) {
    document.querySelector("h1").textContent = "🚩Player 1 Wins!";
    }
    if(randomVariable1 < randomVariable2){
        document.querySelector("h1").textContent = "Player 2 Wins!🚩";
    }
    if(randomVariable1 == randomVariable2){
        document.querySelector("h1").textContent = "🚩Draw!🚩";
    }
