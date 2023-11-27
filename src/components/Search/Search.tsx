import { 
  FC, 
  useState,
  useCallback,
  useRef,
} from 'react';
import './Search.scss';
import classNames from 'classnames';

type Props = {
  searchQuery: string;
  onChange: (value: string) => void;
};

export const Search: FC<Props> = ({
  searchQuery,
  onChange,
}) => {
  const [query, setQuery] = useState<string>(searchQuery);
  const [isFocused, setFocused] = useState<boolean>(false);
  const searchRef = useRef<HTMLInputElement | null>(null);

  const handleFocus = useCallback(() => {
    searchRef.current?.focus();
    setFocused(true);
  }, []);

  return (
    <section 
      className="search"
    >
      <p className="search__title">
        Search
      </p>
      <div
        className={classNames(
          'search__container', {
            'search__container--focused': isFocused,
          }
        )}
        onClick={handleFocus}
      >
        <input 
          type="text" 
          value={query}
          className="search__input" 
          placeholder="Enter..."
          ref={searchRef}
          onChange={({ target: { value } }) => {
            setQuery(value);
            onChange(value);
          }}
          onBlur={() => setFocused(false)}
          onFocus={handleFocus}
        />
        <div className="search__image"></div>
      </div>
    </section>
  );
};