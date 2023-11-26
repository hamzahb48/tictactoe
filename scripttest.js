var B = true;

var C = true

var A = new Array();

for(k=0;k<3;k++){
    A[k]=[]
    for(z=0;z<3;z++){
        A[k][z]=""
    }
}

var tr = document.getElementsByTagName("tr");

for(k=0;k<3;k++){
    for(z=0;z<3;z++){
        tr[k].children[z].firstElementChild.setAttribute("value","")
    }
}

function F(div){

    if (B==true){
        div.value = "X"
        B=false
    }
    else{
        div.value = "O"
        B=true
    }

    div.setAttribute("disabled","disabled")

    Verif()

}

function Verif(){
    for(u=0;u<2;u++){
        for(i=0;i<tr.length;i++){
            
            for(j=0;j<3;j++){
                if(tr[i].children[j].firstElementChild.value=="X" || tr[i].children[j].firstElementChild.value=="O"){
                    A[i][j] = tr[i].children[j].firstElementChild.value
                }
                else{
                    A[i][j] = ""
                }
            }
            
            if(  ( A[i][0]==A[i][1] )    &&   ( A[i][1]==A[i][2] ) && ( A[i][0]=="X" || A[i][0]=="O" )){
                Y = A[i][0]
                C = false
                break
            }
    
            if(( A[0][i]==A[1][i] )    &&   ( A[1][i]==A[2][i] ) && ( A[0][i]=="X" || A[0][i]=="O" )){
                Y = A[0][i]
                C = false
                break
            }
    
            if(i==0){
                if(  ( A[0][i]==A[1][i+1] )    &&   ( A[1][i+1]==A[2][i+2] ) && ( A[0][i]=="X" || A[0][i+2]=="O" )  ){
                        Y = A[0][i]
                        C = false
                        break
                    }
            }
    
            if(i==2){
                if(  ( A[0][i]==A[1][i-1] )    &&   ( A[1][i-1]==A[2][i-2] ) && ( A[0][i]=="X" || A[0][i]=="O" )  ){
                        Y = A[0][i]
                        C = false
                        break
                    }
            }
        }
    }
    
    if(  C==false  ){
        document.getElementById("p").style.marginTop = "15px"
            
            for(k=0;k<tr.length;k++){
                for(z=0;z<3;z++){
                    tr[k].children[z].firstElementChild.setAttribute("disabled","disabled")
                }
            }
            document.getElementById("p").innerHTML = "The "+Y+" guy Won"
    }

}

function F2(){

    location.reload()
    // C = true
    // for(k=0;k<tr.length;k++){
    //     for(z=0;z<3;z++){
    //         tr[k].children[z].firstElementChild.removeAttribute("disabled")
    //     }
    // }

    // document.getElementById("p").innerHTML = null
    
    // for(i=0;i<tr.length;i++){
    //     for(j=0;j<3;j++){
    //         tr[i].children[j].firstElementChild.value = "";
    //         A[i][j]=""
    //     }
    // }

}