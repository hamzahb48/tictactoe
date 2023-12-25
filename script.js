var playerOne = true;

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
                alert("Hello1")
            }
        }
        
        if(Xs.includes(1)){
            if(Xs.includes(4) && Xs.includes(7)){
                alert("Hello2")
            }
        }
        
        if(Xs.includes(2)){
            if((Xs.includes(5) && Xs.includes(8)) || (Xs.includes(4) && Xs.includes(6))){
                alert("Hello2")
            }
        }
        
        if(Xs.includes(3)){
            if(Xs.includes(5) && Xs.includes(4)){
                alert("Hello3")
            }
        }
        
        if(Xs.includes(6)){
            if(Xs.includes(7) && Xs.includes(8)){
                alert("Hello4")
            }
        }
    }
    
    if(Os.length>=3){
        if(Os.includes(0)){
            if((Os.includes(1) && Os.includes(2)) || (Os.includes(3) && Os.includes(6)) || (Os.includes(4) && Os.includes(8))){
                alert("Hello1")
            }
        }
        
        if(Os.includes(1)){
            if(Os.includes(4) && Os.includes(7)){
                alert("Hello2")
            }
        }
        
        if(Os.includes(2)){
            if((Os.includes(5) && Os.includes(8)) || (Os.includes(4) && Os.includes(6))){
                alert("Hello2")
            }
        }
        
        if(Os.includes(3)){
            if(Os.includes(5) && Os.includes(4)){
                alert("Hello3")
            }
        }
        
        if(Os.includes(6)){
            if(Os.includes(7) && Os.includes(8)){
                alert("Hello4")
            }
        }
    }
    

}