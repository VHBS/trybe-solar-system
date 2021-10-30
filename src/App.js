import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import BackgroundImage from './components/BackgroundImage';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <BackgroundImage />
        <Header />
        <SolarSystem />
        <Missions />
      </>
    );
  }
}

export default App;
