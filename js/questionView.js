var questionDiv = document.getElementById('content');

function showQuestion() {
    const currentAnswers = getCurrentAnswers();
    const currentQuestionIndex = !currentAnswers ? 0 : currentAnswers.length;
    const currentQuestion = model.question.questions[currentQuestionIndex];

    const disabledOrNot = model.question.moodRating === 0 ? 'disabled' : '';

    questionDiv.innerHTML = ` <br>
		<div class="col-md-3"></div>
		<div class="col-md-6 well">
		<div>
			<h4>${currentAnswers.length + 1}/${model.question.questions.length}</h4>
			<h4>${currentQuestion}:</h4>
			<br>
			<fieldset>${ [1,2,3,4,5].map(n=>
				`<input onclick="clickRating(${n})" 
						style="color:${model.question.moodRating == n ? 'orange' : 'black'};
							   font-size:40px;
							   cursor:pointer;" 
						class="far fa-${model.question.ratingOptions[n]}"/>`
				).join('')}
			</fieldset>
		</div>
		<br />
		<div class="form-group">
			<h6>Additional comment:</h6>
			<textarea id="review" class="form-control" 
			style="resize:none; width: 300px; height:100px;"></textarea>
		</div>
		<button type="submit"  id="nextButton" class="btn btn-success" onclick="next(this)" 
		${disabledOrNot}>Next</button> <br />
		`;
}