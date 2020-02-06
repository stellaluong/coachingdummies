var questionDiv = document.getElementById('content');

function questionShow() {

    const disabledOrNot = moodRating === 0 ? 'disabled' : '';
    questionDiv.innerHTML = ` <br>
		<div class="col-md-3"></div>
		<div class="col-md-6 well">
		<div>
			<h4>${model.ratingMap.questionNumber[questionNextNumber]}:</h4>
			<div>${model.ratingMap.questions[questionStart]}</div>
			<br>
			<fieldset>${ [1,2,3,4,5].map(n=>
				`<input onclick="clickRating(${n})" style="color:${moodRating == n ? 'orange' : 'black'};font-size:40px;cursor:pointer;" class="far fa-${model.ratingMap.ratingOptions[n]}"/>`
				).join('')}
			</fieldset>
		</div>
		<br />
		<div class="form-group">
			<h6>Additional comment:</h6>
			<textarea id="review" class="form-control" style="resize:none; width: 300px; height:100px;"></textarea>
		</div>
		<button type="submit"  id="nextButton" class="btn btn-success" onclick="next(this)" ${disabledOrNot}>${model.ratingMap.questionButton[0]}</button> <br />
		`;
}


questionShow();

function clickRating(value) {
	moodRating = value === moodRating ? 0 : value;
	questionShow();
}

function next(submit) {
var count = 0;


}