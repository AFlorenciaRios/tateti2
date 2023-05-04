const cells = document.querySelectorAll(".cells");
const iniciar = document.getElementById("iniciar")
const reiniciar = document.getElementById("reiniciar")
const jugador = document.getElementById("jugador")
let cj1=0
let cj2=0
let tateti = "x"
let player1=prompt("Ingrese nombre del Jugador 1:", "");
let player2=prompt("Ingrese nombre del Jugador 2:", "");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
 let currentPlayer = player1;
let gameEnd = true;
jugador.innerHTML=`<h1> ${player1}: ${cj1}  </h1> <h1> ${player2}: ${cj2}  </h1>`

iniciar.addEventListener("click", () =>{gameEnd=false})
reiniciar.addEventListener("click", () =>{
  cells.forEach(cell=>{
    cell.textContent=""
  })
  gameEnd=false})
cells.forEach(cell => {
  cell.addEventListener("click", () => {
    if (gameEnd) {
      return;
    }
    if (cell.textContent === "") {
      if (currentPlayer == player1){
        cell.textContent = tateti;
       }else { cell.textContent = tateti}
     
      if (checkWin()) {
        if (currentPlayer==player1){
          cj1++;
          jugador.innerHTML=`<h1> ${player1}: ${cj1}  </h1> <h1> ${player2}: ${cj2}  </h1>`
        }  else { 
          cj2++;
          jugador.innerHTML=`<h1> ${player1}: ${cj1}  </h1> <h1> ${player2}: ${cj2}  </h1>`
        }
        gameEnd = true;
        alert(`${currentPlayer} es el ganador!`);
      } else if (checkTie()) {
        gameEnd = true;
        alert("Excelente juego, es un empate!");
      } else {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
        tateti = tateti === "x" ? "0" : "x";
        
      }
    }
  });
});

function checkWin() {
//en base a nuestra constante winConditions verificamos si la posición del tablero muestra alguna victoria.
  return winConditions.some(condition => {
    return condition.every(index => {
      return cells[index].textContent === tateti;
      
    });
  });
}

function checkTie() {
//en base a nuestras celdas del tablero verificamos que todas las celdas estén ocupadas por alguna ficha.
  return Array.from(cells).every(cell => {
    return cell.textContent !== "";
  });

}
