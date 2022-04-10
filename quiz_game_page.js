p1=localStorage.getItem("playername1");
console.log(p1);
p2=localStorage.getItem("playername2");
console.log(p2);
question_turn="player1";
answer_turn="player2";
player1_score=0;
player2_score=0;

document.getElementById("player1").innerHTML=p1;
document.getElementById("player2").innerHTML=p2;

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question turn: "+player1_name;
document.getElementById("player_answer").innerHTML= "Answer turn: "+player2_name;


function send(){
    number_1=document.getElementById("number_1").value;
    number_2=document.getElementById("number_2").value; 
    actual_answer= parseInt(number_1)*parseInt(number_2);
    question_number="<h4>"+ number_1 + "X"+number_2+ "</h4>";
    input_box="<br> Answer: <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn-btn-info'onclick='check()'>Check</button>";
    row= question_number+input_box+ check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number_1").value="";
    document.getElementById("number_2").value="";
}



 function check(){
     var answerget_number= document.getElementById("input_check_box").value;
    var answer=parseInt(answerget_number);
     if (actual_answer==answer) {
         if (answer_turn=="player1") {
             player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=player1_score;   
         }
         if (answer_turn=="player2") {
            player2_score=player2_score+1;
       document.getElementById("player2_score").innerHTML=player2_score;   
        }
     }

     if (answer_turn=="player1") {
         answer_turn="player2";
         document.getElementById("player_answer").innerHTML="Answer Turn :"+p2;
     }
     else{
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="Answer Turn :"+p1;
     }

     if (question_turn=="player1") {
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question Turn :"+p2;
    }
    else{
       question_turn="player1";
       document.getElementById("player_question").innerHTML="Question Turn :"+p1;
    }
    document.getElementById("output").innerHTML=" ";
    document.getElementById("word").innerHTML=" ";
 }
 