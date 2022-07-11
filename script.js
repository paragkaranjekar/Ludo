const cells = document.querySelectorAll("box");

const board = [
    null, null, 1, null,
 null, null, null, null,
    null, null, null,  null, 
    null, null, null, null, null,
     null,  null,  null,  null,
    null,  null,  null,  null, 
     null,  null,  null,  null
]

function rolldice(){
    var x=Math.floor(Math.random()*6+1);
    document.getElementById("dice").textContent=x;
    chance1(x);
    console.log("done1");
}





function chance1(x) {
    pieceId= board.indexOf("1");
    var newpos = document.createElement('p');
    var list = document.getElementById(x+pieceId);
    list.appendChild(newpos);
    var list = document.getElementById(pieceId);
    board[pieceId]=null;
    board[pieceId+x]=1;
    console.log(board,x+pieceId);
}

