import { FC } from 'react';
import './ContactsCard.scss';
import { Contacts } from '@/types/Contacts';

type Props = {
  name: string;
  position: string;
  image: string;
  contacts: Contacts[]; 
};

export const ContactsCard: FC<Props> = ({
  name,
  position,
  image,
  contacts,
}) => {
  return (
    <figure className="contacts-card">
      <img
        className="contacts-card__logo"
        src={image} 
        alt={name}
      />
      <figcaption className="contacts-card__description">
        <h2 className="contacts-card__title">
          {name}
        </h2>
        <p className="contacts-card__position">{position}</p>
        <div className="contacts-card__icons">
          {contacts.map((contact: Contacts) => (
            <a href={contact.link} key={contact.link}>
              <img
                className="contacts-card__icon"
                src={contact.image}
                alt={contact.link}
              />
            </a>
          ))}
        </div>
      </figcaption>
    </figure>
  );
};