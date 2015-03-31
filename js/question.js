/**
 * Created by ralph on 18/03/15.
 */

var url = "http://localhost:8080/questions";

function getQuestion() {

}

function sendQuestion() {
    var questionObject = {};

    questionObject.question = $('#question').val();
    questionObject.isAnswered = false;
    questionObject.response = null;

    $.post(url, questionObject, function(data) {
        console.log(data);
    });
}
