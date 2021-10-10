window.onload = () => {
    let n = document.querySelectorAll("div#board div");
    let isX = true;
    let button = document.querySelector(".btn");
    let status = document.getElementById("status");
    let statusIntialText = status.textContent;
    let game = Array(9).fill(0);
    n.forEach((i, r) => {
      i.classList.add("square");
  
      //ex2
      i.addEventListener("click", () => {
        if (game[r] === 0) {
          if (isX === true) {
            i.classList.add("X");
            i.textContent = "X";
            isX = false;
            game[r] = "X";
          } else {
            i.classList.add("O");
            i.textContent = "O";
            isX = true;
  
            game[r] = "O";
          }
        }
  
        //ex3
        i.addEventListener("mouover", () => {
          i.classList.add("hover");
        });

        
  
        i.addEventListener("mouleave", () => {
          i.classList.remover("hover");
        });
  
        let top = [game[0], game[1], game[2]];
        let mid = [game[3], game[4], game[5]];
        let low = [game[6], game[7], game[8]];
  
        let topVert = [game[0], game[3], game[6]];
        let midVert = [game[1], game[4], game[7]];
        let lowVert = [game[2], game[5], game[8]];
  
        let diagA = [game[0], game[4], game[8]];
        let diagB = [game[2], game[4], game[6]];
  
        //ex4
        let result = "";
        let oVert =
          topVert.every((x) => x === "O") ||
          midVert.every((x) => x === "O") ||
          lowVert.every((x) => x === "O");
        let xVert =
          topVert.every((x) => x === "X") ||
          midVert.every((x) => x === "X") ||
          lowVert.every((x) => x === "X");
  
        let xHor =
          top.every((x) => x === "X") ||
          mid.every((x) => x === "X") ||
          low.every((x) => x === "X");
        let oHor =
          top.every((x) => x === "O") ||
          mid.every((x) => x === "O") ||
          low.every((x) => x === "O");
  
        let xDiag = diagA.every(
          (x) => x === "X" || diagB.every((x) => x === "X")
        );
        let oDiag = diagA.every(
          (x) => x === "O" || diagB.every((x) => x === "O")
        );
  
        if (xVert) {
          result = "Congratulations! X is the Winner!";
        } else if (oVert) {
          result = "Congratulations! O is the Winner!";
        } else if (xHor) {
          result = "Congratulations! X is the Winner!";
        } else if (oHor) {
          result = "Congratulations! O is the Winner!";
        } else if (xDiag) {
          result = "Congratulations! X is the Winner!";
        } else if (oDiag) {
          result = "Congratulations! O is the Winner!";
        }
  
        if (result != "") {
          status.textContent = result;
        }
      });
    });
    
    button.addEventListener("click", () => {
      a.forEach((e) => {
        e.textContent = "";
        g = Array(9).fill(0);
        status.textContent = statusIntialText;
        document.querySelectorAll(".btn").forEach(button=>button.textContent="")
      });
    });

    /*restartgame.addEventListener("click", ()=> {
        status.textContent=statusIntialText;
        document.querySelectorAll(".btn").forEach(button=>button.textContent="");
    });*/
  };