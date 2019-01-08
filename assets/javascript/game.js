
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


var total_score = 0;
var win = 0;
var loss = 0;
// var diamond_rand = diamond.number();
// var pear_rand = pear.number();
// var gem_rand = gem.number();
// var crystal_rand = crystal.number();
var targetNumber = Math.floor(Math.random() * 110) + 19;

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

$(document).ready(function(){

    gameStart();
    
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
        runGame();

        // $("#diamond").on("click", function(){
            
        //         hasWon();
        //         hasLost();
        //         if(total_score < targetNumber){
        //             total_score = total_score + diamond_rand;
        //             $(".tallied_total").text(total_score);
        //             hasWon();
        //             hasLost();
        //         }
               
                
        // });


        // $("#pear").on("click", function(){
            
        //     hasWon();
        //     hasLost();
        //     if(total_score < targetNumber){
        //         total_score = total_score + pear_rand;
        //         $(".tallied_total").text(total_score);
        //         hasWon();
        //         hasLost();
        //     }
           
        // });


        // $("#gem").on("click", function(){
            
        //     hasWon();
        //     hasLost();
        //     if(total_score < targetNumber){
        //         total_score = total_score + gem_rand;
        //         $(".tallied_total").text(total_score);
        //         hasWon();
        //         hasLost();
        //     }
            
        // });


        // $("#crystal").on("click", function(){
            
        //     hasWon();
        //     hasLost();
        //     if(total_score < targetNumber){
        //         total_score = total_score + crystal_rand;
        //         $(".tallied_total").text(total_score);
        //         hasWon();
        //         hasLost();
            
        //     }
            
        // });
    
   
        $(".reset_game").on("click", function(){
            total_score = 0;
            // diamond_rand = diamond.number();
            // pear_rand = pear.number();
            // gem_rand = gem.number();
            // crystal_rand = crystal.number();
            targetNumber = Math.floor(Math.random() * 110)+ 19;
            $(".play").remove();

            gameStart();
            runGame();
        });
});