$(document).ready(function () {
    $('#weatherdetails').click(function () {

        var city = $("#city").val();

        if (city != '') {
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" +
                    "&appid=a42d99e557a8b401b2f867669235f6b0",
                type: "GET",
                dataType: "jsonp",
                success: function (data) {
                    var widget = show(data);

                    $("#show").html(widget);
                    $("#city").val('');

                }


            });


        }
        else {
            $("#error").html('Feild cannot be empty!');

        }

    });

});

function show(data) {
    return "<h1><strong>Current weather for " + data.name + "," + data.sys.country + "</h1>" +
        "<h3><strong>Weather</strong>: " + data.weather[0].main + "</h3>" +
        "<h3><strong>Description</strong>: " + data.weather[0].description + "</h3>" +
        "<h3><strong>Temperature</strong>: " + data.main.temp + " °C" + "</h3>" +
        "<h3><strong>Pressure</strong>: " + data.main.pressure + " Pa" + "</h3>" +
        "<h3><strong>Humidity</strong>: " + data.main.humidity + " g/cm^3" + "</h3>" +
        "<h3><strong>Min.Temp</strong>: " + data.main.temp_min + " °C" + "</h3>" +
        "<h3><strong>Max.Temp</strong>: " + data.main.temp_max + " °C" + "</h3>" +
        "<h3><strong>Wind Direction</strong>: " + data.wind.deg + "°" + "</h3>";
}