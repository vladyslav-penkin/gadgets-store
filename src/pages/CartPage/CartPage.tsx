import { FC, useEffect } from 'react';
import './CartPage.scss';
import { Container } from '@components/Container/Container';
import { BackToButton } from '@components/BackToButton/BackToButton';
import { useLocaleStorageContext } from '@hooks/useLocaleStorageContext';
import { Baskets } from '@components/Baskets/Baskets';
import { Checkout } from '@components/Baskets/Checkout/Checkout';
import cartEmpty from '@assets/icons/cartEmpty.webp';
import { PageNotFound } from '@components/PageNotFound/PageNotFound';
import { LinkLine } from '@components/LinkLine/LinkLine';

export const CartPage: FC = () => {
  const { cartItems } = useLocaleStorageContext();
  const linkLine = [
    { title: 'Cart', link: '/cart'}
  ]

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <article className="cartPage">
        <LinkLine titles={linkLine} />
        {cartItems.length === 0
          ? (
            <PageNotFound
              image={cartEmpty}
              title={'Looks like your cart is empty...'}
              link={'phones'}
              button={'Go shopping!'}
            />
          ) : (
            <>
              <BackToButton to={'/'} />
              <h1 className="cartPage__title">Cart</h1>
              <div className="cartPage__container">
                <Baskets cartItems={cartItems} />
                <Checkout />
              </div>
            </>
          )}
      </article>
    </Container>
  );
}