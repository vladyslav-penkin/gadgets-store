import { FC } from 'react';
import './App.scss';
import '@styles/reset.scss';
import '@styles/normalize.scss';
import '@components/Header/Header.scss';
import '@components/Logo/Logo.scss';
import '@components/Header/NavbarList/NavbarList.scss';
import '@components/Header/BurgerMenu/BurgerMenu.scss';
import '@components/ProductCard/ProductCard.scss';
import '@components/AddToCartButton/AddToCartButton.scss';
import '@components/LikeButton/LikeButton.scss';
import '@pages/HomePage/HomePage.scss';
import {
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';
import { useTheme } from '@hooks/useTheme';
import { HomePage } from '@pages/HomePage/HomePage';
import { ProductType } from '@/types/ProductType';
import { ProductsPage } from '@pages/ProductsPage/ProductsPage';
import { ProductPage } from '@pages/ProductPage/ProductPage';
import { ContactsPage } from '@pages/ContactsPage/ContactsPage';
import { FavoritesPage } from '@pages/FavoritesPage/FavoritesPage';
import { CartPage } from '@pages/CartPage/CartPage';
import { Header } from '@components/Header/Header';
import { Footer } from '@components/Footer/Footer';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

const App: FC = () => {
  const { theme } = useTheme();
  const categories = Object.values(ProductType);

  return (
    <article
      className="App"
    >
      <div data-theme={theme}>
        <Header />

        <main className="App__main main">
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="home" element={<Navigate to="/" />} />

              {categories.map((category: ProductType) => (
                <Route
                  path={category}
                  key={category}
                  element={<Outlet />}
                >
                  <Route index element={<ProductsPage
                    productType={category}
                  />} />
                  <Route path=":itemCard" element={<ProductPage
                    productType={category}
                  />} />
                </Route>
              ))}

              <Route path="favorites" element={<FavoritesPage />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="contacts" element={<ContactsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>

          <Footer />
        </main>
      </div>
    </article>
  );
};

export default App;