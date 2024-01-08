import { FC, useEffect } from 'react';
import './ContactsPage.scss';
import { ContactsCard } from '@components/ContactsCard/ContactsCard';
import { Container } from '@components/Container/Container';
import linkedin from '@assets/icons/linkedin.svg';
import github from '@assets/icons/github.svg';
import email from '@assets/icons/email.svg';

const teamContacts = [
  { image: linkedin,  link: 'https://www.linkedin.com/in/vladyslav-penkin-frontend/' },
  { image: github, link: 'https://github.com/vladyslav-penkin' },
  { image: email, link: 'mailto:vladyslav-penkin@gmail.com' },
];

export const ContactsPage: FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <article className="contactsPage">
        <h1 className="contactsPage__title">Our team</h1>
        <ContactsCard
          name="Vladyslav Penkin"
          position="Developer"
          image={'https://avatars.githubusercontent.com/u/102480337?v=4'}
          contacts={teamContacts}
        />
      </article>
    </Container>
  );
}