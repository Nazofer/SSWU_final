import React from 'react';
import Product from '../products/product-card/product-card';

import styles from './offers.module.scss';

const Offers = () => {
  return (
    <div className={styles['offers']}>
      <div className={styles['offers__container']}>
        <h3 className={styles['offers-subheading']}>Offer</h3>
        <h2 className={styles['offers-heading']}>We Offer Organic For You</h2>
        <div className={styles['products__container']}>
          <Product
            type="Vegetable"
            name="Calabrese Broccoli"
            price="20"
            discount="7"
          />
          <Product
            type="Vegetable"
            name="Calabrese Broccoli"
            price="20"
            discount="7"
          />
          <Product
            type="Vegetable"
            name="Calabrese Broccoli"
            price="20"
            discount="7"
          />
          <Product
            type="Vegetable"
            name="Calabrese Broccoli"
            price="20"
            discount="7"
          />
        </div>
      </div>
    </div>
  );
};

export default Offers;