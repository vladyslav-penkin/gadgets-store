import { FC, useEffect } from 'react';
import './FavoritesPage.scss';
import { Container } from '@components/Container/Container';
import { LinkLine } from '@components/LinkLine/LinkLine';
import { ProductCard } from '@components/ProductCard/ProductCard';
import { PageNotFound } from '@components/PageNotFound/PageNotFound';
import { useLocaleStorageContext } from '@hooks/useLocaleStorageContext';
import { Product } from '@/types/Product';
import favoritesEmpty from '@assets/icons/favortiesEmpty.webp';

export const FavoritesPage: FC = () => {
  const { favorites } = useLocaleStorageContext();
  const linkLine = [{ title: 'Favorites', link: '/favorites'}];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <article className="favoritesPage">
        <LinkLine titles={linkLine} />
        {favorites.length === 0
          ? (
            <PageNotFound
              image={favoritesEmpty}
              title={'You have no favorites yet...'}
              link={''}
              button={'Go shopping!'}
            />
           ) : (
            <>
              <h1 className="favoritesPage__title">Favorites</h1>
              <span className="favoritesPage__total">
                {favorites.length} items
              </span>
              <section className="favoritesPage__products">
                {favorites.map((favorite: Product) => (
                  <ProductCard key={favorite.id} product={favorite} />
                ))}
              </section>
            </>
          )}
      </article>
    </Container>
  );
}