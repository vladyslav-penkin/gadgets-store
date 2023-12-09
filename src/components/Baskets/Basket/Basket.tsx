import { FC } from 'react';
import './Basket.scss';
import { Product } from '@/types/Product';
import { useLocaleStorageContext } from '@hooks/useLocaleStorageContext';
import { useTheme } from '@hooks/useTheme';
import { BasketButton } from '@components/Baskets/BasketButton/BasketButton';
import { BASE_URL } from '@api/requests';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

type Props = {
  cartItem: Product;
};

export const Basket: FC<Props> = ({ cartItem }) => {
  const {
    themeIcons: {
      closeBasketIcon,
      minusIcon,
      plusIcon,
    }
  } = useTheme();

  const { 
    changeQuantity,
    removeFromCart
   } = useLocaleStorageContext();

   const variants = {
    initial: {
      height: 0,
      opacity: 0,
      translateY: -100,
    },
    animate: {
      height: 'max-content',
      opacity: 1,
      translateY: 0,
    },
    exit: {
      height: 0,
      paddingTop: 0,
      paddingBottom: 0,
      opacity: 0,
    }
   };

  return (
    <motion.div
      variants={variants}
      initial={'initial'}
      animate={'animate'}
      exit={'exit'}
      transition={{ duration: 0.3 }}
    >
      <div className="basket">
        <div className="basket__header">
          <img
            className="basket__close"
            src={closeBasketIcon}
            alt="removeBasket"
            onClick={() => removeFromCart(cartItem.phoneId)}
          />
          <Link
            className="basket__link"
            to={`/${cartItem.category}/${cartItem.phoneId}`}
          >
            <img
              className="basket__image"
              src={`${BASE_URL}/${cartItem.image}`}
              alt="productImage"
            />
            <p className="basket__name">{cartItem.name}</p>
          </Link>
        </div>
        <div className="basket__footer">
          <div className="basket__quantities">
            <BasketButton
              icon={minusIcon}
              isDisabled={(cartItem?.quantity || 1) === 1}
              onClick={() => {
                changeQuantity(cartItem.phoneId, 'decrease');
              }}
            />
            <p className="basket__quantity">
              {cartItem.quantity}
            </p>
            <BasketButton
              icon={plusIcon}
              isDisabled={(cartItem?.quantity || 1) >= 20}
              onClick={() => {
                changeQuantity(cartItem.phoneId, 'increase');
              }}
            />
          </div>
          <p className="basket__price">
            ${cartItem.price}
          </p>
        </div>
      </div>
    </motion.div>
  );
};