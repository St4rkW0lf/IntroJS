import { modules } from './modules.js';

const { csv_loader } = modules;

(async () => {
    const request = await fetch('./data/municipios.json');
    const municipios = await request.json();

    const populacao = await csv_loader('./data/municipios_populacao.csv');
    const surface_area = await csv_loader('./data/municipios_size.csv');

    function getColor(ibge_id) {
        const d = populacao[ibge_id] / surface_area[ibge_id];

        return d > 1000 ? '#44ff44' :
               d > 500  ? '#55ff55' :
               d > 200  ? '#68ff68' :
               d > 50  ? '#88ff88' :
               d > 10   ? '#99ff99' :
               d > 5   ? '#aaffaa' :
               d > 1   ? '#ccffcc' :
                          '#eeffee';
    }
    
    function style(feature) {
        return {
            fillColor: getColor(feature.properties.codarea),
            weight: 1,
            opacity: 0.5,
            color: '#333',
            dashArray: '3',
            fillOpacity: 0.8
        };
    }

    const map = L.map('leaflet-map')
        .setView([-15.45, -54], 4)
        .setMaxBounds([[-34, -74], [5, -35]]);

    const OpenStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 10,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.geoJson(municipios, { style }).addTo(map);

    const update = document.getElementById('update');

    update.addEventListener('click', () => {
        let [lat, lon] = document.getElementById('lat-lon').value.trim().split(',');

        if(!(lat > -34 && lat < 5 && lon > -74 && lon < -35)) {
            ({ lat, lng: lon } = map.getCenter());
            console.log('Invalid coordinates.');
        }

        const zoom = document.getElementById('zoom-level').valueAsNumber;
        map.setView([lat, lon], zoom)
    })
})();

