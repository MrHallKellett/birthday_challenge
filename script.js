// PLEASE DON'T SCROLL DOWN AS YOU CAN SEE THE ANSWER
// IT'S FOR VALIDATION



































































// * reiteration* PLEASE DON'T SCROLL





















const answer = document.getElementById("answer");


document.getElementById('button').onclick = function() {
    if (answer.value != 72657676) {
        answer.setCustomValidity("Seems to be the wrong answer.. try again!");
        } else {
            answer.setCustomValidity("Correct!");
            location.replace("./parttwo.html")
    }
};