import { FC } from 'react';

type Props = {
  href: string;
  content: string;
};

export const FooterLink: FC<Props> = ({
  href,
  content
}) => {
  return (
    <li className="footer__item">
      <a
        href={href}
        className="footer__link"
      >
        {content}
      </a>
    </li>
  )
};