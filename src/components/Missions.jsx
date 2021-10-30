import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import './Missions.css';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="container-missoes">
          {missions.map((m) => (<MissionCard
            key={ m.name }
            name={ m.name }
            year={ m.year }
            country={ m.country }
            destination={ m.destination }
          />))}
        </div>
      </div>
    );
  }
}

export default Missions;
