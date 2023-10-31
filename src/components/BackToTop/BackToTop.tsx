import { FC, memo } from 'react';
import './BackToTop.scss';
import classNames from 'classnames';
import { useTheme } from '@hooks/useTheme';

export const BackToTop: FC = memo(() => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const handleToTopClick = () => {
    scrollTo(0, 0);
  };

  return (
    <section
      className="backToTop__button"
    >
      <a 
        className="backToTop__button-link"
        onClick={handleToTopClick}
      >
        Back to top
        <div
          className={classNames(
            'backToTop__button-image',
            {
              'backToTop__button-image--light': isLight,
            }
          )}
        ></div>
      </a>

    </section>
  );
});