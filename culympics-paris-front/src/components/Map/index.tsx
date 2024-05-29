import { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

import { MapContainer } from './styles'

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN

export function Map() {
  const mapContainer = useRef(null)
  const map = useRef<mapboxgl.Map | null>(null)

  useEffect(() => {
    if (map.current) return // initialize map only onc

    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [2.289971, 48.86214],
      zoom: 9,
    })
  })

  return <MapContainer ref={mapContainer}></MapContainer>
}
