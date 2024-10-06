function checkAnswer(){const correctAnswer="4";
const userAnswer= document.querySelector('input[name-"quiz"]:checked');
const feedbackElement=document.getElemntbyId("feedback");
if (userAnswer) {const userAnswerValue=userAnswer.value;
if (userAnswerValue === correctAnswer){ feedbackElement.textContent="Correct! Well done.";}
else {
feedbackElement.textContent = "That's incorrect. Try again!";}
else {
feedbackElement.textContent = "please select an answer";}
}
}
document.getElementById("submitanswer")addEventListener("click", checkAnswer);