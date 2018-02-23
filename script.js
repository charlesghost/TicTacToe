$(function(event){

    
    //Variables 
	var move = 1;
	var play = true;

    //Put Os and Xs in each boxes 

	$("td").click(function() {
		if ($(this).text()=="" && play) {
			if ((move%2)==1) { 
				$(this).append("X"); 
				$(".playerTurn").text("It is 0's turn");
			} else { 
				$(this).append("O"); 
				$(".playerTurn").text("It is X's turn");
			}
			move++; 
		}

	});

	// Reset Game

	$("#reset").on("click", function(event){
		$("td").text('');
		$(".playerTurn").text("It is X's turn");
	});

  /*
    Trying to figure out where the boxes are to check winning condition "work in progress"

	$("tfoot td:nth-child(1)").on("click", function(event){
		console.log("here");
	})

	*/
});