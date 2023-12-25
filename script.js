var playerOne = true;
var gameIsDone = false;

function Verify(square){
    if(!square.hasAttribute('disabled')){
        if(playerOne){
            square.textContent = "X";
            playerOne = false;
            square.classList.add('X');
        }
        else{
            square.textContent = "O";
            playerOne = true;
            square.classList.add('O');
        }

        square.setAttribute('disabled', true);
        checkIfTheGameIsDone();
    }
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
        Score('tie')
    }

}

function Score(winner){
    gameIsDone = true;

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
    }
    else if(winner == 'O'){
        playerO++;
        document.getElementById('playerO').textContent = playerO;
    }
    else if(winner == 'tie'){
        tie++;
        document.getElementById('tie').textContent = tie;
    }
}

function Reset() {
    playerOne = true;

    if(gameIsDone){
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

        gameIsDone = false;
    }
}