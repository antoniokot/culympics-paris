import { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'

import { MapContainer } from './styles'

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN

export function Map() {
  const mapContainer = useRef(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [lng, setLng] = useState(2.289971)
  const [lat, setLat] = useState(48.86214)
  const [zoom, setZoom] = useState(9)

  useEffect(() => {
    if (map.current) return // initialize map only onc

    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom,
    })
  })

  return <MapContainer ref={mapContainer}></MapContainer>
}
