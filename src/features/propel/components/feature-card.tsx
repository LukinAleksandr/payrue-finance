import {
  FeatureRoot,
  FeatureDescription,
  FeatureTitle,
  FeatureLink,
  FeatureAnchor,
} from './feature-card.styled';

export interface FeatureCardProps {
  title: string;
  description: string[];
  link?: string;
  target?: string;
  linkTitle?: string;
}

function FeatureCard({
  title,
  description,
  link,
  target,
  linkTitle,
}: FeatureCardProps) {
  return (
    <FeatureRoot>
      <FeatureTitle variant="h5">{title}</FeatureTitle>
      {description.map((item, index) => (
        <FeatureDescription key={index} variant="subtitle2">
          {item}
        </FeatureDescription>
      ))}

      {link && target === '_blank' && (
        <FeatureAnchor
          className="link"
          href={link}
          rel="noopener noreferrer"
          target="_blank"
        >
          {linkTitle}
        </FeatureAnchor>
      )}
      {link && !target && (
        <FeatureLink className="link" to={link}>
          {linkTitle}
        </FeatureLink>
      )}
    </FeatureRoot>
  );
}

export default FeatureCard;
