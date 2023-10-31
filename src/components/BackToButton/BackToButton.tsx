import { FC } from 'react';
import './BackToButton.scss';
import { NavLink } from 'react-router-dom';
import { useTheme } from '@hooks/useTheme';

type Props = {
  to: string;
};

export const BackToButton: FC<Props> = ({
  to,
}) => {
  const {
    themeIcons: {
      arrowLeftIcon,
    }
  } = useTheme();
  return (
    <section className="backToButton">
      <NavLink
        to={to}
        className="backToButton__button"
      >
        <img
          src={arrowLeftIcon}
          alt="back"
          className="backToButton__image"
        />

        Back
      </NavLink>
    </section>
  );
};