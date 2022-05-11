export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiaHVza3lkZXYiLCJhIjoiY2wydWJsbzU0MDBnOTNwamoyNDE5NmdldyJ9.AfCqE_FtceoORdbZpO3WKQ';

  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/huskydev/cl2udembg000014mz8llbwk58?optimize=true',
    scrollZoom: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create a marker
    const el = document.createElement('div');
    el.className = 'marker';
    // Add a marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add a popup
    new mapboxgl.Popup({
      offset: 30,
      focusAfterOpen: false,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: { top: 200, bottom: 150, left: 100, right: 100 },
  });
};
