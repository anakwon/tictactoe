var currentplayer = 1;
var winning_combo = [[1,2,3], [1,4,7], [2,5,8], [3,6,9], [4,5,6], [7,8,9], [1,5,9], [7,5,3]];
var board=[];


console.log(winning_combo);

function boxclicked(e, num) {
    console.log(e);
    board[num]=currentplayer;
    console.log(board);
    
    if(e.innerHTML == "O" || e.innerHTML == "X")
    {
        return;
    }
    e.innerHTML = currentplayer;
    
    if (currentplayer==1)
    {
        e.innerText="O";
        check_victory();
        currentplayer=2;
        document.querySelector('.player1').style.backgroundColor="red"; 
        document.querySelector('.player2').style.backgroundColor="white"; 

    }else  
    {
        e.innerText="X";
        check_victory();
        currentplayer=1;
        document.querySelector('.player2').style.backgroundColor="red";
        document.querySelector('.player1').style.backgroundColor="white"; 

        
    }
    
}

function check_victory(content) {
    for(var i=0; i< winning_combo.length; i++){
        if(typeof [0][0] != 'undefined' && [0][0] == [0][1] && [0][1] == [0][2] board[winning_combo[i][0]] == board[winning_combo[i][1]] == board[winning_combo[i][2]]);
        {
            alert(content +' You WIN!');
        }
    }
}


          /*var symbol = winning_combo[i];
        
    }
}
        
       /*if(board[winning_combo[i][0]] == combo && board[winning_combo[i][1]] == combo && board[winning_combo[i][2]] == combo) {
            alert("You win!");
}
      
function resetgame(){
    location.reload(true);*/