import React, { useState, useLayoutEffect } from "react";
import { render } from "react-dom";
import mapboxgl from "mapbox-gl";
import "./styles.css";

function App() {
  const [marker, setMarker] = useState();
  //const [coordinates, setCoordinates] = useState();
  mapboxgl.accessToken =
    "pk.eyJ1Ijoib2p3cW50cml4dGk4IiwiYSI6ImNsNjBpYnZoMjFuODIzYm5xODg3Z3YzYWYifQ.evCWLjfIddFHycdIKnQypQ";

  // useLayoutEffect(() => {
  //   const map = new mapboxgl.Map({
  //     container: "map",
  //     style: "mapbox://styles/mapbox/dark-v10",
  //     center: [37.610641, 55.761994],
  //     zoom: 10
  //   });
  //   marker.addTo(map);
  // }, [marker]);

  useLayoutEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/dark-v10",
      center: [37.610641, 55.761994],
      zoom: 10
    });

    const marker = new mapboxgl.Marker()
      .setLngLat([37.610641, 55.761994])
      .addTo(map);

    setMarker(marker);
  }, []);

  // useEffect(() => {
  //   if (!!coordinates) {
  //     //Это достигается повторным вызовом метода marker.setLngLat([])
  //     marker.setLngLat(coordinates);
  //   }
  // }, [coordinates, marker]);

  const handleClick = (event) => {
    const stores = {
      km20: [37.610641, 55.761994],
      belief: [37.601152, 55.733396],
      brandshop: [37.616812, 55.767839]
    };

    let index3 = stores[event.currentTarget.value];
    //console.log(index3);
    //Подсказка: У колбэк-функции внутри onChange должен быть доступ к marker.
    marker.setLngLat(index3);
  };

  return (
    <>
      <div className="map-overlay">
        <h3>Выберите магазин: </h3>
        <select onChange={handleClick}>
          <option value="km20">KM20</option>
          <option value="belief">BELIEF</option>
          <option value="brandshop">BRANDSHOP</option>
        </select>
      </div>
      <div id="map"></div>
    </>
  );
}

render(<App />, document.querySelector("#root"));
