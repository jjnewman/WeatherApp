$.getJSON("http://weather-api.herokuapp.com/cities", 'callback=?' , function(data){
    $.each(data.cities, function(index, city) {
    $('.cities').append(
    $('<option></option>').val(city).html(city )
    );
  });

$('.cities').change(function(){
  var city = $('option:selected', $(this)).text();
  $.getJSON("http://weather-api.herokuapp.com/temperature?city=" + city, 'callback=?' , function(data){
    $('.temperature').text(data.temp);
    $('img').attr('src', 'images/' + data.outlook + '.svg')          
    $(".icon").removeClass().addClass("icon " + data.outlook);
    });
  });
});
