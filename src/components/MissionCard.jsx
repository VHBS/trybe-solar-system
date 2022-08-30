import React from 'react';
import PropTypes from 'prop-types';
import './MissionCard.css';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="container-mission" data-testid="mission-card">
        <p className="mission-title" data-testid="mission-name">{`${name}`}</p>
        <p className="mission-description" data-testid="mission-year">{`Ano: ${year}`}</p>
        <p
          className="mission-description"
          data-testid="mission-country"
        >
          {`País: ${country}`}

        </p>
        <p
          className="mission-description"
          data-testid="mission-destination"
        >
          {`Destino: ${destination}` }

        </p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
