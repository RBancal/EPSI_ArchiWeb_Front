/**
 * Created by ralph on 30/03/15.
 */

var url = "http://localhost:8080/questions";

function getResponse () {
    // Récupération de la réponse à l'aide de l'ID de la question fournie.

    $('.objHide').show();
}

function sendResponse () {
    var responseObject = {};

    responseObject.isAnswered = true;
    responseObject.response = $('#response').val();

    $.post(url, responseObject, function(data) {
        console.log(data);
    });
}
