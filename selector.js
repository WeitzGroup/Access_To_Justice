function getCloudMadeUrl(styleId) {
    return 'http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/' + styleId + '/256/{z}/{x}/{y}.png';
}
var cloudmadeAttribution = 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade',
    cloudmade = new L.TileLayer(getCloudMadeUrl(997), {attribution: cloudmadeAttribution}),
    cloudmade2 = new L.TileLayer(getCloudMadeUrl(998), {attribution: 'Hello world'});

var map = new L.Map('map').addLayer(cloudmade).setView(new L.LatLng(50.5, 30.51), 15);



var legend = L.control({position: 'topright'});
legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend');
    div.innerHTML = '<select><option>1</option><option>2</option><option>3</option></select>';
    div.firstChild.onmousedown = div.firstChild.ondblclick = L.DomEvent.stopPropagation;
    return div;
};
legend.addTo(map);
