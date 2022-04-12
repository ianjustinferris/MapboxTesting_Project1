mapboxgl.accessToken =
        "pk.eyJ1IjoiaWFuanVzdGluZmVycmlzIiwiYSI6ImNsMXUzdWFrdjI5YzEzY3BjcTN2bHdxcXkifQ.nHDp49alvjpiTFbRUmWL0Q";
      var map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/ianjustinferris/cl1vc6ihm002c14o9sj0c9vuy",
        center: [-84.3880,33.7490],
        zoom: 9
      });



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
    'circle-radius': 3,
    'circle-color': '#cef8b9',
    'circle-stroke-color': 'white',
    'circle-stroke-width': 1,
    'circle-opacity': .75
  }
});
});

map.on('load', () => {
map.addSource('Urocyon_cinereoargenteus_Data-5iuwnb', {
type: 'vector',
url: 'mapbox://ianjustinferris.9irq28sz'
});
map.addLayer({
'id': 'ianjustinferris.9irq28sz',
'type': 'circle',
'source': 'Urocyon_cinereoargenteus_Data-5iuwnb',
'source-layer': 'Urocyon_cinereoargenteus_Data-5iuwnb',
 paint: {
    'circle-radius': 5,
    'circle-color': '#F39C12',
    'circle-stroke-color': 'white',
    'circle-stroke-width': 1,
    'circle-opacity': .85
  }
});
});

map.on('load', () => {
map.addSource('Pantherophis_alleghaniensis-4e6fa5', {
type: 'vector',
url: 'mapbox://ianjustinferris.9ybevubg'
});
map.addLayer({
'id': 'ianjustinferris.9ybevubg',
'type': 'circle',
'source': 'Pantherophis_alleghaniensis-4e6fa5',
'source-layer': 'Pantherophis_alleghaniensis-4e6fa5',
 paint: {
    'circle-radius': 3.5,
    'circle-color': '#E74C3C',
    'circle-stroke-color': 'white',
    'circle-stroke-width': 1,
    'circle-opacity': .85
  }
});
});