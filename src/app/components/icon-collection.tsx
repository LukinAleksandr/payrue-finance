import {
  IconCollectionList,
  IconCollectionItem,
} from './icon-collection.styled';

export interface IconCollectionProps {
  icons: JSX.Element[];
}

function IconCollection({ icons }: IconCollectionProps) {
  return (
    <IconCollectionList>
      {icons.map((icon, index) => (
        <IconCollectionItem key={index}>{icon}</IconCollectionItem>
      ))}
    </IconCollectionList>
  );
}

export default IconCollection;
