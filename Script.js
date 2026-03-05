const body = document.getElementsByTagName("body")[0];

document.body.style.backgroundColor = "#ffffffee";
function setColors(color){
    
            setTimeout(
                ()=>{
                         body.style.backgroundColor = color;
                },0);
           
        }
setColors(" ");

function randomColors(){
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);

    let random = `rgb(${red},${green},${blue})`;

    body.style.backgroundColor= random;
}

randomColors();

const preColors = ["#f0c27b", "#6a11cb", "#ff6f61", "#20bf55", "#ecdede"];

function setInitialColor() {
    let randomIndex = Math.floor(Math.random() * preColors.length);
    document.body.style.backgroundColor = preColors[randomIndex];
}

setInitialColor();
