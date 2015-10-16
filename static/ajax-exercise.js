"use strict";

// PART 1: SHOW A FORTUNE

function showFortune(evt) {
    var fortune = evt;
    $('#fortune-text').html(fortune);
    // TODO: get the fortune and show it in the #fortune-text div
}

function getFortune() {
    $.get('/fortune', showFortune);
}

$('#get-fortune-button').on('click', getFortune);


// PART 2: SHOW WEATHER

function showWeather(evt) {
    var forecast = evt[forecast];
    $('#weather-form').html(forecast);
}

function getWeather() {
    evt.preventDefault();
    var url = "/weather?zipcode=" + $("#zipcode-field").val();
    $.get(url, showWeather);
    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', getWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);
