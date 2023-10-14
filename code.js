// Your Code Here.
// Class is responsible to handle all functionality of the grid.
class ConnectFour{
    // This global variable holds both the playerOne and playerTwo turns,
    // playerOne when true, and playerTwo when false.
    redPlayerTurn = true; 

    // This global variable is responsible for announcing the winner.
    displayWinner = document.querySelector('.winner');
    
    // Add a class to columns, like columns.
    // This global variable is responsible for accessing all columns. 
    getCells = document.querySelectorAll('.cell');

    constructor(){
        // For-each loop for setting a listener on a cell.
        this.getCells.forEach((cell)=> {
            // Displays the players turns.
            let displayRedPlayerTurn = document.querySelector('.red');
            let displayBlackPlayerTurn = document.querySelector('.black');
            // The onClick listener added in the constructor,
            cell.addEventListener('click', ()=>{
                if(this.redPlayerTurn){
                    if((!cell.classList.contains("red-piece") && !cell.classList.contains("black-piece"))){
                        cell.classList.add('red-piece');
                        this.redPlayerTurn = false;
                        displayBlackPlayerTurn.innerHTML = "Black Player's Turn";
                        this.checkForAWin();
                    }
                }else {
                    if((!cell.classList.contains("red-piece") && !cell.classList.contains("black-piece"))){
                        cell.classList.add('black-piece');
                        this.redPlayerTurn = true;
                        displayRedPlayerTurn.innerHTML = "Red Player's Turn";
                        this.checkForAWin();
                    }
                }
            });
        });
    }

    // Method sets the initial player randomly, and then the second player to. 
    // And so on, players will be alternating on the grid.
    firstTurn(){
        // A random generator variable will be needed.
        let randomPick = Math.floor(Math.random() * 2); // Produces a possiblity of
                                                        // Either 0 or 1.

        if(randomPick === 0){
            this.redPlayerTurn = true;
        }else{
            this.redPlayerTurn = false;
        }
    }

    // Method announces a win for the red disc player.
    redWins(){
        this.displayWinner.innerHTML = "Winning move by red!";
    }
    
    // Method announces a win for the black disc player.
    blackWins(){
        this.displayWinner.innerHTML = "Winning move by black!";
    }

    // Method announces a tie.
    aTie(){
        this.displayWinner.innerHTML = "Nobody Won, It's a Tie!";
    }

    // Method resets the game.
    // reset all columns.
    resetGame(){
        // A For-each loop looping through each column, every cell, deleting all red-piece and black-piece classes hence reseting the game.
        this.getCells.forEach((cell)=> {
            if((cell.classList.contains("red-piece"))){
                cell.classList.remove('red-piece');

            }else if(cell.classList.contains("black-piece")){
                cell.classList.remove('black-piece');
            }
        });
    }

