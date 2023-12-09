import { FC } from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import { useTheme } from '@hooks/useTheme';
import { FooterLink } from '@components/Footer/FooterLink/FooterLink';
import { BackToTop } from '@components/BackToTop/BackToTop';

export const Footer: FC = () => {
  const { themeIcons: { logoPath } } = useTheme();

  return (
    <article className="footer">
      <section className="footer__container">
        <Link to="/" className="footer__logo">
          <img
            className="footer__image"
            src={logoPath}
            alt="logo"
          />
        </Link>
        <ul className="footer__list">
          <FooterLink
            href="https://github.com/vladyslav-penkin"
            content="GITHUB"
          />
          <li className="footer__item">
            <Link
              to="/contacts"
              className="footer__link"
            >
              CONTACTS
            </Link>
          </li>
          <FooterLink
            href="https://github.com/vladyslav-penkin"
            content="RIGHTS"
          />
        </ul>
        <BackToTop />
      </section>
    </article>
  );
};