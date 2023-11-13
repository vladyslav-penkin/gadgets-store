import { FC } from 'react';
import './ProductPageSkeleton.scss';
import { Container } from '@/components/Container/Container';

export const ProductPageSkeleton: FC = () => {
  const TechSpecs = {
    screen: 'screen',
    resolution: 'resolution',
    processor: 'processor',
    RAM: 'RAM',
  };
  const quantityAboutText = ['1', '2', '3', '4', '5', '6', '7', '8'];
  const quantityColors = ['1', '2', '3'];
  const quantityCapacity = ['1', '2', '3'];

  return (
    <Container>
      <div className="grid">
        <div className="grid__item grid__phone
          grid__item-tablet--1-12 grid__item-desktop--1-24">
          <div className="scelet-line"></div>
          <div className='scelet-title'></div>
        </div>
      </div>

      <div className="scelet-settings">
        <div className="grid">
          <div className="grid__item grid__phone
          grid__item-tablet--8-12 grid__item-desktop--14-21">
            <div className="scelet-settings__container">
              <div className="scelet-settings__container-colors">
                <p className="scelet-settings__title">Available colors</p>
                <p className="scelet-settings__title scelet-settings__title--id">
                  ID:
                  <div className="scelet-settings__title-div"></div>
                </p>
              </div>

              <div className="scelet-settings__colors">
                {quantityColors.map((color: string) => (
                  <div className="scelet-settings__button-color" key={color}>
                    <div
                      className={`scelet-settings__color scelet-settings__color--none`}
                    >
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <p className="scelet-settings__title">Select capacity</p>

          <div className="scelet-settings__capacities">
              {quantityCapacity.map((capacity: string) => (
                <div 
                  className="scelet-settings__button-capacity" 
                  key={capacity}
                >
                  <div className="scelet-settings__button-capacity_in"></div>
                </div>
              ))}
          </div>

          <div className="scelet-settings__add-header">
            <div className="scelet-settings__add-current-price">
            &#36;0000
            </div>
            <div className="scelet-settings__add-prev-price">
            &#36;0000
            </div>
          </div>

          <div className="scelet-settings__add-buttons">
            <div>
            </div>

            <div>
            </div>
          </div>

          <div className="scelet-settings__buttons">
            <div className="scelet-settings__cart-button"></div>
            <div className="scelet-settings__fav-button"></div>
          </div>

          <div className="scelet-settings__add-tablet">
            {Object.entries(TechSpecs).map(([key, value]) => (
              <div className="scelet-about__option" key={key}>
                <p className="scelet-about__option-name">{key}</p>
                <div className="scelet-about__option-content">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <section className="scelet-about">
      <div className="grid">
        <div className="grid__item grid__phone
          grid__item-tablet--1-12 grid__item-desktop--1-12">
           <div>
             <h2 className="scelet-about__title">About</h2>

              <div className="scelet-about__content">
                <div className="scelet-about__container">
                  <div className="scelet-about__small-title
                  scelet-about__small-titlee">
                    And then...
                  </div>

                  {quantityAboutText.map((text: string) => (
                    <div className="scelet-about__text" key={text}></div>
                  ))}

                  <h3 className="scelet-about__small-title">
                    Camera
                  </h3>

                  {quantityAboutText.map((text: string) => (
                    <div className="scelet-about__text" key={text}></div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid__item grid__phone
          grid__item-tablet--1-12 grid__item-desktop--14-24">
          <h2 className="scelet-about__title">Tech specs</h2>

          <div className="scelet-about__content">
            <div className="scelet-about__option">
              <p className="scelet-about__option-name">screen</p>
              <div className="scelet-about__option-content">screen</div>
            </div>

            <div className="scelet-about__option">
              <p className="scelet-about__option-name">resolution</p>
              <div className="scelet-about__option-content">resolution</div>
            </div>

            <div className="scelet-about__option">
              <p className="scelet-about__option-name">processor</p>
              <p className="scelet-about__option-content">processor</p>
            </div>

            <div className="scelet-about__option">
              <p className="scelet-about__option-name">RAM</p>
              <div className="scelet-about__option-content">RAM</div>
            </div>

            <div className="scelet-about__option">
              <p className="scelet-about__option-name">Built in memory</p>
              <div className="scelet-about__option-content">
                Built in memory
              </div>
            </div>

            <div className="scelet-about__option">
              <p className="scelet-about__option-name">camera</p>
              <div className="scelet-about__option-content">camera</div>
            </div>

            <div className="scelet-about__option">
              <p className="scelet-about__option-name">zoom</p>
              <div className="scelet-about__option-content">zoom</div>
            </div>

            <div className="scelet-about__option">
              <p className="scelet-about__option-name">cell</p>
              <div className="scelet-about__option-content">cell</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Container>
  );
};