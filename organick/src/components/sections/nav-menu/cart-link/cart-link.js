import React from 'react';
import { Heading } from '../../../UI/Typography/typography';
import styles from './cart-link.module.scss';
import { useSelector } from 'react-redux';
import { ReactComponent as Cart } from '../../../../img/nav-menu-cart.svg';
import IconLink from '../icon-link/icon-link';

const CartLink = ({ className }) => {
  const cartCounter = useSelector((state) => state.cart.cartCounter);
  return (
    <div className={`${styles.cart} ${className || ''}`}>
      <IconLink linkTo='/cart' className={styles['btn']}>
        <Cart />
      </IconLink>
      <Heading
        className={styles['cart-text']}
      >{`Cart (${cartCounter})`}</Heading>
    </div>
  );
};

export default CartLink;
