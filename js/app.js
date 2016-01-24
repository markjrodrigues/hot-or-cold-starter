
$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

		// Reset the answer if requested
		$(".new").click(function(){
			resetAnswer();
  	});

		// William: Is this the right way to add the submit?
		$(document).submit(function(event){
			// William, do prevent default in this submit function?
			event.preventDefault();
			processGuess($("#userGuess").val());
  	});

		// Set the number being guessed
		// William, does this number need to be made global scope?
		var answer;
		function resetAnswer(){
			answer = Math.round(Math.random() * 100);
			console.log("Answer reset to " + answer);
		}

		function processGuess(guess)
		{
			console.log("Guess is " + guess);
			// William, can I do this or does this define 'guess' as being in the
			// global scope?
			guess = parseInt(guess);
			var diff = Math.abs(guess - answer);

			if (diff === 0)
			{
				$("#feedback").text("YES");
			}
			else if (diff <= 5)
			{
				$("#feedback").text("very hot");
			}
			else if (diff <= 10)
			{
				$("#feedback").text("hot");
			}
			else if (diff <= 20)
			{
				$("#feedback").text("warm");
			}
			else {
				$("#feedback").text("cold");
			}
		}

		// Last thing to do is to start the ball rolling
		resetAnswer();
});
