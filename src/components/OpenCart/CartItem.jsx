import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';
import binIcon from '../../assets/bin.svg';
import '../../style/components/openCart.scss';
import { useCart } from '../../context/CartItemContext/cartContext';

export const CartItem = React.memo((props) => {
  const [newComment, setNewComment] = useState('');
  const { updateQuantity, remove, updateComment } = useCart();
  const { cartItem } = props;
  const { name, price, quantity, comment, singleTotal, imgUrl } = cartItem;
  const isBtnDisabled = quantity <= 1;

  const handleComment = (value) => {
    setNewComment(value);
    updateComment({ ...cartItem, comment: value });
  };

  return (
    <div className="item-card">
      <div className="card-top">
        <section className="card-top__desc">
          <div className="item-img">
            <img src={imgUrl} alt={name} />
          </div>
          <div className="item-detail">
            <h2 className="item-name">{name}</h2>
            <p className="item-price">${price}</p>
          </div>
        </section>

        <section className="card-top__action">
          <div className="item-qty">
            <div className="item-quantity">{quantity}</div>
            <div className="item-modification">
              <button onClick={() => updateQuantity({ ...cartItem, method: 'increase' })}>+</button>
              <button onClick={() => updateQuantity({ ...cartItem, method: 'decrease' })} disabled={isBtnDisabled}>
                -
              </button>
            </div>
          </div>
          <span className="item-sumprice">{`$${singleTotal.toFixed(2)}`}</span>
        </section>
      </div>

      <div className="card-bottom">
        <input
          className="cart-message"
          placeholder="Order Note..."
          onChange={(e) => handleComment(e.target.value)}
          value={comment || newComment}
        />
        <button onClick={() => remove({ ...cartItem })}>
          <ReactSVG src={binIcon} className="item-delete" />
        </button>
      </div>
    </div>
  );
});

CartItem.propTypes = {
  cartItem: PropTypes.shape({
    imgUrl: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    comment: PropTypes.string,
    singleTotal: PropTypes.number,
  }).isRequired,
};