    // Method checks for all possible wining disc combinations on the grid.
    // And once one of the many is met, the "redWins()" or "blackWins()" methods
    // Are called to announce the winner.
    checkForAWin(){

        // RED WINS
         if(((this.getCells[0].id === ('cell-1')) && this.getCells[0].classList.contains('red-piece')) && ((this.getCells[1].id === ('cell-2')) && this.getCells[1].classList.contains('red-piece')) && 
            ((this.getCells[2].id === ('cell-3')) && this.getCells[2].classList.contains('red-piece')) && ((this.getCells[3].id === ('cell-4')) && this.getCells[3].classList.contains('red-piece')) || 
            ((this.getCells[1].id === ('cell-2')) && this.getCells[1].classList.contains('red-piece')) && ((this.getCells[2].id === ('cell-3')) && this.getCells[2].classList.contains('red-piece')) && 
            ((this.getCells[3].id === ('cell-4')) && this.getCells[3].classList.contains('red-piece')) && ((this.getCells[4].id === ('cell-5')) && this.getCells[4].classList.contains('red-piece')) || 
            ((this.getCells[2].id === ('cell-3')) && this.getCells[2].classList.contains('red-piece')) && ((this.getCells[3].id === ('cell-4')) && this.getCells[3].classList.contains('red-piece')) && 
            ((this.getCells[4].id === ('cell-5')) && this.getCells[4].classList.contains('red-piece')) && ((this.getCells[5].id === ('cell-6')) && this.getCells[5].classList.contains('red-piece')) || 
            ((this.getCells[3].id === ('cell-4')) && this.getCells[3].classList.contains('red-piece')) && ((this.getCells[4].id === ('cell-5')) && this.getCells[4].classList.contains('red-piece')) && 
            ((this.getCells[5].id === ('cell-6')) && this.getCells[5].classList.contains('red-piece')) && ((this.getCells[6].id === ('cell-7')) && this.getCells[6].classList.contains('red-piece')) || 
            ((this.getCells[7].id === ('cell-8')) && this.getCells[7].classList.contains('red-piece')) && ((this.getCells[8].id === ('cell-9')) && this.getCells[8].classList.contains('red-piece')) && 
            ((this.getCells[9].id === ('cell-10')) && this.getCells[9].classList.contains('red-piece')) && ((this.getCells[10].id === ('cell-11')) && this.getCells[10].classList.contains('red-piece')) || 
            ((this.getCells[8].id === ('cell-9')) && this.getCells[8].classList.contains('red-piece')) && ((this.getCells[9].id === ('cell-10')) && this.getCells[9].classList.contains('red-piece')) && 
            ((this.getCells[10].id === ('cell-11')) && this.getCells[10].classList.contains('red-piece')) && ((this.getCells[11].id === ('cell-12')) && this.getCells[11].classList.contains('red-piece')) || 
            ((this.getCells[9].id === ('cell-10')) && this.getCells[9].classList.contains('red-piece')) && ((this.getCells[10].id === ('cell-11')) && this.getCells[10].classList.contains('red-piece')) && 
            ((this.getCells[11].id === ('cell-12')) && this.getCells[11].classList.contains('red-piece')) && ((this.getCells[12].id === ('cell-13')) && this.getCells[12].classList.contains('red-piece')) || 
            ((this.getCells[10].id === ('cell-11')) && this.getCells[10].classList.contains('red-piece')) && ((this.getCells[11].id === ('cell-12')) && this.getCells[11].classList.contains('red-piece')) && 
            ((this.getCells[12].id === ('cell-13')) && this.getCells[12].classList.contains('red-piece')) && ((this.getCells[13].id === ('cell-14')) && this.getCells[13].classList.contains('red-piece')) || 
            ((this.getCells[14].id === ('cell-15')) && this.getCells[14].classList.contains('red-piece')) && ((this.getCells[15].id === ('cell-16')) && this.getCells[15].classList.contains('red-piece')) && 
            ((this.getCells[16].id === ('cell-17')) && this.getCells[16].classList.contains('red-piece')) && ((this.getCells[17].id === ('cell-18')) && this.getCells[17].classList.contains('red-piece')) || 
            ((this.getCells[15].id === ('cell-16')) && this.getCells[15].classList.contains('red-piece')) && ((this.getCells[16].id === ('cell-17')) && this.getCells[16].classList.contains('red-piece')) && 
            ((this.getCells[17].id === ('cell-18')) && this.getCells[17].classList.contains('red-piece')) && ((this.getCells[18].id === ('cell-19')) && this.getCells[18].classList.contains('red-piece')) || 
            ((this.getCells[16].id === ('cell-17')) && this.getCells[16].classList.contains('red-piece')) && ((this.getCells[17].id === ('cell-18')) && this.getCells[17].classList.contains('red-piece')) && 
            ((this.getCells[18].id === ('cell-19')) && this.getCells[18].classList.contains('red-piece')) && ((this.getCells[19].id === ('cell-20')) && this.getCells[19].classList.contains('red-piece')) || 
            ((this.getCells[17].id === ('cell-18')) && this.getCells[17].classList.contains('red-piece')) && ((this.getCells[18].id === ('cell-19')) && this.getCells[18].classList.contains('red-piece')) && 
            ((this.getCells[19].id === ('cell-20')) && this.getCells[19].classList.contains('red-piece')) && ((this.getCells[20].id === ('cell-21')) && this.getCells[20].classList.contains('red-piece')) || 
            ((this.getCells[21].id === ('cell-22')) && this.getCells[21].classList.contains('red-piece')) && ((this.getCells[22].id === ('cell-23')) && this.getCells[22].classList.contains('red-piece')) && 
            ((this.getCells[23].id === ('cell-24')) && this.getCells[23].classList.contains('red-piece')) && ((this.getCells[24].id === ('cell-25')) && this.getCells[24].classList.contains('red-piece')) || 
            ((this.getCells[22].id === ('cell-23')) && this.getCells[22].classList.contains('red-piece')) && ((this.getCells[23].id === ('cell-24')) && this.getCells[23].classList.contains('red-piece')) && 
            ((this.getCells[24].id === ('cell-25')) && this.getCells[24].classList.contains('red-piece')) && ((this.getCells[25].id === ('cell-26')) && this.getCells[25].classList.contains('red-piece')) || 
            ((this.getCells[23].id === ('cell-24')) && this.getCells[23].classList.contains('red-piece')) && ((this.getCells[24].id === ('cell-25')) && this.getCells[24].classList.contains('red-piece')) && 
            ((this.getCells[25].id === ('cell-26')) && this.getCells[25].classList.contains('red-piece')) && ((this.getCells[26].id === ('cell-27')) && this.getCells[26].classList.contains('red-piece')) || 
            ((this.getCells[24].id === ('cell-25')) && this.getCells[24].classList.contains('red-piece')) && ((this.getCells[25].id === ('cell-26')) && this.getCells[25].classList.contains('red-piece')) && 
            ((this.getCells[26].id === ('cell-27')) && this.getCells[26].classList.contains('red-piece')) && ((this.getCells[27].id === ('cell-28')) && this.getCells[27].classList.contains('red-piece')) || 
            ((this.getCells[28].id === ('cell-29')) && this.getCells[28].classList.contains('red-piece')) && ((this.getCells[29].id === ('cell-30')) && this.getCells[29].classList.contains('red-piece')) && 
            ((this.getCells[30].id === ('cell-31')) && this.getCells[30].classList.contains('red-piece')) && ((this.getCells[31].id === ('cell-32')) && this.getCells[31].classList.contains('red-piece')) || 
            ((this.getCells[29].id === ('cell-30')) && this.getCells[29].classList.contains('red-piece')) && ((this.getCells[30].id === ('cell-31')) && this.getCells[30].classList.contains('red-piece')) && 
            ((this.getCells[31].id === ('cell-32')) && this.getCells[31].classList.contains('red-piece')) && ((this.getCells[32].id === ('cell-33')) && this.getCells[32].classList.contains('red-piece')) || 
            ((this.getCells[30].id === ('cell-31')) && this.getCells[30].classList.contains('red-piece')) && ((this.getCells[31].id === ('cell-32')) && this.getCells[31].classList.contains('red-piece')) && 
            ((this.getCells[32].id === ('cell-33')) && this.getCells[32].classList.contains('red-piece')) && ((this.getCells[33].id === ('cell-34')) && this.getCells[33].classList.contains('red-piece')) || 
            ((this.getCells[31].id === ('cell-32')) && this.getCells[31].classList.contains('red-piece')) && ((this.getCells[32].id === ('cell-33')) && this.getCells[32].classList.contains('red-piece')) && 
            ((this.getCells[33].id === ('cell-34')) && this.getCells[33].classList.contains('red-piece')) && ((this.getCells[34].id === ('cell-35')) && this.getCells[34].classList.contains('red-piece')) || 
            ((this.getCells[35].id === ('cell-36')) && this.getCells[35].classList.contains('red-piece')) && ((this.getCells[36].id === ('cell-37')) && this.getCells[36].classList.contains('red-piece')) && 
            ((this.getCells[37].id === ('cell-38')) && this.getCells[37].classList.contains('red-piece')) && ((this.getCells[38].id === ('cell-39')) && this.getCells[38].classList.contains('red-piece')) || 
            ((this.getCells[36].id === ('cell-37')) && this.getCells[36].classList.contains('red-piece')) && ((this.getCells[37].id === ('cell-38')) && this.getCells[37].classList.contains('red-piece')) && 
            ((this.getCells[38].id === ('cell-39')) && this.getCells[38].classList.contains('red-piece')) && ((this.getCells[39].id === ('cell-40')) && this.getCells[39].classList.contains('red-piece')) || 
            ((this.getCells[37].id === ('cell-38')) && this.getCells[37].classList.contains('red-piece')) && ((this.getCells[38].id === ('cell-39')) && this.getCells[38].classList.contains('red-piece')) && 
            ((this.getCells[39].id === ('cell-40')) && this.getCells[39].classList.contains('red-piece')) && ((this.getCells[40].id === ('cell-41')) && this.getCells[40].classList.contains('red-piece')) || 
            ((this.getCells[38].id === ('cell-39')) && this.getCells[38].classList.contains('red-piece')) && ((this.getCells[39].id === ('cell-40')) && this.getCells[39].classList.contains('red-piece')) && 
            ((this.getCells[40].id === ('cell-41')) && this.getCells[40].classList.contains('red-piece')) && ((this.getCells[41].id === ('cell-42')) && this.getCells[41].classList.contains('red-piece')) || 
            ((this.getCells[0].id === ('cell-1')) && this.getCells[0].classList.contains('red-piece')) && ((this.getCells[7].id === ('cell-8')) && this.getCells[7].classList.contains('red-piece')) && 
            ((this.getCells[14].id === ('cell-15')) && this.getCells[14].classList.contains('red-piece')) && ((this.getCells[21].id === ('cell-22')) && this.getCells[21].classList.contains('red-piece')) || 
            ((this.getCells[7].id === ('cell-8')) && this.getCells[7].classList.contains('red-piece')) && ((this.getCells[14].id === ('cell-15')) && this.getCells[14].classList.contains('red-piece')) && 
            ((this.getCells[21].id === ('cell-22')) && this.getCells[21].classList.contains('red-piece')) && ((this.getCells[28].id === ('cell-29')) && this.getCells[28].classList.contains('red-piece')) || 
            ((this.getCells[14].id === ('cell-15')) && this.getCells[14].classList.contains('red-piece')) && ((this.getCells[21].id === ('cell-22')) && this.getCells[21].classList.contains('red-piece')) && 
            ((this.getCells[28].id === ('cell-29')) && this.getCells[28].classList.contains('red-piece')) && ((this.getCells[35].id === ('cell-36')) && this.getCells[35].classList.contains('red-piece')) || 
            ((this.getCells[1].id === ('cell-2')) && this.getCells[1].classList.contains('red-piece')) && ((this.getCells[8].id === ('cell-9')) && this.getCells[8].classList.contains('red-piece')) && 
            ((this.getCells[15].id === ('cell-16')) && this.getCells[15].classList.contains('red-piece')) && ((this.getCells[22].id === ('cell-23')) && this.getCells[22].classList.contains('red-piece')) || 
            ((this.getCells[8].id === ('cell-9')) && this.getCells[8].classList.contains('red-piece')) && ((this.getCells[15].id === ('cell-16')) && this.getCells[15].classList.contains('red-piece')) && 
            ((this.getCells[22].id === ('cell-23')) && this.getCells[22].classList.contains('red-piece')) && ((this.getCells[29].id === ('cell-30')) && this.getCells[29].classList.contains('red-piece')) || 
            ((this.getCells[15].id === ('cell-16')) && this.getCells[15].classList.contains('red-piece')) && ((this.getCells[22].id === ('cell-23')) && this.getCells[22].classList.contains('red-piece')) && 
            ((this.getCells[29].id === ('cell-30')) && this.getCells[29].classList.contains('red-piece')) && ((this.getCells[36].id === ('cell-37')) && this.getCells[36].classList.contains('red-piece')) || 
            ((this.getCells[2].id === ('cell-3')) && this.getCells[2].classList.contains('red-piece')) && ((this.getCells[9].id === ('cell-10')) && this.getCells[9].classList.contains('red-piece')) && 
            ((this.getCells[16].id === ('cell-17')) && this.getCells[16].classList.contains('red-piece')) && ((this.getCells[23].id === ('cell-24')) && this.getCells[23].classList.contains('red-piece')) || 
            ((this.getCells[9].id === ('cell-10')) && this.getCells[9].classList.contains('red-piece')) && ((this.getCells[16].id === ('cell-17')) && this.getCells[16].classList.contains('red-piece')) && 
            ((this.getCells[23].id === ('cell-24')) && this.getCells[23].classList.contains('red-piece')) && ((this.getCells[30].id === ('cell-31')) && this.getCells[30].classList.contains('red-piece')) || 
            ((this.getCells[16].id === ('cell-17')) && this.getCells[16].classList.contains('red-piece')) && ((this.getCells[23].id === ('cell-24')) && this.getCells[23].classList.contains('red-piece')) && 
            ((this.getCells[30].id === ('cell-31')) && this.getCells[30].classList.contains('red-piece')) && ((this.getCells[37].id === ('cell-38')) && this.getCells[37].classList.contains('red-piece')) || 
            ((this.getCells[3].id === ('cell-4')) && this.getCells[3].classList.contains('red-piece')) && ((this.getCells[10].id === ('cell-11')) && this.getCells[10].classList.contains('red-piece')) && 
            ((this.getCells[17].id === ('cell-18')) && this.getCells[17].classList.contains('red-piece')) && ((this.getCells[24].id === ('cell-25')) && this.getCells[24].classList.contains('red-piece')) || 
            ((this.getCells[10].id === ('cell-11')) && this.getCells[10].classList.contains('red-piece')) && ((this.getCells[17].id === ('cell-18')) && this.getCells[17].classList.contains('red-piece')) && 
            ((this.getCells[24].id === ('cell-25')) && this.getCells[24].classList.contains('red-piece')) && ((this.getCells[31].id === ('cell-32')) && this.getCells[31].classList.contains('red-piece')) || 
            ((this.getCells[17].id === ('cell-18')) && this.getCells[17].classList.contains('red-piece')) && ((this.getCells[24].id === ('cell-25')) && this.getCells[24].classList.contains('red-piece')) && 
            ((this.getCells[31].id === ('cell-32')) && this.getCells[31].classList.contains('red-piece')) && ((this.getCells[38].id === ('cell-39')) && this.getCells[38].classList.contains('red-piece')) || 
            ((this.getCells[4].id === ('cell-5')) && this.getCells[4].classList.contains('red-piece')) && ((this.getCells[11].id === ('cell-12')) && this.getCells[11].classList.contains('red-piece')) && 
            ((this.getCells[18].id === ('cell-19')) && this.getCells[18].classList.contains('red-piece')) && ((this.getCells[25].id === ('cell-26')) && this.getCells[25].classList.contains('red-piece')) || 
            ((this.getCells[11].id === ('cell-12')) && this.getCells[11].classList.contains('red-piece')) && ((this.getCells[18].id === ('cell-19')) && this.getCells[18].classList.contains('red-piece')) && 
            ((this.getCells[25].id === ('cell-26')) && this.getCells[25].classList.contains('red-piece')) && ((this.getCells[32].id === ('cell-33')) && this.getCells[32].classList.contains('red-piece')) || 
            ((this.getCells[18].id === ('cell-19')) && this.getCells[18].classList.contains('red-piece')) && ((this.getCells[25].id === ('cell-26')) && this.getCells[25].classList.contains('red-piece')) && 
            ((this.getCells[32].id === ('cell-33')) && this.getCells[32].classList.contains('red-piece')) && ((this.getCells[39].id === ('cell-40')) && this.getCells[39].classList.contains('red-piece')) || 
            ((this.getCells[5].id === ('cell-6')) && this.getCells[5].classList.contains('red-piece')) && ((this.getCells[12].id === ('cell-13')) && this.getCells[12].classList.contains('red-piece')) && 
            ((this.getCells[19].id === ('cell-20')) && this.getCells[19].classList.contains('red-piece')) && ((this.getCells[26].id === ('cell-27')) && this.getCells[26].classList.contains('red-piece')) || 
            ((this.getCells[12].id === ('cell-13')) && this.getCells[12].classList.contains('red-piece')) && ((this.getCells[19].id === ('cell-20')) && this.getCells[19].classList.contains('red-piece')) && 
            ((this.getCells[26].id === ('cell-27')) && this.getCells[26].classList.contains('red-piece')) && ((this.getCells[33].id === ('cell-34')) && this.getCells[33].classList.contains('red-piece')) || 
            ((this.getCells[19].id === ('cell-20')) && this.getCells[19].classList.contains('red-piece')) && ((this.getCells[26].id === ('cell-27')) && this.getCells[26].classList.contains('red-piece')) && 
            ((this.getCells[33].id === ('cell-34')) && this.getCells[33].classList.contains('red-piece')) && ((this.getCells[40].id === ('cell-41')) && this.getCells[40].classList.contains('red-piece')) || 
            ((this.getCells[6].id === ('cell-7')) && this.getCells[6].classList.contains('red-piece')) && ((this.getCells[13].id === ('cell-14')) && this.getCells[13].classList.contains('red-piece')) && 
            ((this.getCells[20].id === ('cell-21')) && this.getCells[20].classList.contains('red-piece')) && ((this.getCells[27].id === ('cell-28')) && this.getCells[27].classList.contains('red-piece')) || 
            ((this.getCells[13].id === ('cell-14')) && this.getCells[13].classList.contains('red-piece')) && ((this.getCells[20].id === ('cell-21')) && this.getCells[20].classList.contains('red-piece')) && 
            ((this.getCells[27].id === ('cell-28')) && this.getCells[27].classList.contains('red-piece')) && ((this.getCells[34].id === ('cell-35')) && this.getCells[34].classList.contains('red-piece')) || 
            ((this.getCells[20].id === ('cell-21')) && this.getCells[20].classList.contains('red-piece')) && ((this.getCells[27].id === ('cell-28')) && this.getCells[27].classList.contains('red-piece')) && 
            ((this.getCells[34].id === ('cell-35')) && this.getCells[34].classList.contains('red-piece')) && ((this.getCells[41].id === ('cell-42')) && this.getCells[41].classList.contains('red-piece')) || 
            ((this.getCells[14].id === ('cell-15')) && this.getCells[14].classList.contains('red-piece')) && ((this.getCells[22].id === ('cell-23')) && this.getCells[22].classList.contains('red-piece')) && 
            ((this.getCells[30].id === ('cell-31')) && this.getCells[30].classList.contains('red-piece')) && ((this.getCells[38].id === ('cell-39')) && this.getCells[38].classList.contains('red-piece')) || 
            ((this.getCells[3].id === ('cell-4')) && this.getCells[3].classList.contains('red-piece')) && ((this.getCells[11].id === ('cell-12')) && this.getCells[11].classList.contains('red-piece')) && 
            ((this.getCells[19].id === ('cell-20')) && this.getCells[19].classList.contains('red-piece')) && ((this.getCells[27].id === ('cell-28')) && this.getCells[27].classList.contains('red-piece')) || 
            ((this.getCells[7].id === ('cell-8')) && this.getCells[7].classList.contains('red-piece')) && ((this.getCells[15].id === ('cell-16')) && this.getCells[15].classList.contains('red-piece')) && 
            ((this.getCells[23].id === ('cell-24')) && this.getCells[23].classList.contains('red-piece')) && ((this.getCells[31].id === ('cell-32')) && this.getCells[31].classList.contains('red-piece')) || 
            ((this.getCells[15].id === ('cell-16')) && this.getCells[15].classList.contains('red-piece')) && ((this.getCells[23].id === ('cell-24')) && this.getCells[23].classList.contains('red-piece')) && 
            ((this.getCells[31].id === ('cell-32')) && this.getCells[31].classList.contains('red-piece')) && ((this.getCells[39].id === ('cell-40')) && this.getCells[39].classList.contains('red-piece')) || 
            ((this.getCells[2].id === ('cell-3')) && this.getCells[2].classList.contains('red-piece')) && ((this.getCells[10].id === ('cell-11')) && this.getCells[10].classList.contains('red-piece')) && 
            ((this.getCells[18].id === ('cell-19')) && this.getCells[18].classList.contains('red-piece')) && ((this.getCells[26].id === ('cell-27')) && this.getCells[26].classList.contains('red-piece')) || 
            ((this.getCells[10].id === ('cell-11')) && this.getCells[10].classList.contains('red-piece')) && ((this.getCells[18].id === ('cell-19')) && this.getCells[18].classList.contains('red-piece')) && 
            ((this.getCells[26].id === ('cell-27')) && this.getCells[26].classList.contains('red-piece')) && ((this.getCells[34].id === ('cell-35')) && this.getCells[34].classList.contains('red-piece')) || 
            ((this.getCells[0].id === ('cell-1')) && this.getCells[0].classList.contains('red-piece')) && ((this.getCells[8].id === ('cell-9')) && this.getCells[8].classList.contains('red-piece')) && 
            ((this.getCells[16].id === ('cell-17')) && this.getCells[16].classList.contains('red-piece')) && ((this.getCells[24].id === ('cell-25')) && this.getCells[24].classList.contains('red-piece')) || 
            ((this.getCells[8].id === ('cell-9')) && this.getCells[8].classList.contains('red-piece')) && ((this.getCells[16].id === ('cell-17')) && this.getCells[16].classList.contains('red-piece')) && 
            ((this.getCells[24].id === ('cell-25')) && this.getCells[24].classList.contains('red-piece')) && ((this.getCells[32].id === ('cell-33')) && this.getCells[32].classList.contains('red-piece')) || 
            ((this.getCells[16].id === ('cell-17')) && this.getCells[16].classList.contains('red-piece')) && ((this.getCells[24].id === ('cell-25')) && this.getCells[24].classList.contains('red-piece')) && 
            ((this.getCells[32].id === ('cell-33')) && this.getCells[32].classList.contains('red-piece')) && ((this.getCells[40].id === ('cell-41')) && this.getCells[40].classList.contains('red-piece')) || 
            ((this.getCells[1].id === ('cell-2')) && this.getCells[1].classList.contains('red-piece')) && ((this.getCells[9].id === ('cell-10')) && this.getCells[9].classList.contains('red-piece')) && 
            ((this.getCells[17].id === ('cell-18')) && this.getCells[17].classList.contains('red-piece')) && ((this.getCells[25].id === ('cell-26')) && this.getCells[25].classList.contains('red-piece')) || 
            ((this.getCells[9].id === ('cell-10')) && this.getCells[9].classList.contains('red-piece')) && ((this.getCells[17].id === ('cell-18')) && this.getCells[17].classList.contains('red-piece')) && 
            ((this.getCells[25].id === ('cell-26')) && this.getCells[25].classList.contains('red-piece')) && ((this.getCells[33].id === ('cell-34')) && this.getCells[33].classList.contains('red-piece')) || 
            ((this.getCells[17].id === ('cell-18')) && this.getCells[17].classList.contains('red-piece')) && ((this.getCells[25].id === ('cell-26')) && this.getCells[25].classList.contains('red-piece')) && 
            ((this.getCells[33].id === ('cell-34')) && this.getCells[33].classList.contains('red-piece')) && ((this.getCells[21].id === ('cell-22')) && this.getCells[21].classList.contains('red-piece')) || 
            ((this.getCells[21].id === ('cell-22')) && this.getCells[21].classList.contains('red-piece')) && ((this.getCells[15].id === ('cell-16')) && this.getCells[15].classList.contains('red-piece')) && 
            ((this.getCells[9].id === ('cell-10')) && this.getCells[9].classList.contains('red-piece')) && ((this.getCells[3].id === ('cell-4')) && this.getCells[3].classList.contains('red-piece')) || 
            ((this.getCells[28].id === ('cell-29')) && this.getCells[28].classList.contains('red-piece')) && ((this.getCells[22].id === ('cell-23')) && this.getCells[22].classList.contains('red-piece')) && 
            ((this.getCells[16].id === ('cell-17')) && this.getCells[16].classList.contains('red-piece')) && ((this.getCells[10].id === ('cell-11')) && this.getCells[10].classList.contains('red-piece')) || 
            ((this.getCells[22].id === ('cell-23')) && this.getCells[22].classList.contains('red-piece')) && ((this.getCells[16].id === ('cell-17')) && this.getCells[16].classList.contains('red-piece')) && 
            ((this.getCells[10].id === ('cell-11')) && this.getCells[10].classList.contains('red-piece')) && ((this.getCells[4].id === ('cell-5')) && this.getCells[4].classList.contains('red-piece')) || 
            ((this.getCells[35].id === ('cell-36')) && this.getCells[35].classList.contains('red-piece')) && ((this.getCells[29].id === ('cell-30')) && this.getCells[29].classList.contains('red-piece')) && 
            ((this.getCells[23].id === ('cell-24')) && this.getCells[23].classList.contains('red-piece')) && ((this.getCells[17].id === ('cell-18')) && this.getCells[17].classList.contains('red-piece')) || 
            ((this.getCells[29].id === ('cell-30')) && this.getCells[29].classList.contains('red-piece')) && ((this.getCells[23].id === ('cell-24')) && this.getCells[23].classList.contains('red-piece')) && 
            ((this.getCells[17].id === ('cell-18')) && this.getCells[17].classList.contains('red-piece')) && ((this.getCells[11].id === ('cell-12')) && this.getCells[11].classList.contains('red-piece')) || 
            ((this.getCells[23].id === ('cell-24')) && this.getCells[23].classList.contains('red-piece')) && ((this.getCells[17].id === ('cell-18')) && this.getCells[17].classList.contains('red-piece')) && 
            ((this.getCells[11].id === ('cell-12')) && this.getCells[11].classList.contains('red-piece')) && ((this.getCells[5].id === ('cell-6')) && this.getCells[5].classList.contains('red-piece')) || 
            ((this.getCells[36].id === ('cell-37')) && this.getCells[36].classList.contains('red-piece')) && ((this.getCells[30].id === ('cell-31')) && this.getCells[30].classList.contains('red-piece')) && 
            ((this.getCells[24].id === ('cell-25')) && this.getCells[24].classList.contains('red-piece')) && ((this.getCells[18].id === ('cell-19')) && this.getCells[18].classList.contains('red-piece')) || 
            ((this.getCells[30].id === ('cell-31')) && this.getCells[30].classList.contains('red-piece')) && ((this.getCells[24].id === ('cell-25')) && this.getCells[24].classList.contains('red-piece')) && 
            ((this.getCells[18].id === ('cell-19')) && this.getCells[18].classList.contains('red-piece')) && ((this.getCells[12].id === ('cell-13')) && this.getCells[12].classList.contains('red-piece')) || 
            ((this.getCells[24].id === ('cell-25')) && this.getCells[24].classList.contains('red-piece')) && ((this.getCells[18].id === ('cell-19')) && this.getCells[18].classList.contains('red-piece')) && 
            ((this.getCells[12].id === ('cell-13')) && this.getCells[12].classList.contains('red-piece')) && ((this.getCells[16].id === ('cell-17')) && this.getCells[16].classList.contains('red-piece')) || 
            ((this.getCells[37].id === ('cell-38')) && this.getCells[37].classList.contains('red-piece')) && ((this.getCells[31].id === ('cell-32')) && this.getCells[31].classList.contains('red-piece')) && 
            ((this.getCells[25].id === ('cell-26')) && this.getCells[25].classList.contains('red-piece')) && ((this.getCells[19].id === ('cell-20')) && this.getCells[19].classList.contains('red-piece')) || 
            ((this.getCells[31].id === ('cell-32')) && this.getCells[31].classList.contains('red-piece')) && ((this.getCells[25].id === ('cell-26')) && this.getCells[25].classList.contains('red-piece')) && 
            ((this.getCells[19].id === ('cell-20')) && this.getCells[19].classList.contains('red-piece')) && ((this.getCells[13].id === ('cell-14')) && this.getCells[13].classList.contains('red-piece')) || 
            ((this.getCells[38].id === ('cell-39')) && this.getCells[38].classList.contains('red-piece')) && ((this.getCells[32].id === ('cell-33')) && this.getCells[32].classList.contains('red-piece')) && 
            ((this.getCells[26].id === ('cell-27')) && this.getCells[26].classList.contains('red-piece')) && ((this.getCells[20].id === ('cell-21')) && this.getCells[20].classList.contains('red-piece'))){
            this.redWins();
            this.resetGame();
        }

        // BLACK WINS
        if(((this.getCells[0].id === ('cell-1')) && this.getCells[0].classList.contains('black-piece')) && ((this.getCells[1].id === ('cell-2')) && this.getCells[1].classList.contains('black-piece')) && 
            ((this.getCells[2].id === ('cell-3')) && this.getCells[2].classList.contains('black-piece')) && ((this.getCells[3].id === ('cell-4')) && this.getCells[3].classList.contains('black-piece')) || 
            ((this.getCells[1].id === ('cell-2')) && this.getCells[1].classList.contains('black-piece')) && ((this.getCells[2].id === ('cell-3')) && this.getCells[2].classList.contains('black-piece')) && 
            ((this.getCells[3].id === ('cell-4')) && this.getCells[3].classList.contains('black-piece')) && ((this.getCells[4].id === ('cell-5')) && this.getCells[4].classList.contains('black-piece')) || 
            ((this.getCells[2].id === ('cell-3')) && this.getCells[2].classList.contains('black-piece')) && ((this.getCells[3].id === ('cell-4')) && this.getCells[3].classList.contains('black-piece')) && 
            ((this.getCells[4].id === ('cell-5')) && this.getCells[4].classList.contains('black-piece')) && ((this.getCells[5].id === ('cell-6')) && this.getCells[5].classList.contains('black-piece')) || 
            ((this.getCells[3].id === ('cell-4')) && this.getCells[3].classList.contains('black-piece')) && ((this.getCells[4].id === ('cell-5')) && this.getCells[4].classList.contains('black-piece')) && 
            ((this.getCells[5].id === ('cell-6')) && this.getCells[5].classList.contains('black-piece')) && ((this.getCells[6].id === ('cell-7')) && this.getCells[6].classList.contains('black-piece')) || 
            ((this.getCells[7].id === ('cell-8')) && this.getCells[7].classList.contains('black-piece')) && ((this.getCells[8].id === ('cell-9')) && this.getCells[8].classList.contains('black-piece')) && 
            ((this.getCells[9].id === ('cell-10')) && this.getCells[9].classList.contains('black-piece')) && ((this.getCells[10].id === ('cell-11')) && this.getCells[10].classList.contains('black-piece')) || 
            ((this.getCells[8].id === ('cell-9')) && this.getCells[8].classList.contains('black-piece')) && ((this.getCells[9].id === ('cell-10')) && this.getCells[9].classList.contains('black-piece')) && 
            ((this.getCells[10].id === ('cell-11')) && this.getCells[10].classList.contains('black-piece')) && ((this.getCells[11].id === ('cell-12')) && this.getCells[11].classList.contains('black-piece')) || 
            ((this.getCells[9].id === ('cell-10')) && this.getCells[9].classList.contains('black-piece')) && ((this.getCells[10].id === ('cell-11')) && this.getCells[10].classList.contains('black-piece')) && 
            ((this.getCells[11].id === ('cell-12')) && this.getCells[11].classList.contains('black-piece')) && ((this.getCells[12].id === ('cell-13')) && this.getCells[12].classList.contains('black-piece')) || 
            ((this.getCells[10].id === ('cell-11')) && this.getCells[10].classList.contains('black-piece')) && ((this.getCells[11].id === ('cell-12')) && this.getCells[11].classList.contains('black-piece')) && 
            ((this.getCells[12].id === ('cell-13')) && this.getCells[12].classList.contains('black-piece')) && ((this.getCells[13].id === ('cell-14')) && this.getCells[13].classList.contains('black-piece')) || 
            ((this.getCells[14].id === ('cell-15')) && this.getCells[14].classList.contains('black-piece')) && ((this.getCells[15].id === ('cell-16')) && this.getCells[15].classList.contains('black-piece')) && 
            ((this.getCells[16].id === ('cell-17')) && this.getCells[16].classList.contains('black-piece')) && ((this.getCells[17].id === ('cell-18')) && this.getCells[17].classList.contains('black-piece')) || 
            ((this.getCells[15].id === ('cell-16')) && this.getCells[15].classList.contains('black-piece')) && ((this.getCells[16].id === ('cell-17')) && this.getCells[16].classList.contains('black-piece')) && 
            ((this.getCells[17].id === ('cell-18')) && this.getCells[17].classList.contains('black-piece')) && ((this.getCells[18].id === ('cell-19')) && this.getCells[18].classList.contains('black-piece')) || 
            ((this.getCells[16].id === ('cell-17')) && this.getCells[16].classList.contains('black-piece')) && ((this.getCells[17].id === ('cell-18')) && this.getCells[17].classList.contains('black-piece')) && 
            ((this.getCells[18].id === ('cell-19')) && this.getCells[18].classList.contains('black-piece')) && ((this.getCells[19].id === ('cell-20')) && this.getCells[19].classList.contains('black-piece')) || 
            ((this.getCells[17].id === ('cell-18')) && this.getCells[17].classList.contains('black-piece')) && ((this.getCells[18].id === ('cell-19')) && this.getCells[18].classList.contains('black-piece')) && 
            ((this.getCells[19].id === ('cell-20')) && this.getCells[19].classList.contains('black-piece')) && ((this.getCells[20].id === ('cell-21')) && this.getCells[20].classList.contains('black-piece')) || 
            ((this.getCells[21].id === ('cell-22')) && this.getCells[21].classList.contains('black-piece')) && ((this.getCells[22].id === ('cell-23')) && this.getCells[22].classList.contains('black-piece')) && 
            ((this.getCells[23].id === ('cell-24')) && this.getCells[23].classList.contains('black-piece')) && ((this.getCells[24].id === ('cell-25')) && this.getCells[24].classList.contains('black-piece')) || 
            ((this.getCells[22].id === ('cell-23')) && this.getCells[22].classList.contains('black-piece')) && ((this.getCells[23].id === ('cell-24')) && this.getCells[23].classList.contains('black-piece')) && 
            ((this.getCells[24].id === ('cell-25')) && this.getCells[24].classList.contains('black-piece')) && ((this.getCells[25].id === ('cell-26')) && this.getCells[25].classList.contains('black-piece')) || 
            ((this.getCells[23].id === ('cell-24')) && this.getCells[23].classList.contains('black-piece')) && ((this.getCells[24].id === ('cell-25')) && this.getCells[24].classList.contains('black-piece')) && 
            ((this.getCells[25].id === ('cell-26')) && this.getCells[25].classList.contains('black-piece')) && ((this.getCells[26].id === ('cell-27')) && this.getCells[26].classList.contains('black-piece')) || 
            ((this.getCells[24].id === ('cell-25')) && this.getCells[24].classList.contains('black-piece')) && ((this.getCells[25].id === ('cell-26')) && this.getCells[25].classList.contains('black-piece')) && 
            ((this.getCells[26].id === ('cell-27')) && this.getCells[26].classList.contains('black-piece')) && ((this.getCells[27].id === ('cell-28')) && this.getCells[27].classList.contains('black-piece')) || 
            ((this.getCells[28].id === ('cell-29')) && this.getCells[28].classList.contains('black-piece')) && ((this.getCells[29].id === ('cell-30')) && this.getCells[29].classList.contains('black-piece')) && 
            ((this.getCells[30].id === ('cell-31')) && this.getCells[30].classList.contains('black-piece')) && ((this.getCells[31].id === ('cell-32')) && this.getCells[31].classList.contains('black-piece')) || 
            ((this.getCells[29].id === ('cell-30')) && this.getCells[29].classList.contains('black-piece')) && ((this.getCells[30].id === ('cell-31')) && this.getCells[30].classList.contains('black-piece')) && 
            ((this.getCells[31].id === ('cell-32')) && this.getCells[31].classList.contains('black-piece')) && ((this.getCells[32].id === ('cell-33')) && this.getCells[32].classList.contains('black-piece')) || 
            ((this.getCells[30].id === ('cell-31')) && this.getCells[30].classList.contains('black-piece')) && ((this.getCells[31].id === ('cell-32')) && this.getCells[31].classList.contains('black-piece')) && 
            ((this.getCells[32].id === ('cell-33')) && this.getCells[32].classList.contains('black-piece')) && ((this.getCells[33].id === ('cell-34')) && this.getCells[33].classList.contains('black-piece')) || 
            ((this.getCells[31].id === ('cell-32')) && this.getCells[31].classList.contains('black-piece')) && ((this.getCells[32].id === ('cell-33')) && this.getCells[32].classList.contains('black-piece')) && 
            ((this.getCells[33].id === ('cell-34')) && this.getCells[33].classList.contains('black-piece')) && ((this.getCells[34].id === ('cell-35')) && this.getCells[34].classList.contains('black-piece')) || 
            ((this.getCells[35].id === ('cell-36')) && this.getCells[35].classList.contains('black-piece')) && ((this.getCells[36].id === ('cell-37')) && this.getCells[36].classList.contains('black-piece')) && 
            ((this.getCells[37].id === ('cell-38')) && this.getCells[37].classList.contains('black-piece')) && ((this.getCells[38].id === ('cell-39')) && this.getCells[38].classList.contains('black-piece')) || 
            ((this.getCells[36].id === ('cell-37')) && this.getCells[36].classList.contains('black-piece')) && ((this.getCells[37].id === ('cell-38')) && this.getCells[37].classList.contains('black-piece')) && 
            ((this.getCells[38].id === ('cell-39')) && this.getCells[38].classList.contains('black-piece')) && ((this.getCells[39].id === ('cell-40')) && this.getCells[39].classList.contains('black-piece')) || 
            ((this.getCells[37].id === ('cell-38')) && this.getCells[37].classList.contains('black-piece')) && ((this.getCells[38].id === ('cell-39')) && this.getCells[38].classList.contains('black-piece')) && 
            ((this.getCells[39].id === ('cell-40')) && this.getCells[39].classList.contains('black-piece')) && ((this.getCells[40].id === ('cell-41')) && this.getCells[40].classList.contains('black-piece')) || 
            ((this.getCells[38].id === ('cell-39')) && this.getCells[38].classList.contains('black-piece')) && ((this.getCells[39].id === ('cell-40')) && this.getCells[39].classList.contains('black-piece')) && 
            ((this.getCells[40].id === ('cell-41')) && this.getCells[40].classList.contains('black-piece')) && ((this.getCells[41].id === ('cell-42')) && this.getCells[41].classList.contains('black-piece')) || 
            ((this.getCells[0].id === ('cell-1')) && this.getCells[0].classList.contains('black-piece')) && ((this.getCells[7].id === ('cell-8')) && this.getCells[7].classList.contains('black-piece')) && 
            ((this.getCells[14].id === ('cell-15')) && this.getCells[14].classList.contains('black-piece')) && ((this.getCells[21].id === ('cell-22')) && this.getCells[21].classList.contains('black-piece')) || 
            ((this.getCells[7].id === ('cell-8')) && this.getCells[7].classList.contains('black-piece')) && ((this.getCells[14].id === ('cell-15')) && this.getCells[14].classList.contains('black-piece')) && 
            ((this.getCells[21].id === ('cell-22')) && this.getCells[21].classList.contains('black-piece')) && ((this.getCells[28].id === ('cell-29')) && this.getCells[28].classList.contains('black-piece')) || 
            ((this.getCells[14].id === ('cell-15')) && this.getCells[14].classList.contains('black-piece')) && ((this.getCells[21].id === ('cell-22')) && this.getCells[21].classList.contains('black-piece')) && 
            ((this.getCells[28].id === ('cell-29')) && this.getCells[28].classList.contains('black-piece')) && ((this.getCells[35].id === ('cell-36')) && this.getCells[35].classList.contains('black-piece')) || 
            ((this.getCells[1].id === ('cell-2')) && this.getCells[1].classList.contains('black-piece')) && ((this.getCells[8].id === ('cell-9')) && this.getCells[8].classList.contains('black-piece')) && 
            ((this.getCells[15].id === ('cell-16')) && this.getCells[15].classList.contains('black-piece')) && ((this.getCells[22].id === ('cell-23')) && this.getCells[22].classList.contains('black-piece')) || 
            ((this.getCells[8].id === ('cell-9')) && this.getCells[8].classList.contains('black-piece')) && ((this.getCells[15].id === ('cell-16')) && this.getCells[15].classList.contains('black-piece')) && 
            ((this.getCells[22].id === ('cell-23')) && this.getCells[22].classList.contains('black-piece')) && ((this.getCells[29].id === ('cell-30')) && this.getCells[29].classList.contains('black-piece')) || 
            ((this.getCells[15].id === ('cell-16')) && this.getCells[15].classList.contains('black-piece')) && ((this.getCells[22].id === ('cell-23')) && this.getCells[22].classList.contains('black-piece')) && 
            ((this.getCells[29].id === ('cell-30')) && this.getCells[29].classList.contains('black-piece')) && ((this.getCells[36].id === ('cell-37')) && this.getCells[36].classList.contains('black-piece')) || 
            ((this.getCells[2].id === ('cell-3')) && this.getCells[2].classList.contains('black-piece')) && ((this.getCells[9].id === ('cell-10')) && this.getCells[9].classList.contains('black-piece')) && 
            ((this.getCells[16].id === ('cell-17')) && this.getCells[16].classList.contains('black-piece')) && ((this.getCells[23].id === ('cell-24')) && this.getCells[23].classList.contains('black-piece')) || 
            ((this.getCells[9].id === ('cell-10')) && this.getCells[9].classList.contains('black-piece')) && ((this.getCells[16].id === ('cell-17')) && this.getCells[16].classList.contains('black-piece')) && 
            ((this.getCells[23].id === ('cell-24')) && this.getCells[23].classList.contains('black-piece')) && ((this.getCells[30].id === ('cell-31')) && this.getCells[30].classList.contains('black-piece')) || 
            ((this.getCells[16].id === ('cell-17')) && this.getCells[16].classList.contains('black-piece')) && ((this.getCells[23].id === ('cell-24')) && this.getCells[23].classList.contains('black-piece')) && 
            ((this.getCells[30].id === ('cell-31')) && this.getCells[30].classList.contains('black-piece')) && ((this.getCells[37].id === ('cell-38')) && this.getCells[37].classList.contains('black-piece')) || 
            ((this.getCells[3].id === ('cell-4')) && this.getCells[3].classList.contains('black-piece')) && ((this.getCells[10].id === ('cell-11')) && this.getCells[10].classList.contains('black-piece')) && 
            ((this.getCells[17].id === ('cell-18')) && this.getCells[17].classList.contains('black-piece')) && ((this.getCells[24].id === ('cell-25')) && this.getCells[24].classList.contains('black-piece')) || 
            ((this.getCells[10].id === ('cell-11')) && this.getCells[10].classList.contains('black-piece')) && ((this.getCells[17].id === ('cell-18')) && this.getCells[17].classList.contains('black-piece')) && 
            ((this.getCells[24].id === ('cell-25')) && this.getCells[24].classList.contains('black-piece')) && ((this.getCells[31].id === ('cell-32')) && this.getCells[31].classList.contains('black-piece')) || 
            ((this.getCells[17].id === ('cell-18')) && this.getCells[17].classList.contains('black-piece')) && ((this.getCells[24].id === ('cell-25')) && this.getCells[24].classList.contains('black-piece')) && 
            ((this.getCells[31].id === ('cell-32')) && this.getCells[31].classList.contains('black-piece')) && ((this.getCells[38].id === ('cell-39')) && this.getCells[38].classList.contains('black-piece')) || 
            ((this.getCells[4].id === ('cell-5')) && this.getCells[4].classList.contains('black-piece')) && ((this.getCells[11].id === ('cell-12')) && this.getCells[11].classList.contains('black-piece')) && 
            ((this.getCells[18].id === ('cell-19')) && this.getCells[18].classList.contains('black-piece')) && ((this.getCells[25].id === ('cell-26')) && this.getCells[25].classList.contains('black-piece')) || 
            ((this.getCells[11].id === ('cell-12')) && this.getCells[11].classList.contains('black-piece')) && ((this.getCells[18].id === ('cell-19')) && this.getCells[18].classList.contains('black-piece')) && 
            ((this.getCells[25].id === ('cell-26')) && this.getCells[25].classList.contains('black-piece')) && ((this.getCells[32].id === ('cell-33')) && this.getCells[32].classList.contains('black-piece')) || 
            ((this.getCells[18].id === ('cell-19')) && this.getCells[18].classList.contains('black-piece')) && ((this.getCells[25].id === ('cell-26')) && this.getCells[25].classList.contains('black-piece')) && 
            ((this.getCells[32].id === ('cell-33')) && this.getCells[32].classList.contains('black-piece')) && ((this.getCells[39].id === ('cell-40')) && this.getCells[39].classList.contains('black-piece')) || 
            ((this.getCells[5].id === ('cell-6')) && this.getCells[5].classList.contains('black-piece')) && ((this.getCells[12].id === ('cell-13')) && this.getCells[12].classList.contains('black-piece')) && 
            ((this.getCells[19].id === ('cell-20')) && this.getCells[19].classList.contains('black-piece')) && ((this.getCells[26].id === ('cell-27')) && this.getCells[26].classList.contains('black-piece')) || 
            ((this.getCells[12].id === ('cell-13')) && this.getCells[12].classList.contains('black-piece')) && ((this.getCells[19].id === ('cell-20')) && this.getCells[19].classList.contains('black-piece')) && 
            ((this.getCells[26].id === ('cell-27')) && this.getCells[26].classList.contains('black-piece')) && ((this.getCells[33].id === ('cell-34')) && this.getCells[33].classList.contains('black-piece')) || 
            ((this.getCells[19].id === ('cell-20')) && this.getCells[19].classList.contains('black-piece')) && ((this.getCells[26].id === ('cell-27')) && this.getCells[26].classList.contains('black-piece')) && 
            ((this.getCells[33].id === ('cell-34')) && this.getCells[33].classList.contains('black-piece')) && ((this.getCells[40].id === ('cell-41')) && this.getCells[40].classList.contains('black-piece')) || 
            ((this.getCells[6].id === ('cell-7')) && this.getCells[6].classList.contains('black-piece')) && ((this.getCells[13].id === ('cell-14')) && this.getCells[13].classList.contains('black-piece')) && 
            ((this.getCells[20].id === ('cell-21')) && this.getCells[20].classList.contains('black-piece')) && ((this.getCells[27].id === ('cell-28')) && this.getCells[27].classList.contains('black-piece')) || 
            ((this.getCells[13].id === ('cell-14')) && this.getCells[13].classList.contains('black-piece')) && ((this.getCells[20].id === ('cell-21')) && this.getCells[20].classList.contains('black-piece')) && 
            ((this.getCells[27].id === ('cell-28')) && this.getCells[27].classList.contains('black-piece')) && ((this.getCells[34].id === ('cell-35')) && this.getCells[34].classList.contains('black-piece')) || 
            ((this.getCells[20].id === ('cell-21')) && this.getCells[20].classList.contains('black-piece')) && ((this.getCells[27].id === ('cell-28')) && this.getCells[27].classList.contains('black-piece')) && 
            ((this.getCells[34].id === ('cell-35')) && this.getCells[34].classList.contains('black-piece')) && ((this.getCells[41].id === ('cell-42')) && this.getCells[41].classList.contains('black-piece')) || 
            ((this.getCells[14].id === ('cell-15')) && this.getCells[14].classList.contains('black-piece')) && ((this.getCells[22].id === ('cell-23')) && this.getCells[22].classList.contains('black-piece')) && 
            ((this.getCells[30].id === ('cell-31')) && this.getCells[30].classList.contains('black-piece')) && ((this.getCells[38].id === ('cell-39')) && this.getCells[38].classList.contains('black-piece')) || 
            ((this.getCells[3].id === ('cell-4')) && this.getCells[3].classList.contains('black-piece')) && ((this.getCells[11].id === ('cell-12')) && this.getCells[11].classList.contains('black-piece')) && 
            ((this.getCells[19].id === ('cell-20')) && this.getCells[19].classList.contains('black-piece')) && ((this.getCells[27].id === ('cell-28')) && this.getCells[27].classList.contains('black-piece')) || 
            ((this.getCells[7].id === ('cell-8')) && this.getCells[7].classList.contains('black-piece')) && ((this.getCells[15].id === ('cell-16')) && this.getCells[15].classList.contains('black-piece')) && 
            ((this.getCells[23].id === ('cell-24')) && this.getCells[23].classList.contains('black-piece')) && ((this.getCells[31].id === ('cell-32')) && this.getCells[31].classList.contains('black-piece')) || 
            ((this.getCells[15].id === ('cell-16')) && this.getCells[15].classList.contains('black-piece')) && ((this.getCells[23].id === ('cell-24')) && this.getCells[23].classList.contains('black-piece')) && 
            ((this.getCells[31].id === ('cell-32')) && this.getCells[31].classList.contains('black-piece')) && ((this.getCells[39].id === ('cell-40')) && this.getCells[39].classList.contains('black-piece')) || 
            ((this.getCells[2].id === ('cell-3')) && this.getCells[2].classList.contains('black-piece')) && ((this.getCells[10].id === ('cell-11')) && this.getCells[10].classList.contains('black-piece')) && 
            ((this.getCells[18].id === ('cell-19')) && this.getCells[18].classList.contains('black-piece')) && ((this.getCells[26].id === ('cell-27')) && this.getCells[26].classList.contains('black-piece')) || 
            ((this.getCells[10].id === ('cell-11')) && this.getCells[10].classList.contains('black-piece')) && ((this.getCells[18].id === ('cell-19')) && this.getCells[18].classList.contains('black-piece')) && 
            ((this.getCells[26].id === ('cell-27')) && this.getCells[26].classList.contains('black-piece')) && ((this.getCells[34].id === ('cell-35')) && this.getCells[34].classList.contains('black-piece')) || 
            ((this.getCells[0].id === ('cell-1')) && this.getCells[0].classList.contains('black-piece')) && ((this.getCells[8].id === ('cell-9')) && this.getCells[8].classList.contains('black-piece')) && 
            ((this.getCells[16].id === ('cell-17')) && this.getCells[16].classList.contains('black-piece')) && ((this.getCells[24].id === ('cell-25')) && this.getCells[24].classList.contains('black-piece')) || 
            ((this.getCells[8].id === ('cell-9')) && this.getCells[8].classList.contains('black-piece')) && ((this.getCells[16].id === ('cell-17')) && this.getCells[16].classList.contains('black-piece')) && 
            ((this.getCells[24].id === ('cell-25')) && this.getCells[24].classList.contains('black-piece')) && ((this.getCells[32].id === ('cell-33')) && this.getCells[32].classList.contains('black-piece')) || 
            ((this.getCells[16].id === ('cell-17')) && this.getCells[16].classList.contains('black-piece')) && ((this.getCells[24].id === ('cell-25')) && this.getCells[24].classList.contains('black-piece')) && 
            ((this.getCells[32].id === ('cell-33')) && this.getCells[32].classList.contains('black-piece')) && ((this.getCells[40].id === ('cell-41')) && this.getCells[40].classList.contains('black-piece')) || 
            ((this.getCells[1].id === ('cell-2')) && this.getCells[1].classList.contains('black-piece')) && ((this.getCells[9].id === ('cell-10')) && this.getCells[9].classList.contains('black-piece')) && 
            ((this.getCells[17].id === ('cell-18')) && this.getCells[17].classList.contains('black-piece')) && ((this.getCells[25].id === ('cell-26')) && this.getCells[25].classList.contains('black-piece')) || 
            ((this.getCells[9].id === ('cell-10')) && this.getCells[9].classList.contains('black-piece')) && ((this.getCells[17].id === ('cell-18')) && this.getCells[17].classList.contains('black-piece')) && 
            ((this.getCells[25].id === ('cell-26')) && this.getCells[25].classList.contains('black-piece')) && ((this.getCells[33].id === ('cell-34')) && this.getCells[33].classList.contains('black-piece')) || 
            ((this.getCells[17].id === ('cell-18')) && this.getCells[17].classList.contains('black-piece')) && ((this.getCells[25].id === ('cell-26')) && this.getCells[25].classList.contains('black-piece')) && 
            ((this.getCells[33].id === ('cell-34')) && this.getCells[33].classList.contains('black-piece')) && ((this.getCells[21].id === ('cell-22')) && this.getCells[21].classList.contains('black-piece')) || 
            ((this.getCells[21].id === ('cell-22')) && this.getCells[21].classList.contains('black-piece')) && ((this.getCells[15].id === ('cell-16')) && this.getCells[15].classList.contains('black-piece')) && 
            ((this.getCells[9].id === ('cell-10')) && this.getCells[9].classList.contains('black-piece')) && ((this.getCells[3].id === ('cell-4')) && this.getCells[3].classList.contains('black-piece')) || 
            ((this.getCells[28].id === ('cell-29')) && this.getCells[28].classList.contains('black-piece')) && ((this.getCells[22].id === ('cell-23')) && this.getCells[22].classList.contains('black-piece')) && 
            ((this.getCells[16].id === ('cell-17')) && this.getCells[16].classList.contains('black-piece')) && ((this.getCells[10].id === ('cell-11')) && this.getCells[10].classList.contains('black-piece')) || 
            ((this.getCells[22].id === ('cell-23')) && this.getCells[22].classList.contains('black-piece')) && ((this.getCells[16].id === ('cell-17')) && this.getCells[16].classList.contains('black-piece')) && 
            ((this.getCells[10].id === ('cell-11')) && this.getCells[10].classList.contains('black-piece')) && ((this.getCells[4].id === ('cell-5')) && this.getCells[4].classList.contains('black-piece')) || 
            ((this.getCells[35].id === ('cell-36')) && this.getCells[35].classList.contains('black-piece')) && ((this.getCells[29].id === ('cell-30')) && this.getCells[29].classList.contains('black-piece')) && 
            ((this.getCells[23].id === ('cell-24')) && this.getCells[23].classList.contains('black-piece')) && ((this.getCells[17].id === ('cell-18')) && this.getCells[17].classList.contains('black-piece')) || 
            ((this.getCells[29].id === ('cell-30')) && this.getCells[29].classList.contains('black-piece')) && ((this.getCells[23].id === ('cell-24')) && this.getCells[23].classList.contains('black-piece')) && 
            ((this.getCells[17].id === ('cell-18')) && this.getCells[17].classList.contains('black-piece')) && ((this.getCells[11].id === ('cell-12')) && this.getCells[11].classList.contains('black-piece')) || 
            ((this.getCells[23].id === ('cell-24')) && this.getCells[23].classList.contains('black-piece')) && ((this.getCells[17].id === ('cell-18')) && this.getCells[17].classList.contains('black-piece')) && 
            ((this.getCells[11].id === ('cell-12')) && this.getCells[11].classList.contains('black-piece')) && ((this.getCells[5].id === ('cell-6')) && this.getCells[5].classList.contains('black-piece')) || 
            ((this.getCells[36].id === ('cell-37')) && this.getCells[36].classList.contains('black-piece')) && ((this.getCells[30].id === ('cell-31')) && this.getCells[30].classList.contains('black-piece')) && 
            ((this.getCells[24].id === ('cell-25')) && this.getCells[24].classList.contains('black-piece')) && ((this.getCells[18].id === ('cell-19')) && this.getCells[18].classList.contains('black-piece')) || 
            ((this.getCells[30].id === ('cell-31')) && this.getCells[30].classList.contains('black-piece')) && ((this.getCells[24].id === ('cell-25')) && this.getCells[24].classList.contains('black-piece')) && 
            ((this.getCells[18].id === ('cell-19')) && this.getCells[18].classList.contains('black-piece')) && ((this.getCells[12].id === ('cell-13')) && this.getCells[12].classList.contains('black-piece')) || 
            ((this.getCells[24].id === ('cell-25')) && this.getCells[24].classList.contains('black-piece')) && ((this.getCells[18].id === ('cell-19')) && this.getCells[18].classList.contains('black-piece')) && 
            ((this.getCells[12].id === ('cell-13')) && this.getCells[12].classList.contains('black-piece')) && ((this.getCells[16].id === ('cell-17')) && this.getCells[16].classList.contains('black-piece')) || 
            ((this.getCells[37].id === ('cell-38')) && this.getCells[37].classList.contains('black-piece')) && ((this.getCells[31].id === ('cell-32')) && this.getCells[31].classList.contains('black-piece')) && 
            ((this.getCells[25].id === ('cell-26')) && this.getCells[25].classList.contains('black-piece')) && ((this.getCells[19].id === ('cell-20')) && this.getCells[19].classList.contains('black-piece')) || 
            ((this.getCells[31].id === ('cell-32')) && this.getCells[31].classList.contains('black-piece')) && ((this.getCells[25].id === ('cell-26')) && this.getCells[25].classList.contains('black-piece')) && 
            ((this.getCells[19].id === ('cell-20')) && this.getCells[19].classList.contains('black-piece')) && ((this.getCells[13].id === ('cell-14')) && this.getCells[13].classList.contains('black-piece')) || 
            ((this.getCells[38].id === ('cell-39')) && this.getCells[38].classList.contains('black-piece')) && ((this.getCells[32].id === ('cell-33')) && this.getCells[32].classList.contains('black-piece')) && 
            ((this.getCells[26].id === ('cell-27')) && this.getCells[26].classList.contains('black-piece')) && ((this.getCells[20].id === ('cell-21')) && this.getCells[20].classList.contains('black-piece'))){
            this.blackWins();
            this.resetGame();
        }
    }
}

// Initializing the implementation.
let connectFour = new ConnectFour();