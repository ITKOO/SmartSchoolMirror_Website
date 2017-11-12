function initMap()
{
  var location = {lat: 37.466375, lng:  126.932903};
  var map = new google.maps.Map(document.getElementById('map'),
  {
    zoom: 14,
    center: location
  });
  var marker = new google.maps.Marker
  ({
    position: location,
    map: map
  });
}