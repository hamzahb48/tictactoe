var playerOne = true;
var gameIsDone = false;

function Verify(square){
    if(!square.hasAttribute('disabled')){
        if(playerOne){
            square.textContent = "X";
            playerOne = false;
            square.classList.add('X');

            highlightThePlayer('O');
        }
        else{
            square.textContent = "O";
            playerOne = true;
            square.classList.add('O');

            highlightThePlayer();
        }

        square.setAttribute('disabled', true);
        checkIfTheGameIsDone();
    }
}

function highlightThePlayer(player = 'X'){
    if(player=='X'){
        document.getElementById('secondplayer').style.opacity = "0.5";
        document.getElementById('secondplayer').style.color = "whitesmoke";

        document.getElementById('firstplayer').style.opacity = "0.8";
        document.getElementById('firstplayer').style.color = "white";
    }
    else if(player == 'O'){
        document.getElementById('firstplayer').style.opacity = "0.5";
        document.getElementById('firstplayer').style.color = "whitesmoke";
        
        document.getElementById('secondplayer').style.opacity = "0.8";
        document.getElementById('secondplayer').style.color = "white";
    }
}

function resetTheStyle(){
    document.getElementById('secondplayer').style.opacity = "0.5";
    document.getElementById('secondplayer').style.color = "whitesmoke";  
    document.getElementById('secondplayer').style.background = "none";
      
    document.getElementById('firstplayer').style.opacity = "0.5";
    document.getElementById('firstplayer').style.color = "whitesmoke";
    document.getElementById('firstplayer').style.background = "none";

    document.getElementById('tiesection').style.opacity = "0.5";
    document.getElementById('tiesection').style.color = "whitesmoke";
    document.getElementById('tiesection').style.background = "none";
}

function checkIfTheGameIsDone(){
    var boxes = document.querySelectorAll('.square');
    var Xs = [];
    var Os = [];
    
    boxes.forEach( function(box, index) {
        if(box.hasAttribute('disabled')){
            if(box.classList.contains('X')){
                Xs.push(index);
            }
            else if(box.classList.contains('O')){
                Os.push(index);
            }
        }
    });

    if(Xs.length>=3){
        if(Xs.includes(0)){
            if((Xs.includes(1) && Xs.includes(2)) || (Xs.includes(3) && Xs.includes(6)) || (Xs.includes(4) && Xs.includes(8))){
                Score('X')
            }
        }
        
        if(Xs.includes(1)){
            if(Xs.includes(4) && Xs.includes(7)){
                Score('X')
            }
        }
        
        if(Xs.includes(2)){
            if((Xs.includes(5) && Xs.includes(8)) || (Xs.includes(4) && Xs.includes(6))){
                Score('X')
            }
        }
        
        if(Xs.includes(3)){
            if(Xs.includes(5) && Xs.includes(4)){
                Score('X')
            }
        }
        
        if(Xs.includes(6)){
            if(Xs.includes(7) && Xs.includes(8)){
                Score('X')
            }
        }
    }
    
    if(Os.length>=3){
        if(Os.includes(0)){
            if((Os.includes(1) && Os.includes(2)) || (Os.includes(3) && Os.includes(6)) || (Os.includes(4) && Os.includes(8))){
                Score('O')
            }
        }
        
        if(Os.includes(1)){
            if(Os.includes(4) && Os.includes(7)){
                Score('O')
            }
        }
        
        if(Os.includes(2)){
            if((Os.includes(5) && Os.includes(8)) || (Os.includes(4) && Os.includes(6))){
                Score('O')
            }
        }
        
        if(Os.includes(3)){
            if(Os.includes(5) && Os.includes(4)){
                Score('O')
            }
        }
        
        if(Os.includes(6)){
            if(Os.includes(7) && Os.includes(8)){
                Score('O')
            }
        }
    }

    if(Xs.length + Os.length == 9){
        if(!gameIsDone){
            Score('tie');
        }
    }
}

function Score(winner){

    gameIsDone = true;

    resetTheStyle();

    var boxes = document.querySelectorAll('.square');
    boxes.forEach( box => {
        box.setAttribute('disabled', true);
    });
    
    var playerX = parseInt(document.getElementById('playerX').textContent);
    var playerO = parseInt(document.getElementById('playerO').textContent);
    var tie = parseInt(document.getElementById('tie').textContent);

    if(winner == 'X'){
        playerX++;
        document.getElementById('playerX').textContent = playerX;
        document.getElementById('firstplayer').style.opacity = "1";
        document.getElementById('firstplayer').style.background = "rgb(79, 225, 186)";
    }
    else if(winner == 'O'){
        playerO++;
        document.getElementById('playerO').textContent = playerO;
        document.getElementById('secondplayer').style.opacity = "1";
        document.getElementById('secondplayer').style.background = "rgb(79, 225, 186)";
    }
    else if(winner == 'tie'){
        tie++;
        document.getElementById('tie').textContent = tie;
        document.getElementById('tiesection').style.opacity = "1";
        document.getElementById('tiesecion').style.background = "rgb(79, 225, 186)";
    }
}

function Reset() {
    if(gameIsDone){
        playerOne = true;

        var boxes = document.querySelectorAll('.square');

        boxes.forEach( box => {
            box.textContent = null;
            box.removeAttribute('disabled');

            if(box.classList.contains('X')){
                box.classList.remove('X');
            }
            else if(box.classList.contains('O')){
                box.classList.remove('O');
            }
        });

        resetTheStyle();
        highlightThePlayer();
        gameIsDone = false;
    }
}