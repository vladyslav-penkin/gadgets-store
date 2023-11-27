import {
  FC,
  memo,
} from 'react';
import { useTheme } from '@hooks/useTheme';
import likeIconFilled from '@assets/icons/favoritesRed.svg';
import classNames from 'classnames';

type Props = {
  isItemFavorite: boolean;
  onLike: () => void;
};

export const LikeButton: FC<Props> = memo(
  ({
    isItemFavorite,
    onLike,
  }) => {
    const {
      themeIcons: {
        favoriteIcon,
      },
    } = useTheme();
    const handleLike = () => {
      onLike();
    };
  
    return (
      <button
        className={classNames(
          'card__like-button',
          {
            'card__like-button--pressed': isItemFavorite,
          }
        )}
        onClick={handleLike}
      >
        <img
          src={
            isItemFavorite
              ? likeIconFilled
              : favoriteIcon
          }
          alt="favoriteItem"
          className={classNames(
            'card__like-icon', {
              'card__like-icon--pressed': isItemFavorite
            }
          )}
        />
      </button>
    );
  }
)