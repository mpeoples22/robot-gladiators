//var PlayerName = 'Clank Mckrank';
var playerName = window.prompt("what is your robot's name?");
var playerHealth=100;
var playerAttack=10;
var playerMoney=10;

//You can also log multiple values at once like this
console.log(playerAttack,playerHealth,playerName);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

//fight function
var fight = function() {
    //starting round alert
    window.alert("Weloome to Robot Gladiators!"); 

// Alert players that they are starting the round
   var promptFight = window.prompt('Would you like to FIGHT to SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
//if the player ch  oses to fight, fight
   If (promptFight === "fight" || promptFight === "FIGHT") {
    //remove enemy's health by subtracting  the amount set in the playerAttac variable 
   enemyHealth = enemyHealth - playerAttack;
   console.log(playerName + " attacked " + enemyName + "." +enemyName +" now has "
    + " health remaining."
    );
    //check enemy's health
    if(enemyHealth <= 0) {
    window.alert(enemyName + " has died!");     
    } else {
         window.alert(enemyName + "still has " +enemyHealth + "health left");
    }
   //remove player's health by subtraction the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
       enemyName + "attacked " + playerName + "." + playerName + "now has" + playerHealth
    );
//check player's health
    if(playerHealth <= 0) {
    window.alert(playerName + " has died!");     
    } else {
    window.alert(playerName + "still has " + playerHealth + "health left");
    }
//if player choses to skip
 } else if (promptFight === "skip" || promptFight === "SKIP"){
    //confirm skip
   var confirmSkip = window.confirm("Are you sure you'd like to quit");

  //if yes(true), leave fight
   if(confirmSkip) {
     window.alert(playerName +"has decided to skip this fight. Goodbye");
    //subtrac money from playerMoney for skipping
     playerMoney = playerMoney -2;
    
   }  
//if no (false), ask question again by running fight() again
   else{ 
     fight();
   }
//if player did not chose 1 or 2 in prompt
 } else {
    window.alert("you need to pick a valid option. Try again!");
 }
};
//run fight funtion to start game
fight();

