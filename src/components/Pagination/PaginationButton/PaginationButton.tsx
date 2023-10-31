import { FC } from 'react';
import './PaginationButton.scss';
import classNames from 'classnames';
import { useTheme } from '@hooks/useTheme';
import { PaginationButtonType } from '@/types/PaginationButtonType';

type Props = {
  totalPages: number
  type: PaginationButtonType;
  currentPage: number;
  onClick: () => void;
};

export const PaginationButton: FC<Props> = ({
  totalPages,
  type,
  currentPage,
  onClick,
}) => {
  const {
    themeIcons: {
      arrowLeftIcon,
      arrowRightIcon,
    },
  } = useTheme();
  const isPrevious = type === PaginationButtonType.Previous;
  const isDisabled = isPrevious
    ? currentPage <= 1
    : currentPage >= totalPages;

  return (
    <button 
      className={classNames('pagination__nav-button', {
        'pagination__nav-button--disabled': isDisabled,
      })}
      onClick={onClick}
    >
      <img
        src={isPrevious ? arrowLeftIcon : arrowRightIcon}
       />
    </button>
  );
};