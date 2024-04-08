import { FC, memo } from 'react';
import './DropDownSection.scss';
import { DropDown } from '@components/DropDown/DropDown';

type Props = {
  title: string;
  variables: string[];
  searchParam: string;
  onChange: (value: string) => void;
  defaultValue: number;
}

export const DropDownSection: FC<Props> = memo(({ 
  title, 
  variables, 
  searchParam, 
  onChange, 
  defaultValue,
}) => {
  return (
    <div className="productsPage__dropDown-container">
      <p className="productsPage__dropDown-title">{title}</p>
      <DropDown
        variables={variables}
        searchParam={searchParam}
        onChange={onChange}
        defaultValue={defaultValue}
      />
    </div>
  );
});