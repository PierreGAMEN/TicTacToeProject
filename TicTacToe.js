function spooky(){

    const buttonTC = document.querySelector(".buttonTC");
    
    const link = document.getElementById("myLink");

    if(buttonTC.innerHTML === "NEON") {
        buttonTC.innerHTML = "SPOOKY"
    } else {
        buttonTC.innerHTML = "NEON"
    }

    if (link.getAttribute("href") === "TicTacToe.css") {
    link.setAttribute("href", "spooky.css");
  } else {
    link.setAttribute("href", "TicTacToe.css");
  }
};