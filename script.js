$(document).ready(function() {
	var magic8Ball = {};
magic8Ball.answers = ["not today", "maybe if you really try", "sure thing!", "that's not the question you should be asking", "why would i know that?"];
magic8Ball.prediction = function() {
     var randomNumber = Math.random();
     var randomNumberArray = randomNumber * this.answers.length;
 	var randomIndex = Math.floor(randomNumberArray);
	var answer = this.answers[randomIndex];
	$("#answer").text(answer);
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
     //console.log(question);//
     //console.log(answer);//
};

$("#answer").hide();

var onClick = function() {

    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
	setTimeout(
       function() {
           var question = prompt("Ask a yes or no question");
		   $("#8ball").effect( "shake" );
		   setTimeout( function () {
           magic8Ball.prediction(question);},
					  500);
       }, 500);
	setTimeout(
		function() {
			$("#answer").fadeIn(4000);
		}, 500);
};

$("#questionButton").click( onClick );

// magic8Ball.prediction("Will I wake up on time?"); //
});
