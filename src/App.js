import logo from './logo.svg';
import './App.css';

import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiY2FkeWJhbHR6IiwiYSI6ImNraWtuYjltZTAwdGYyeXJ1dDQzaGl2NGIifQ.9Z0c-72TXoa6iz5PA3YrVQ'
});


function App() {
  return (
    <div className="App">
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: '100vh',
          width: '100vw'
        }}
      >
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        </Layer>
      </Map>
    </div>
  );
}

export default App;
