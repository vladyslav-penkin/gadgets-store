import { FC, memo, MouseEventHandler } from 'react';
import './DropDownItem.scss';

type Props = {
  item: string;
  onClick: MouseEventHandler<HTMLLIElement>;
};

export const DropDownItem: FC<Props> = memo(({
  item,
  onClick
}) => { 
  return (
    <li className="dropdown__content-item" onClick={onClick}>
      {item}
    </li>
  );
});