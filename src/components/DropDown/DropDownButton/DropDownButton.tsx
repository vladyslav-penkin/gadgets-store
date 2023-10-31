import { FC, memo } from 'react';
import './DropDownButton.scss';
import dropDownArrow from '@assets/icons/dropDown-arrow.svg';

type Props = {
  onClick: () => void;
  stateDropDown: string;
};

export const DropDownButton: FC<Props> = memo(
  ({
    onClick,
    stateDropDown,
  }) => {
    return (
      <div
        className="dropdown__button"
        onClick={onClick}
      >
      <p className="dropdown__title">{stateDropDown}</p>
      <img
        src={dropDownArrow}
        alt="dropDown"
      />
      </div>
    );
  },
)