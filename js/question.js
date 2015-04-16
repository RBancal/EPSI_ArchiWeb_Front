/**
 * Created by ralph on 18/03/15.
 */

var urlLastQuestion = "http://localhost:8080/questions/last";
var urlQuestion = "http://localhost:8080/questions";

function getQuestion() {
    $.get(urlLastQuestion, function(data) {
        if (!data) {
            alert('Il n\'y a pas de questions dans la base')
        }
        else {
            console.log(data);

            $('#idQuestionGetted').val(data._id);
            $('#questionGetted').val(data.question);

            $('.respHide').show();
        }
    });
}

function sendQuestion() {
    var questionObject = {};

    questionObject.question = $('#question').val();
    questionObject.isAnswered = false;
    questionObject.response = null;

    $.post(urlQuestion, questionObject, function(data, jqxhr) {
        console.log(data);
        $('#questionLocation').val(data._id);
    });

    $('#questionLocation').show();
}
