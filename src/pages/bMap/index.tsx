import React, { useEffect, useState, useRef } from 'react'
import { Map, MapApiLoaderHOC, Marker } from 'react-bmapgl'


function renderMakers(makerData: any[]) {
  const makerComponents = []
  for (let i = 0; i < makerData.length; i++) {
    makerComponents.push(
      <Marker
        position={makerData[i]}
        enableDragging
      />
    )
  }
  return makerComponents
}




const BMap: React.FC = () => {
  const [makers, setMakers] = useState<any>([])
  const mapRef = useRef()


  async function queryMakersData() {
    try {
      const data = [], randomCount = 1000;
      console.log('百度地图')
      for (let i = 1; i < randomCount; i++) {
        data.push(new BMapGL.Point(116.404449 - 2 + Math.random() * 4, 39.914889 + Math.random() * 4))
      }

      setMakers(renderMakers(data))
    } catch (e) {

    }
  }

  useEffect(() => {
    queryMakersData()
  }, [])


  return (
    <Map
      ref={mapRef}
      enableScrollWheelZoom
      style={{ height: 450 }}
      center={new BMapGL.Point(116.404449, 39.914889)}
      zoom={12}
    >
      {makers}
    </Map>
  )
}

export default MapApiLoaderHOC({ ak: 'wiK7TA380vuaK7eGEPjVh7qrhbE1jptv' })(BMap)