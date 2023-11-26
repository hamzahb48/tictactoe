var B = true;
var tr = document.getElementsByTagName("tr");
function F(div){

    if (B==true){
        div.value = "X"
        B=false
    }
    else{
        div.value = "O"
        B=true
    }

    Verif()

}









var Y = ""
function Verif(){

    var C = true

    
    for(i=0;i<tr.length;i++){

        var A = new Array(new Array());

        for(j=0;j<3;j++){
            A[0][j] = tr[i].children[j].firstElementChild.value
        }
        
        if(  ( A[0][0]==A[0][1] )    &&   ( A[0][1]==A[0][2] ) && ( A[0][0]=="X" || A[0][0]=="O" ) ){
            
            Y = A[0][0]

            C = false

            break
        }


    }

}






document.getElementById("p").style.marginTop = "15px"
            document.getElementById("p").innerHTML = "The "+Y+" guy Won"
            for(k=0;k<tr.length;k++){
                for(z=0;z<3;z++){
                    tr[k].children[z].firstElementChild.setAttribute("disabled","disabled")
                }
            }






function F2(){

    for(k=0;k<tr.length;k++){
        for(z=0;z<3;z++){
            tr[k].children[z].firstElementChild.removeAttribute("disabled")
        }
    }

    document.getElementById("p").innerHTML = null
    
    for(i=0;i<tr.length;i++){
        for(j=0;j<3;j++){
            tr[i].children[j].firstElementChild.value = null;
        }
    }

}