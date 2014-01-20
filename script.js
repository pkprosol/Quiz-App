$(document).ready(function() {
	
	var questions = [
		{
			q: "What color is the sky?",
			choices: ["Blue", "Red", "Green"],
			correct: 0
		},
		{
			q: "What is the best NYC food?",
			choices: ["Borscht", "Oranges", "Pizza"],
			correct: 2
		},
		{	
			q: "What is the Capital of Alaska?",
			choices: ["Juneau", "Anchorage"],
			correct: 0
		}
	];

	var score 		= 0;
	var count 		= 0;

	$question 		= $('#question');
	$answers 		= $('#answers');
	$submit 		= $('#submit');
	$outcomes		= $('#outcomes');
	$next			= $('#next');

	$next.hide();

	listQuestion();

	function listQuestion() {
		if (count < questions.length) {
			$next.hide();
			$submit.show();
			$question.append('<h2>' + questions[count].q + '</h2>');
			for(var i =0; i < questions[count].choices.length; i++) {
				console.log(questions[count].choices[i]);
				$answers.append('<label><input type="radio" name="choice" value="'+ i +'"> '+ questions[count].choices[i] + '</label><br>');
				console.log($('input[name="choice"]').val());
			}
		($question, $answers).show();
		} else {
			$next.hide();
			$('form').hide();
			$outcomes.append("Game over! Your score is " + score + " out of " + questions.length);
			
		}
	}
	
     
	$submit.click(function(){
		$outcomes.html("");
		console.log("Clicked");
  		var answer = parseInt($('input[name="choice"]:checked').val(),10);
		console.log(answer);
		if (isNaN(answer)) {
			$outcomes.append('<p>You must pick one.</p>');
			return false;
		} else if (answer === questions[count].correct) {
			$outcomes.append('<p>You are correct!</p>');
			score++;
		} else {
			$outcomes.append('<p>That is incorrect!</p>');
		}
		$submit.hide();
		$next.show();
		return false;
	});

	$next.click(function() {
		$question.html("");
		$answers.html("");
		$outcomes.html("");
		count = ++count;
		listQuestion();
	});
 
});
