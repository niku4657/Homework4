$(document).ready(function() {
    var apiKey = "f4ada8fafef7d64f6a82b7a37d6f559a" // Enter your API Key here
    console.log(`state_info is: ${state_info}`) // Notice the templating here, use that when you form your url


    // TODO
    // Iterate over the state_info array and call the api for each state_name to get the current temperature
    // Example to call the api using state_name
    // This should be done inside the for loop
    Object.keys(state_info).forEach(function(state)
    {
      var url = "https://api.forecast.io/forecast/" + apiKey + "/" + state_info[state]['lat'] + "," + state_info[state]['lng'];

      $.ajax
      ({
        url:url,
        dataType:"jsonp"
      })

      .then(function(data)
      {
        console.log(data)
        var temperature = null
        // TODO
        // Fill in the RHS of the below line and uncomment it. Remember how we accessed the temperature in Lab 9.
        var temperature = data.currently.temperature;

        console.log(temperature)

        //TODO
        // Default color gray
        // Create a series of if else blocks to set the color for the state based on the temperature
        // Less than equal to 10 should be blue
        // Between 11 and 30 should be cyan
        // Between 31 and 50 should be green
        // Between 51 and 80 should be orange
        // Greater than 80 should be red

        if (temperature <= 10.0)
            $('#' + state).css('fill', 'blue')
        else if (temperature >= 11.0 && x <= 30.0)
            $('#' + state).css('fill', 'cyan')
        else if (temperature >= 31.0 && x <= 50.0)
            $('#' + state).css('fill', 'green')
        else if (temperature >= 51.0 && x <= 80.0)
            $('#' + state).css('fill', 'orange')
        else if (temperature > 80.0)
            $('#' + state).css('fill', 'red')
        else
            $('#' + state).css('fill', 'gray')
      });
    });
});
