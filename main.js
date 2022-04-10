function add_user(){
    window.location="quiz_game_page.html";
    player1_name=document.getElementById("player1_name").value;
    player2_name=document.getElementById("player2_name").value;
    localStorage.setItem("playername1",player1_name);
    localStorage.setItem("playername2",player2_name);
    }
     
