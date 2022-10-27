let tictactoe = new Array;
let red = new Array;
let redPoints = 0;
let blue = new Array;
let bluePoints = 0;
let player = 1;

function restart() {
    tictactoe = new Array;
    red = new Array;
    blue = new Array;
    lastMove = "";
    document.getElementById("score").innerHTML = "Blue " + bluePoints + " : " + redPoints + " Red";
    for (i=0; i<3; i++) {
        for (j=0; j<3; j++) {
            document.getElementById(i.toString()+j.toString()).style.backgroundColor = "white";
        }
    }
    if ((bluePoints + redPoints) % 2 == 0) {
        document.getElementById("p1").innerHTML = "Next player: Blue";
        player = 1;
    } 
    else {
        document.getElementById("p1").innerHTML = "Next player: Red";
        player = -1;
    }
}
function undo() {
    if (tictactoe.length == 0) {
        return;
    }
    tictactoe.pop();
    if (player == -1) { // undo last blue move
        blueID = blue.pop();
        document.getElementById(blueID).style.backgroundColor = "white";
        player = 1;
        document.getElementById("p1").innerHTML = "Next player: Blue";
    } 
    else { // undo last red move
        redID = red.pop();
        document.getElementById(redID).style.backgroundColor = "white";
        player = -1;
        document.getElementById("p1").innerHTML = "Next player: Red";
    }

}

function ifWin(teamArray, id) {
    let win = 0
    for (i in ["0", "1", "2"]) { // test same row
        if (teamArray.indexOf(id[0]+i) != -1) {
            win += 1;
        }
    }

    if (win == 3) {return true;}
    else {win = 0;}

    for (i in ["0", "1", "2"]) { // test same coloumn
        if (teamArray.indexOf(i+id[1]) != -1) {
            win += 1;
        }
    }

    if (win == 3) {return true;}
    else {win = 0;}

    for (i in ["00", "11", "22"]) { // test diagonal 1
        if (teamArray.indexOf(["00", "11", "22"][i]) != -1) {
            win += 1;
        }
    }

    if (win == 3) {return true;}
    else {win = 0;}

    for (i in ["02", "11", "20"]) { // test diagonal 2
        if (teamArray.indexOf(["02", "11", "20"][i]) != -1) {
            win += 1;
        }
    }

    if (win == 3) {return true;}
    else {win = 0;}

}
function lepes(elem, id) { // called on button click
    if (player == 1) { //blue
        if (tictactoe.indexOf(id)==-1) {
            lastMove = id;
            tictactoe.push(id);
            blue.push(id);
            if (ifWin(blue, id)) {
                document.getElementById("p1").innerHTML = "Winner: Blue";
                elem.style.backgroundColor = 'blue';
                alert("Winner: Blue");
                bluePoints += 1;
                restart();
                return;
            }
            player *= -1;
            elem.style.backgroundColor = 'blue';
            document.getElementById("p1").innerHTML = "Next player: Red";
            if (tictactoe.length == 9) {
                restart();
            }
            return;
        }
        return;
    }
    if (player== -1) { //red
        if (tictactoe.indexOf(id)==-1) {
            lastMove = id;
            tictactoe.push(id);
            red.push(id);
            if (ifWin(red, id)) {
                document.getElementById("p1").innerHTML = "Winner: Red";
                elem.style.backgroundColor = 'red';
                alert("Winner: Red");
                redPoints += 1;
                restart();
                return;
            }
            player *= -1;
            elem.style.backgroundColor = 'red';
            document.getElementById("p1").innerHTML = "Next player: Blue";
            if (tictactoe.length == 9) {
                restart();
            }
            return;
        }
    }

}

let lista = ""
for (i=0; i<3; i++) { //table generation

    lista += "<tr>";
        for (j=0; j<3; j++) {
            lista += "<td><button id='" + i.toString() + j.toString() + "' onclick=lepes(this,'"+i.toString()+j.toString()+"')></button></td>";
        }
        lista += "</tr>";
    }
    document.write("<table>" + lista + "</table>");
