import React from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { CartItem } from '../../OpenCart/CartItem';
import Divider from '../../Divider';
import 'react-perfect-scrollbar/dist/css/styles.css';

const ItemList = (props) => {
  const { order, total } = props;

  return (
    <div className="payment-page__item-list">
      <PerfectScrollbar>
        <main className="payment-page__item-wrapper">
          {order.map((item) => (
            <CartItem cartItem={item} key={item._id} />
          ))}
        </main>
      </PerfectScrollbar>
      <Divider />
      <footer className="payment-page__item-list--footer">
        <span>Total</span>
        <span>{`$${total.toFixed(2)}`}</span>
      </footer>
    </div>
  );
};

ItemList.propTypes = {
  order: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
};

export default ItemList;
