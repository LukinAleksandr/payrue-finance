import { AnimateSharedLayout } from 'framer-motion/dist/framer-motion';
import {
  SwitcherStyles,
  SwitcherItem,
  SwitcherName,
  SwitcherItemBackground,
} from './switcher.styled';

export interface SwitcherItem {
  id: number;
  name: string;
}

export interface SwitcherProps {
  items: SwitcherItem[];
  active: SwitcherItem;
  clickHandle: (item: SwitcherItem) => void;
}

function Switcher({ items, active, clickHandle, ...props }: SwitcherProps) {
  return (
    <AnimateSharedLayout>
      <SwitcherStyles {...props}>
        {items.map((item) => {
          const isSelected = item.name === active.name;
          return (
            <SwitcherItem
              key={item.id}
              layout
              onClick={() => clickHandle(item)}
            >
              <SwitcherName active={isSelected}>{item.name}</SwitcherName>
              {isSelected && <SwitcherItemBackground layoutId="background" />}
            </SwitcherItem>
          );
        })}
      </SwitcherStyles>
    </AnimateSharedLayout>
  );
}

export default Switcher;
