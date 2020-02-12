var questionDiv = document.getElementById('content');
var commentInput = document.getElementById('commentBox');

function showQuestion() {
	const disabledOrNot = model.question.moodRating === 0 ? 'disabled' : '';
	const currentAnswers = getCurrentAnswers();
	const currentQuestionIndex = !currentAnswers ? 0 : currentAnswers.length;
	const currentQuestion = model.question.questions[currentQuestionIndex];
	if (model.screen.current = 'questionScreen') {
	questionDiv.innerHTML = ` 
	<div class="w3-main">
		<br>
		<div class="col-md-3"></div>
		<div class="col-md-6 well">
		<div>
			<h4>${currentAnswers.length + 1}/${model.question.questions.length}</h4>
			<h4>${currentQuestion}:</h4>
			<br>
			${ [1,2,3,4,5].map(n=>
				`<input id="clickedIcon" onclick="clickRating(${n})" 
						style="color:${model.question.moodRating == n ? 'orange' : 'black'};
							   font-size:40px;
							   cursor:pointer;" 
						class="far fa-${model.question.ratingOptions[n]}"/>`
				).join('')}
				<br><br>
				<button type="submit" id="nextButton" class="w3-button w3-border w3-teal w3-round-large" onclick="next(this)" 
				${disabledOrNot}>Next</button>
				<br>
				<br />
				<div class="form-group">
				<h6>Additional comment:</h6>
				<textarea id="comment" class="form-control" 
				style="resize:none; width: 300px; height:100px;"></textarea>
				</div>
				`;
			}
		console.log(model.screen.current)
		}
	
