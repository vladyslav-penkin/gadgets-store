import { FC, memo } from 'react';
import './LikeButton.scss';
import classNames from 'classnames';
import { useTheme } from '@hooks/useTheme';
import likeIconFilled from '@assets/icons/favoritesRed.svg';

type Props = {
  isItemFavorite: boolean;
  onLike: () => void;
};

export const LikeButton: FC<Props> = memo(({ isItemFavorite, onLike }) => {
  const { themeIcons: { favoriteIcon } } = useTheme();
  
  return (
    <button
      className={classNames(
        'card__like-button',
        { 'card__like-button--pressed': isItemFavorite }
      )}
      onClick={onLike}
    >
      <img
        src={isItemFavorite ? likeIconFilled : favoriteIcon}
        alt="favoriteItem"
        className={classNames(
          'card__like-icon',
          { 'card__like-icon--pressed': isItemFavorite }
        )}
      />
    </button>
  );
});