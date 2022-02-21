import React from 'react';
import PropTypes from 'prop-types';

const DishesCard = (props) => {
  const { name, price, openModal, _id, url } = props;

  const openDishModal = () => {
    openModal({ _id, name, price: Number(price), imgUrl: url });
  };
  return (
    <div className="dish-content__dish" onClick={openDishModal}>
      <header className="dish-content__dish-img">
        <img src={url} alt="logo" />
      </header>
      <main className="dish-content__dish-detail">
        <span className="dish-content__dish-desc">{name}</span>
        <span className="dish-content__dish-price">{`$${price}`}</span>
      </main>
    </div>
  );
};

DishesCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  openModal: PropTypes.func,
  _id: PropTypes.string,
  url: PropTypes.string,
};

export default DishesCard;
