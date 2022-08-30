import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import './SolarSystem.css';

const FOUR = 4;
const EIGTH = 8;

const plnatesCardsOne = planets.slice(0, FOUR);
const plnatesCardsTwo = planets.slice(FOUR, EIGTH);

class SolarSystem extends React.Component {
  renderCards = (param) => param.map((p) => (<PlanetCard
    key={ p.name }
    planetName={ p.name }
    planetImage={ p.image }
  />))

  render() {
    return (
      <>
        <div data-testid="solar-system" />
        <Title headline="Planetas" />
        <div className="container-planetas">
          <div className="first-planets">
            {this.renderCards(plnatesCardsOne)}
          </div>
          <div className="first-planets">
            {this.renderCards(plnatesCardsTwo)}

          </div>
        </div>

      </>
    );
  }
}

export default SolarSystem;
