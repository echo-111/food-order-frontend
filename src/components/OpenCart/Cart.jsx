import React from 'react';
import classNames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import { Link } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { CartItem } from './CartItem';
import CustomModal from '../CustomModal';
import { useCart } from '../../context/CartItemContext/cartContext';
import 'react-perfect-scrollbar/dist/css/styles.css';
import '../../style/components/openCart.scss';
import { useAuth } from '../../context/userContext';

const Cart = (props) => {
  const { isCartOpen, handleCloseCart } = props;
  const { cartItems, total } = useCart();
  const { user } = useAuth();
  const isCheckOutDisable = !cartItems.length;

  const orderItemsElements = cartItems.map((item, index) => <CartItem key={index} cartItem={item} />);

  const linkClasses = classNames({
    checkout: true,
    disable: isCheckOutDisable,
  });

  return (
    <CustomModal isOpen={isCartOpen} protalClassname="cart-modal" closeModal={handleCloseCart}>
      <div className="cart-container">
        <div className="header">
          <h2 className="cart-title">Orders</h2>
          <div className="cart-header">
            <h5 className="item">Item</h5>
            <h5 className="qty">Qty</h5>
            <h5 className="price">Price</h5>
          </div>
        </div>
        <PerfectScrollbar>
          <div className="cart-content">{orderItemsElements}</div>
        </PerfectScrollbar>
        <div className="total">
          <h6 className="sub-total">Total</h6>
          <p className="total-price">{`$${total.toFixed(2)}`}</p>
        </div>

        <Link className={linkClasses} to={isEmpty(user) ? '/auth' : 'payment'}>
          Continue to Payment
        </Link>
      </div>
    </CustomModal>
  );
};

Cart.propTypes = {
  items: PropTypes.array,
  isCartOpen: PropTypes.bool,
  handleCloseCart: PropTypes.func,
};

export default Cart;
