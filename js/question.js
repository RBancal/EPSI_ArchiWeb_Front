/**
 * Created by ralph on 18/03/15.
 */
// var url = "localhost:8000/";

var url = "http://localhost:8000/questions";

function sendQuestion() {
    var question = $('#question').val();
    var httpRequest = new XMLHttpRequest();

    httpRequest.open("POST", url, true);
    httpRequest.send(question);


}