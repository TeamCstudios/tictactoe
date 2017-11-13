var turn = 'X' ; 
var win = "N";
var counter = 0;


function proc_clicked(R,C)
{
// check if cell is emty
var cur_cell = document.getElementById("R"+R+"C"+C);
if (cur_cell.innerText != '') return;

// Set the value
cur_cell.innerText= turn;

// Indicate whose turn it is
if (turn == 'X') turn = 'O' ;
else turn = 'X' ;
document.getElementById('instrbox').innertext = "instr";
counter++;
document.getElementById('move box').innerHTML = counter;


val_R1C1 = document.getElementById('R1C1').innerText; 
val_R1C2 = document.getElementById('R1C2').innerText; 
val_R1C3 = document.getElementById('R1C3').innerText; 
val_R2C1 = document.getElementById('R2C1').innerText; 
val_R2C2 = document.getElementById('R2C2').innerText; 
val_R2C3 = document.getElementById('R2C3').innerText; 
val_R3C1 = document.getElementById('R3C1').innerText; 
val_R3C2 = document.getElementById('R3C2').innerText; 
val_R3C3 = document.getElementById('R3C3').innerText;


// x winners
 
 if (val_R1C1 == 'X' && val_R1C1 == val_R1C2 && val_R1C2 == val_R1C3) win = 'Y'; 
 if (val_R2C1 == 'X' && val_R2C1 == val_R2C2 && val_R2C2 == val_R2C3) win = 'Y'; 
 if (val_R3C1 == 'X' && val_R3C1 == val_R3C2 && val_R3C2 == val_R3C3) win = 'Y'; 
 if (val_R1C1 == 'X' && val_R1C1 == val_R2C1 && val_R2C1 == val_R3C1) win = 'Y';  
 if (val_R1C2 == 'X' && val_R1C2 == val_R2C2 && val_R2C2 == val_R3C2) win = 'Y'; 
 if (val_R1C3 == 'X' && val_R1C3 == val_R2C3 && val_R2C3 == val_R3C3) win = 'Y';  
 if (val_R1C1 == 'X' && val_R1C1 == val_R2C2 && val_R2C2 == val_R3C3) win = 'Y';  
 if (val_R3C1 == 'X' && val_R3C1 == val_R2C2 && val_R2C2 == val_R1C3) win = 'Y';
 if (win == "Y")
 {
 alert ("x wins");
 }  
 
 // y winners
 
 if (val_R1C1 == 'O' && val_R2C1 == val_R2C2 && val_R2C2 == val_R2C3) win = 'Y'; 
 if (val_R3C1 == 'O' && val_R3C1 == val_R3C2 && val_R3C2 == val_R3C3) win = 'Y'; 
 if (val_R1C1 == 'O' && val_R1C1 == val_R2C1 && val_R2C1 == val_R3C1) win = 'Y';  
 if (val_R1C2 == 'O' && val_R1C2 == val_R2C2 && val_R2C2 == val_R3C2) win = 'Y'; 
 if (val_R1C3 == 'O' && val_R1C3 == val_R2C3 && val_R2C3 == val_R3C3) win = 'Y';  
 if (val_R1C1 == 'O' && val_R1C1 == val_R2C2 && val_R2C2 == val_R3C3) win = 'Y';  
 if (val_R3C1 == 'O' && val_R3C1 == val_R2C2 && val_R2C2 == val_R1C3) win = 'Y';  
 if (win == "Y")
 {
 alert ("o wins");
 }
 
 
 
 
 


}


function BodyLoaded()
{
document.getElementById('R1C1').addEventListener("click", function() { proc_clicked(1,1) } ) ;
document.getElementById('R1C2').addEventListener("click", function() { proc_clicked(1,2) } ) ;
document.getElementById('R1C3').addEventListener("click", function() { proc_clicked(1,3) } ) ;
document.getElementById('R2C1').addEventListener("click", function() { proc_clicked(2,1) } ) ;
document.getElementById('R2C2').addEventListener("click", function() { proc_clicked(2,2) } ) ;
document.getElementById('R2C3').addEventListener("click", function() { proc_clicked(2,3) } ) ;
document.getElementById('R3C1').addEventListener("click", function() { proc_clicked(3,1) } ) ;
document.getElementById('R3C2').addEventListener("click", function() { proc_clicked(3,2) } ) ;
document.getElementById('R3C3').addEventListener("click", function() { proc_clicked(3,3) } ) ;
}

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  
