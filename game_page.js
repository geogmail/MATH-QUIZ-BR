player1Name=localStorage.getItem("player1Name")
player2Name=localStorage.getItem("player2Name")
player1Score=0
player2Score=0
document.getElementById("player1Name").innerHTML=player1Name+"  :"
document.getElementById("player2Name").innerHTML=player2Name+"  : "
document.getElementById("player1Score").innerHTML=player1Score
document.getElementById("player2Score").innerHTML=player2Score
document.getElementById("playerQuestion").innerHTML="Pergunte!"+player1Name
document.getElementById("playerAnswer").innerHTML="Responda!"+player2Name
function send(){
    number1= document.getElementById("number1").value
    number2= document.getElementById("number2").value
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4 id='numberDisplay'> P. " + number1+"X"+number2 +" </h4>"
    inputBox = "<br>Resposta : <input type='text' id='inputCheckBox'>";
    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
   row=question_number+inputBox+checkButton
   document.getElementById("output").innerHTML=row
   document.getElementById("number1").value=""
   document.getElementById("number2").value=""
   }
   question_turn= "player2"
   answer_turn="player1"
function check (){
  answer= document.getElementById("inputCheckBox").value
  if(answer==actual_answer){
    if(answer_turn=="player1"){
        player1Score=player1Score+1.5
        document.getElementById("player1Score").innerHTML=player1Score
    }else{    player2Score=player2Score+1.5
        document.getElementById("player2Score").innerHTML=player2Score

    }
    if(question_turn=="player1"){
     question_turn="player2" 
      document.getElementById("playerQuestion").innerHTML="Pergunte!"+player2Name
    }else{
      question_turn="player1" 
      document.getElementById("playerQuestion").innerHTML="Pergunte!"+player1Name 
    }
    if(answer_turn=="player1"){
      answer_turn="player2" 
       document.getElementById("playerAnswer").innerHTML="Responda!"+player2Name
     }else{
       answer_turn="player1" 
       document.getElementById("playerAnswer").innerHTML="Responda!"+player1Name 
     }
     document.getElementById("output").innerHTML=""
  }
}
