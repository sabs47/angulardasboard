import { Component, OnInit } from '@angular/core';
declare var google: any;
@Component({
  selector: 'app-help-support',
  templateUrl: './help-support.component.html',
  styleUrls: ['./help-support.component.css']
})
export class HelpSupportComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit() {
    let mapProp = {
      center: new google.maps.LatLng(-38.483, 146.25),
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP
      
  };
  let map = new google.maps.Map(document.getElementById("googleMap"
),{
  center: new google.maps.LatLng(-38.483, 146.25),
  zoom: 10,

  styles: [
  { "elementType": "geometry", "stylers": [ { "color": "#f5f5f5" } ] },
   { "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] },
    { "elementType": "labels.text.fill", "stylers": [ { "color": "#616161" } ] },
     { "elementType": "labels.text.stroke", "stylers": [ { "color": "#f5f5f5" } ] },
      { "featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [ { "color": "#bdbdbd" } ] },
       { "featureType": "poi", "elementType": "geometry", "stylers": [ { "color": "#eeeeee" } ] },
        { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [ { "color": "#757575" } ] },
         { "featureType": "poi.park", "elementType": "geometry", "stylers": [ { "color": "#e5e5e5" } ] },
          { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [ { "color": "#9e9e9e" } ] },
           { "featureType": "road", "elementType": "geometry", "stylers": [ { "color": "#ffffff" } ] },
            { "featureType": "road.arterial", "elementType": "labels.text.fill", "stylers": [ { "color": "#757575" } ] },
             { "featureType": "road.highway", "elementType": "geometry", "stylers": [ { "color": "#dadada" } ] },
              { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [ { "color": "#616161" } ] },
               { "featureType": "road.local", "elementType": "labels.text.fill", "stylers": [ { "color": "#9e9e9e" } ] },
                { "featureType": "transit.line", "elementType": "geometry", "stylers": [ { "color": "#e5e5e5" } ] },
                 { "featureType": "transit.station", "elementType": "geometry", "stylers": [ { "color": "#eeeeee" } ] },
                  { "featureType": "water", "elementType": "geometry", "stylers": [ { "color": "#c9c9c9" } ] },
                   { "featureType": "water", "elementType": "labels.text.fill", "stylers": [ { "color": "#9e9e9e" } ] }
                   ],

scrollwheel: false//set to true to enable mouse scrolling while inside the map area

}, mapProp)
  
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(-38.483, 146.25),
    map: map,
    icon: {
      url: "assets/img/map-marker.png",
      scaledSize: new google.maps.Size(36, 54)
    }

  });
}
  

}
