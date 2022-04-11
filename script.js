mapboxgl.accessToken =
        "pk.eyJ1IjoiaWFuanVzdGluZmVycmlzIiwiYSI6ImNsMXUzdWFrdjI5YzEzY3BjcTN2bHdxcXkifQ.nHDp49alvjpiTFbRUmWL0Q";
      var map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/ianjustinferris/cl1vc6ihm002c14o9sj0c9vuy",
        center: [-84.3880,33.7490],
        zoom: 9
      });


//Add occurance Layer Flying Squirrel
// map.on('load', () => {
// map.addSource('ianjustinferris.7e7jfhov', {
// type: 'vector',
// url: 'mapbox://mapbox.ianjustinferris.7e7jfhov'
// });
// map.addLayer({
// 'id': 'ianjustinferris.7e7jfhov',
// 'type': 'fill',
// 'source': 'ianjustinferris.7e7jfhov',
// 'source-layer': 'roads',



// });
// });

 
map.on('load', () => {
map.addSource('thene_Cunicularia_Dataset-bqcy9s', {
type: 'vector',
url: 'mapbox://ianjustinferris.7e7jfhov'
});
map.addLayer({
'id': 'ianjustinferris.7e7jfhov',
'type': 'circle',
'source': 'thene_Cunicularia_Dataset-bqcy9s',
'source-layer': 'Athene_Cunicularia_Dataset-bqcy9s',
 paint: {
    'circle-radius': 2.5,
    'circle-color': '#cef8b9',
    'circle-stroke-color': 'white',
    'circle-stroke-width': 1,
    'circle-opacity': 1
  }
});
});