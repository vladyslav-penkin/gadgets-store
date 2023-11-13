import {
  FC,
  memo,
  useState,
  useEffect,
} from 'react';
import '@components/BigSlider/BigSlider.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from '@hooks/useTheme';
import { useResize } from '@hooks/useResize';
import { BASE_URL, Banner, getBanners } from '@api/requests';
import { Loader } from '@components/Loader/Loader';
import classNames from 'classnames';


export const BigSlider: FC = memo(() => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [isError, setError] = useState<boolean>(false);
  const isMobile = useResize();

  const {
    themeIcons: {
      arrowRightIcon,
      arrowLeftIcon,
    },
  } = useTheme();

  const prevArrow = (
    <div>
      <img src={arrowLeftIcon} />
    </div>
  );
  const nextArrow = (
    <div>
      <img src={arrowRightIcon} />
    </div>
  );

  const settings = {
    infinit: false,
    dots: true,
    arrows: true,
    dotsClass: 'dot',
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    pauseOnFocus: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const loadBanners = async () => {
    try {
      setError(false);
      const response = await getBanners();
      setBanners(response);
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    loadBanners();
  }, []);

  return (
    <div className="BigSlider">
      {banners.length === 0
        ? (
          <div className={classNames('BigSlider__skeleton', {
            'BigSlider__skeleton--error': isError,
          })}>
            <div className="BigSlider__loader">
              <Loader />
            </div>
          </div>
        ) : (
          <Slider {...settings}>
            {banners.map((banner: Banner) => (
              <div className="BigSlider__item">
                <img
                  className="BigSlider__image"
                  src={`${BASE_URL}/${
                    isMobile ? banner.mobile : banner.desktop
                  }`}
                />
              </div>
            ))}
          </Slider>
        )}
    </div>
  );
});