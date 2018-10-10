$(function () {
    "use strict";

    $.ajax({
        type: 'GET', url: 'http://nyander.herokuapp.com/'
    }).done(function(data) {
        var object = jQuery.parseJSON(data);
        $("#header").html(object.title);
        $("#content").html('<p><img class="mx-auto d-block img-fluid rounded" src="'+object.url+'"></p>');
    });
    
    $("#cardID").on('click', '#mewo', function() {
        $.ajax({
            type: 'GET', url: 'http://nyander.herokuapp.com/'
        }).done(function(data) {
            var object = jQuery.parseJSON(data);
            $("#header").html(object.title);
            $("#content").html('<p><img class="mx-auto d-block img-fluid rounded" src="'+object.url+'"></p>');
        });
    });
        
}); 
