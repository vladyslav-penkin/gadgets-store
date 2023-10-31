import { 
  FC, 
  useState,
  useCallback,
  useRef,
} from 'react';
import './Search.scss';

type Props = {
  searchQuery: string;
  onChange: (value: string) => void;
};

export const Search: FC<Props> = ({
  searchQuery,
  onChange,
}) => {
  const [query, setQuery] = useState<string>(searchQuery);
  const searchRef = useRef<HTMLInputElement | null>(null);

  const handleFocus = useCallback(() => {
    searchRef.current?.focus();
  }, []);

  return (
    <section 
      className="search"
      onClick={handleFocus}
    >
      <p className="search__title">
        Search
      </p>
      <div className="search__container">
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
        />
        <div className="search__image"></div>
      </div>
    </section>
  );
};