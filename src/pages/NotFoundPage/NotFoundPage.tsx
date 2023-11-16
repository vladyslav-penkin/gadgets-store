import { FC } from 'react';
import { Container } from '@components/Container/Container';
import { PageNotFound } from '@components/PageNotFound/PageNotFound';
import pageError from '@assets/icons/404.svg';

export const NotFoundPage: FC = () => {
  return (
    <Container>
      <PageNotFound
        image={pageError}
        title={'Oops, this page doesn`t exist...'}
        link={''}
        button={'Take me home!'}
      />
    </Container>
  );
}