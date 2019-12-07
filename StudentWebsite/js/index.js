$(document).ready(function()
{
    var apiKey = "f4ada8fafef7d64f6a82b7a37d6f559a"

    Object.keys(state_info).forEach(function(state)
    {
      var lat = state_info[state].lat;
      var long = state_info[state].lng;
      var url = `https://api.darksky.net/forecast/${apiKey}/${lat},${long}`;

      $.ajax({url:url, dataType:"jsonp"}).then(function(data)
      {
        var temperature = data.currently.temperature;

        if (temperature <= 10.0)
            $(`#${state}`).css('fill', "#6495ED")
        else if (temperature >= 11.0 && temperature <= 20.0)
            $(`#${state}`).css('fill', "#7FFFD4")
        else if (temperature >= 21.0 && temperature <= 30.0)
            $(`#${state}`).css('fill', "#0000FF")
        else if (temperature >= 31.0 && temperature <= 40.0)
            $(`#${state}`).css('fill', "#008B8B")
        else if (temperature >= 41.0 && temperature <= 50.0)
            $(`#${state}`).css('fill', "#00BFFF")
        else if (temperature >= 51.0 && temperature <= 60.0)
            $(`#${state}`).css('fill', "#F08080")
        else if (temperature >= 61.0 && temperature <= 70.0)
            $(`#${state}`).css('fill', "#CD5C5C")
        else if (temperature >= 71.0 && temperature <= 80.0)
            $(`#${state}`).css('fill', "#8B0000")
        else if (temperature >= 81.0 && temperature <= 90.0)
            $(`#${state}`).css('fill', "#B22222")
        else if (temperature > 90.0)
            $(`#${state}`).css('fill', "#FF0000")
        else
            $(`#${state}`).css('fill', "#808080")
      });
    })
});
