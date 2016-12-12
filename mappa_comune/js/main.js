
/**
 * Il poligono del comune di Milano è stato scaricato dalla base dati ISPRA (http://dati.isprambiente.it/dataset/i-luoghi/).
 * Altri poligoni utili (quartieri e zone) si trovano qui http://abahgat.github.io/opendata-milano/
 */
$.getJSON('comune_milano.json', function(data){
    var shapeComuneMilano = data['results']['bindings'][13]['o']['value']
    shapeComuneMilano     = shapeComuneMilano.split(', ')
    shapeComuneMilano     = shapeComuneMilano.map(function(latLon){
        return latLon.split(' ')
    })
    start(shapeComuneMilano)
})

// funzione lanciata per creare la mappa e disegnare il poligono
function start(shape) {

    // crea mappa e centrala
    var center = [45.46, 9.19];
    var map = L.map('map').setView(center, 11)

    // agiungi tiles
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)

    // aggiungi poligono
    L.polygon(shape, {
        fill: false
    }).addTo(map)

}
