<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Home</title>
    <link href="https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.css" rel="stylesheet" />
    <script src="https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.js"></script>
    <style>
        html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
        }
        #map {
            width: 100%;
            height: 100vh;
        }
    </style>
</head>
<body>
    <div id="map"></div>
</body>
<script>
    mapboxgl.accessToken = 'pk.eyJ1IjoiZ2ljb2RlcmdhbCIsImEiOiJjazcxODNscXYwM3R3M2V0aGcwMWxvcWV0In0.s246-Q7mSmCOOeqwP-HGtA';

    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [-96, 37.8],
        zoom: 4.5,
        minZoom: 4.5,
        maxZoom: 15,
        attributionControl: false
    });
    const statesBoundariesUrl = 'https://raw.githubusercontent.com/jgoodall/us-maps/master/geojson/state.geo.json';
    const countiesBoundariesUrl = 'https://raw.githubusercontent.com/joelwolfgang/GEOJson-US-Counties/master/usCounties.geojson';
    const zipcodeUrl = 'https://raw.githubusercontent.com/talentdev0314/zip-code/main/zips-by_county.json';
    const zwsid = 'X1-ZWz1hj5qt65bt7_2kpit';
    const zillowApiUrl = `https://web.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=${zwsid}&`;

    let currentPopup = null;
    let highlightedCityId = null;

    map.on('click', function (e) {
        new mapboxgl.Marker()
            .setLngLat(e.lngLat)
            .addTo(map);
        let element = document.querySelector('.baTaKqr');
        if (element) {
            element.dispatchEvent(new Event('click', { bubbles: true }));
        }
    });
    map.on('load', () => {
        map.addSource('city-borders', {
            type: 'geojson',
            data: countiesBoundariesUrl
        });
        map.addSource('state-borders', {
            type: 'geojson',
            data: statesBoundariesUrl
        });
        map.addLayer({
            id: 'city-borders-layer',
            type: 'fill',
            source: 'city-borders',
            paint: {
                'fill-color': '#00FF47',
                'fill-opacity': 0.3,
                'fill-outline-color': '#000000'
            }
        });
        map.addLayer({
            id: 'state-borders-layer',
            type: 'line',
            source: 'state-borders',
            paint: {
                'line-color': '#000000',
                'line-width': 2
            }
        });

        map.on('mousemove', 'city-borders-layer', async (e) => {
            if (!e.features || e.features.length === 0) {
                return;
            }

            map.getCanvas().style.cursor = 'pointer';
            const cityName = e.features[0].properties.COUNTY_STATE_NAME;
            const geoid = e.features[0].properties.GEOID;
            let homeValue = 'N/A';

            if (currentPopup) {
                currentPopup.remove();
            }
            currentPopup = new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(`
          <strong>${cityName}</strong><br>
          Home Value: ${homeValue}
        `)
                .addTo(map);

            if (highlightedCityId && highlightedCityId !== geoid) {
                map.setPaintProperty('city-borders-layer', 'fill-opacity', 0.3);
            }

            highlightedCityId = geoid;
            map.setPaintProperty('city-borders-layer', 'fill-opacity', [
                'case',
                ['==', ['get', 'GEOID'], highlightedCityId],
                0.6,
                0.3
            ]);
        });
        map.on('mouseleave', 'city-borders-layer', () => {
            map.getCanvas().style.cursor = '';  // Reset cursor
            map.setPaintProperty('city-borders-layer', 'fill-opacity', 0.3);
            if (currentPopup) {
                currentPopup.remove();
                currentPopup = null;
            }
            highlightedCityId = null;
        });
    });

</script>

</html>
