/**
 * Created by ralph on 30/03/15.
 */

var url = "http://localhost:8080/questions";

function getResponse () {

}

function sendResponse () {
    var responseObject = {};

    responseObject.isAnswered = true;
    responseObject.response = $('#response').val();

    $.post(url, responseObject, function(data) {
        console.log(data);
    });
}
