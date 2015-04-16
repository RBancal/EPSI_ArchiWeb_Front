/**
 * Created by ralph on 30/03/15.
 */
var urlResponse = "http://localhost:8080/responses";

function getResponse () {
    urlQuestion = $('#questionId').val();

    $.get(urlQuestion, function (data) {
        if (!data) {
            alert('Il n\'y a pas de questions dans la base');
        }
        else {
            console.log(data);
            $('#questionAnswered').val(data.question);
            if (data.response === "") {
                alert('Votre question n\'a pas encore reçue de réponse');
            }
            else {
                $('#questionResponse').val(data.response);

                $('.objHide').show();
            }
        }
    });
}

function sendResponse () {
    var responseObject = {};

    responseObject.idQuestion = $('#idQuestionGetted').val();
    responseObject.isAnswered = true;
    responseObject.response = $('#response').val();

    $.post(urlResponse, responseObject, function(data) {
        console.log(data);
    });
}
