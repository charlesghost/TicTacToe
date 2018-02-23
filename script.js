$(function(event){


	var move = 1;
	var play = true;


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


	$("#reset").on("click", function(event){
		$("td").text('');
		$(".playerTurn").text("It is X's turn");
	});

  
	
});