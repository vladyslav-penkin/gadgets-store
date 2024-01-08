import { FC, memo } from 'react';
import './LinkLine.scss';
import classNames from 'classnames';
import { LinkLineType } from '@/types/LinkLineType';
import { NavLink } from 'react-router-dom';
import { useTheme } from '@hooks/useTheme';

type Props = {
  titles: LinkLineType[];
};

export const LinkLine: FC<Props> = memo(({ titles }) => {
  const { 
    themeIcons: {
      homeIcon,
      arrowRightIcon
    },
  } = useTheme();

  const capitalize = (title: string) => {
    return title.charAt(0).toUpperCase() + title.slice(1);
  };

  return (
    <section className="link-line">
      <NavLink to="/" className="link-line__link">
        <img
          src={homeIcon}
          alt="home"
          className="link-line__arrow"
        />
      </NavLink>

      {titles.map(({ title, link }) => (
        <>
          <img
            src={arrowRightIcon}
            alt=""
            className="link-line__arrow"
          />
          <NavLink
            to={link}
            className={({ isActive }) => classNames(
              'link-line__link',
              { 'link-line__link--active': isActive }
            )}
            end
          >
            <p className="link-line__title">{capitalize(title || '')}</p>
          </NavLink>
        </>
      ))}
    </section>
  );
});