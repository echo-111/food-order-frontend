import React from 'react';
import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';

export const DataCard = (props) => {
  const { cardIcon, cardData, cardTitle } = props;

  return (
    <div className='home-page__datacard'>
        <ReactSVG className="home-page__datacard-icon" src={cardIcon} />    
        <div className='home-page__datacard-data'>
            <span className='home-page__datacard-content'>{cardData}</span>
            <span className='home-page__datacard-title'>{cardTitle}</span>
        </div> 
    </div>
  )
};

DataCard.propTypes = {
    cardIcon: PropTypes.string,
    cardData: PropTypes.string,
    cardTitle: PropTypes.string,
};



