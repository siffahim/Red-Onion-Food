import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import mapboxgl from 'mapbox-gl';
import React, { useEffect } from 'react';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2lmZmFoaW0iLCJhIjoiY2t4MGo5eTQ1MTViODJxcXJqczVpY3U2eSJ9.1Dw1vmK13NZ08f4ZYSQQoA';

const MapDirection = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [90.389099, 23.791599],
            zoom: 13
        });

        map.addControl(
            new MapboxDirections({
                accessToken: mapboxgl.accessToken
            }),
            'top-left'
        );
    }, [])
    return (
        <div>
            <div id="map"></div>
        </div>
    );
};

export default MapDirection;