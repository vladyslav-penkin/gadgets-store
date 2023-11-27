import { FC, memo } from 'react';
import './DropDownButton.scss';
import dropDownArrow from '@assets/icons/dropDown-arrow.svg';
import classNames from 'classnames';

type Props = {
  onClick: () => void;
  stateDropDown: string;
  isOpen: boolean;
};

export const DropDownButton: FC<Props> = memo(
  ({
    onClick,
    stateDropDown,
    isOpen,
  }) => {
    return (
      <div
        className="dropdown__button"
        onClick={onClick}
      >
      <p className="dropdown__title">{stateDropDown}</p>
      <img
        className={classNames(
          'dropdown__arrow', {
            'dropdown__arrow--focused': isOpen,
          }
        )}
        src={dropDownArrow}
        alt="dropDown"
      />
      </div>
    );
  },
)