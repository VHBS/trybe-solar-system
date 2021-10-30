import React from 'react';
import imagem from '../images/galaxy2.png';
import './BackgroundImage.css';

class BackgroundImage extends React.Component {
  render() {
    return (
      <div className="container-img">
        <img className="bg-img" src={ imagem } alt={ imagem } />
      </div>
    );
  }
}

export default BackgroundImage;
