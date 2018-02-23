$(function(event){


	

	$("#reset").on("click", function(event){
		$("td").text('');
		$(".playerTurn").text("It is X's turn");
	});

	

	$("td").click(function(event){
	//	$(this).text('X');

		if($("this").text('')){
				$(this).text("X");
				$(".playerTurn").text("It is 0's turn");
			}else if($(this).text('X')) {
				$(this).text("0");
			}
		});

		

	// var X = $("td").text('X');

	// var Y = $("td").text('Y');

	 $("table").click(function(){
        if ($(this).text()==""){
        	console.log("X");
        }

	 })

/*

	$("td").click(function() {
		if ($(this).text()=="" && play) {
			if ((move%2)==1) { 
				$(this).append("X"); } 
				else { $(this).append("O"); }
      
      }
    });

    */
  
	





});