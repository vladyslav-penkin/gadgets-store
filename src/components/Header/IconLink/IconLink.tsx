import { FC, memo } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string;
  src: string;
  alt: string;
  count: number;
  className: string;
  clickFunc?: () => void;
};

export const IconLink: FC<Props> = memo(
  ({
    to,
    src,
    alt,
    count,
    className,
    clickFunc,
  }) => {
    return (
      <NavLink
        to={`/${to}`}
        onClick={clickFunc}
        className={({ isActive }) => classNames(
          `${className}`,
          {
            [`${className}--active`]: isActive,
          }
        )}
      >
        <div className={`${className}-position`}>
          <img
            src={src}
            alt={alt}
            className={`${className}-icon`}
          />
          {count > 0 && (
            <div className={`${className}-count`}>
              {count}
            </div>
          )}
        </div>
      </NavLink>
    );
  },
);