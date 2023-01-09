import {
  NetworkRoot,
  NetworkImage,
  NetworkDetails,
  NetworkTitle,
  NetworkLink,
} from './network-card.styled';

export interface NetworkCardProps {
  img: string;
  title: string;
  link: string;
  url: string;
}

function NetworkCard({ img, title, link, url }: NetworkCardProps) {
  return (
    <NetworkRoot>
      <NetworkImage alt={title} src={img} />
      <NetworkDetails>
        <NetworkTitle variant="subtitle2">{title}</NetworkTitle>
        <NetworkLink href={url} rel="noopener noreferrer" target="_blank">
          {link}
        </NetworkLink>
      </NetworkDetails>
    </NetworkRoot>
  );
}

export default NetworkCard;
