var questionDiv = document.getElementById('content');
var commentInput = document.getElementById('commentBox');

function showQuestion() {
	console.log(model.session.currentUserID)
	const currentAnswers = getCurrentAnswers();
	const currentQuestionIndex = !currentAnswers ? 0 : currentAnswers.length;
	const currentQuestion = model.question.questions[currentQuestionIndex];
	const lastQuestion = model.question.questions.length <= currentQuestionIndex + 1;
	const disabledOrNot = model.question.moodRating === 0 ? 'disabled' : lastQuestion ? 'disabled' :  '';
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
				<div class="form-group">
				<h6>Additional comment:</h6>
				<textarea id="comment" class="form-control" 
				style="resize:none; width: 300px; height:100px;"></textarea>
				</div>
				<button type="submit" id="nextButton" class="w3-button w3-border w3-teal w3-round-large" onclick="next(this)" style="display:${lastQuestion ? "none" : "block"}"
				${disabledOrNot}>Next</button>
				<button type="submit" class="w3-button w3-border w3-teal w3-round-large" onclick="showSubmit()" style="display:${lastQuestion ? "block" : "none"}"> Submit</button>
				`;
			}
		}
			function showSubmit() {
				questionDiv.innerHTML = `
				<div class="w3-main">
				<br>
				<h1> You have submitted your form, Thank You!</h1>
				`; 
				console.log()
			}
			
		
	
