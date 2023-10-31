import {
  FC,
  memo,
  useState,
  useRef,
  useEffect,
} from 'react';
import './DropDown.scss';
import classNames from 'classnames';
import { SortBy } from '@/types/SortBy';
import { DropDownItem } from '@components/DropDown/DropDownItem/DropDonwItem';
import { DropDownButton } from '@components/DropDown/DropDownButton/DropDownButton';

type Props = {
  variables: string[];
  searchParam: string;
  onChange: (value: string) => void;
  defaultValue: number;
};

const sortByNames = {
  [SortBy.NAME]: 'Name A-Z',
  [SortBy.HIGHT]: 'Price Highest',
  [SortBy.LOW]: 'Price Lowest',
  [SortBy.NEW]: 'New first',
  [SortBy.OLD]: 'Old first',
};

export const DropDown: FC<Props> = memo(
  ({
    variables,
    searchParam,
    onChange,
    defaultValue = 0,
  }) => {
    const [stateDropDown, setStateDropDown] = useState<string>(
      searchParam || variables[defaultValue]
    );
    const [isOpen, setOpen] = useState<boolean>(false);
    const dropDownRef = useRef<HTMLDivElement | null>(null);
  
    const handleChange = (item: string) => {
      setOpen(false);
      setStateDropDown(item);
      onChange(item);
    };
  
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropDownRef.current
            && !dropDownRef.current.contains(event.target as Node)) {
          setOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      }
    }, []);

    useEffect(() => {
      setStateDropDown(searchParam);
    }, [searchParam]);
  
    return (
      <div
        className="dropdown"
        ref={dropDownRef}
      >
        <DropDownButton
          onClick={() => setOpen(!isOpen)}
          stateDropDown={
            sortByNames[stateDropDown as SortBy] || stateDropDown
          }
        />
        <ul
          className={classNames(
            'dropdown__content', {
              'dropdown__content--active': isOpen,
            },
          )}
        >
          {variables.map((item) => (
            <DropDownItem
              key={item}
              item={sortByNames[item as SortBy] || item}
              onClick={() => handleChange(item)}
            />
          ))}
        </ul>
      </div>
    );
  },
);