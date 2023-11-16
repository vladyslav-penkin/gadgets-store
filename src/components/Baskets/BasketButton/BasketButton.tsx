import { FC } from 'react';
import './BasketButton.scss';
import classNames from 'classnames';

type Props = {
  icon: string;
  isDisabled: boolean;
  onClick: () => void;
};

export const BasketButton: FC<Props> = ({
  icon,
  isDisabled,
  onClick
}) => {
  return (
    <button 
      className={classNames(
        'basket__button', {
          'basket__button--disabled': isDisabled,
        }
      )} 
      onClick={onClick}
    >
      <img src={icon} />
    </button>
  );
}