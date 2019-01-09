

$(document).ready(function(){

    //array of crystal objects
    var crystals = [
    {name: "diamond",
     number: function(){
        return Math.floor(Math.random() * 12 )+ 1;},
     imageUrl: "assets/images/diamond3.png"},


    {name: "pear",
     number: function(){
        return Math.floor(Math.random() * 12) + 1;},
     imageUrl: "assets/images/pear.png"},


    {name: "gem",
     number: function(){
        return Math.floor(Math.random() * 12) + 1},
     imageUrl: "assets/images/gem.png"},

    {name: "crystal",
    number: function(){
        return Math.floor(Math.random() * 12) + 1},
    imageUrl: "assets/images/crystal.png"}

    ];

    //game variables
    var total_score = 0;
    var win = 0;
    var loss = 0;
    var targetNumber = Math.floor(Math.random() * 101) + 19;

    //create the html structure for each crystal object
    function gameStart(){
        for (var i = 0; i< crystals.length; i++){
            var gemImg = $("<img>");
            gemImg.addClass("clickImg play");
            gemImg.attr("src",crystals[i].imageUrl);
            gemImg.attr("id", crystals[i].name);
            gemImg.attr("rand-value", crystals[i].number());
            $(".crystal_wrapper").append(gemImg);

        }
        $("#number").text(targetNumber);
        $(".win").text(win);
        $(".loss").text(loss);
        $(".reset_game").hide();
        $(".tallied_total").text(total_score);

    };

    //check if player has lost
    function hasLost(){
        if (total_score > targetNumber){
            loss++;
            $(".loss").text(loss);
            $(".reset_game").show();
            $(".clickImg").off();
            console.log("you lost");
            return true;
        }
        else{
            return false;
        }
    };
    //check if player has won
    function hasWon(){
        if (total_score === targetNumber){
            win++;
            $(".win").text(win);
            $(".reset_game").show();
            $(".clickImg").off();
            console.log("you won");
            return true;
        }
    };


    
   // main logic for game....
    function runGame(){
         $(".clickImg").on("click", function(){
             var gem_score = parseInt($(this).attr("rand-value"));

                hasWon();
                hasLost();

                if(total_score < targetNumber){
                    total_score = total_score + gem_score;
                    $(".tallied_total").text(total_score);
                    hasWon();
                    hasLost();
                }
           
         });
    
    }; 
    //Start Game Play.....
    gameStart();
    runGame();

    //restart game once lost or won..
    $(".reset_game").on("click", function(){
        total_score = 0;
        
        targetNumber = Math.floor(Math.random() * 110)+ 19;
        $(".play").remove();

        gameStart();
        runGame();
    });
});