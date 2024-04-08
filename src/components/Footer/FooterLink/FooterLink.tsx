import { FC, memo } from 'react';

type Props = {
  href: string;
  content: string;
};

export const FooterLink: FC<Props> = memo(({ href, content }) => {
  return (
    <li className="footer__item">
      <a href={href} className="footer__link">
        {content}
      </a>
    </li>
  )
});