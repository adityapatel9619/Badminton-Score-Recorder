document.getElementById("startgame").addEventListener('click',function(){

    var isValid = true;
    let txtOne = document.getElementById("txtone");
    let txtTwo = document.getElementById("txttwo");
    let txtScore = document.getElementById("txtTarget");

    if(txtOne.value == "" || txtOne.value == null){
        isValid = false;
        document.getElementById("txtone").classList.add("border-danger")
    }else{
        isValid = true;
    }

    if(txtTwo.value == "" || txtTwo.value == null){
        isValid = false;
        document.getElementById("txttwo").classList.add("border-danger")
    }else{
        isValid = true;
    }

    if(txtScore.value == "" || txtScore.value == null){
        isValid = false;
        document.getElementById("txtTarget").classList.add("border-danger")
    }else{
        isValid = true;
    }
     
    if(isValid == false){
        event.preventDefault();
    }else{
        StartGame();
    }
})

function StartGame(){
    let count1 =0,count2 =0;
    
    document.getElementById("dvTeamName").style.display = "none";
    document.getElementById("scoresec").style.display = "block";
    let disptarget = document.getElementById("txtTarget").value;
    document.getElementById("scoreDisplay").innerHTML = "Target is "+disptarget;

    //Name of The Team
    let nteamone = document.getElementById("txtone").value;
    let nteamtwo = document.getElementById("txttwo").value;
    
    document.getElementById("lblteamone").innerHTML = nteamone;
    document.getElementById("lblteamtwo").innerHTML = nteamtwo;

    //Scoreboard for Team 1
    document.getElementById("btnTeamOne").addEventListener('click',function(){
        count1++;
        document.getElementById("lblScoreTone").innerHTML = count1;
        document.getElementById("jsOne").style.display = "block";
    })

     document.getElementById("jsOne").addEventListener('click',function(){
        if(count1 == "0"){
            document.getElementById("jsOne").style.display = "none";
        }
        else{
            count1-=1;
            document.getElementById("lblScoreTone").innerHTML = count1;
            document.getElementById("jsOne").style.display = "block";
        }
     })
    
    //Scoreboard for Team 2
    document.getElementById("btnTeamTwo").addEventListener('click',function(){
        count2++;
        document.getElementById("lblScoreTtwo").innerHTML = count2;
        document.getElementById("jsTwo").style.display = "block";
    })

    document.getElementById("jsTwo").addEventListener('click',function(){
        if(count2 == "0"){
            document.getElementById("jsTwo").style.display = "none";
        }
        else{
            count2-=1;
            document.getElementById("lblScoreTtwo").innerHTML = count2;
            document.getElementById("jsTwo").style.display = "block";
        }
    })

   document.body.addEventListener('click',function(){
       checkscores();
   });
}


function checkscores(){
    //Fetching the score of two teams and target value
    let scoreTeamOne = parseInt(document.getElementById("lblScoreTone").textContent);
    let scoreTeamTwo = parseInt(document.getElementById("lblScoreTtwo").textContent);
    let target = parseInt(document.getElementById("txtTarget").value);
    if(scoreTeamOne === target){
        let tname = document.getElementById("lblteamone").textContent;
        winmsg = tname+" Won"
        console.log(winmsg);
        alert(winmsg);
        document.getElementById("btnTeamOne").disabled = true;
        document.getElementById("btnTeamTwo").disabled = true;
        document.getElementById("dvTeamOne").classList.remove("border-warning");
        document.getElementById("dvTeamOne").classList.add("border-success");
        document.getElementById("dvTeamTwo").classList.add("border-danger");
        document.getElementById("dvTeamOne").classList.add("border-5");
        document.getElementById("dvTeamTwo").classList.add("border-5");
        document.getElementById("jsOne").style.display = "none";
        document.getElementById("jsTwo").style.display = "none";
        setTimeout(function(){
            window.location.reload(1);
        }, 3000);
    }
    else if(scoreTeamTwo === target){
        let tname = document.getElementById("lblteamtwo").textContent;
        winmsg = tname+" Won"
        console.log(winmsg);
        alert(winmsg);
        document.getElementById("btnTeamOne").disabled = true;
        document.getElementById("btnTeamTwo").disabled = true;
        document.getElementById("dvTeamTwo").classList.remove("border-danger");
        document.getElementById("dvTeamTwo").classList.add("border-success");
        document.getElementById("dvTeamOne").classList.add("border-danger");
        document.getElementById("dvTeamTwo").classList.add("border-5");
        document.getElementById("dvTeamOne").classList.add("border-5");
        document.getElementById("jsOne").style.display = "none";
        document.getElementById("jsTwo").style.display = "none";
        setTimeout(function(){
            window.location.reload(1);
        }, 3000);
    }
    else{
        //console.log("None");
    }

    if(scoreTeamOne == scoreTeamTwo && scoreTeamOne&&scoreTeamTwo == target-1){
        //alert("Tie");
        target+=1;
        var temp = target;
        //Setting new tie value to previous target
        document.getElementById("txtTarget").value = temp;
        document.getElementById("scoreDisplay").innerHTML = "Target Increased to: "+temp;
        document.getElementById("scoreDisplay").style.display = "block";
    }
    
}