import { CallMade, ExpandMore } from '@mui/icons-material';
import {
  NavigationStyles,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuNavLink,
  NavigationMenuDropItem,
  NavigationMenuDropValue,
  NavigationMenuDropdown,
  NavigationSwitchTheme,
} from './navigation.styled';

export interface INavigation {
  options: NavItemProps[];
}

export interface SubItemProps {
  id: number;
  label: string;
  value: string;
  target?: string;
}

export interface NavItemProps {
  id: number;
  label: string;
  value?: string;
  target?: string;
  children?: SubItemProps[];
}

export default function Navigation({ options }: INavigation) {
  const renderDropdown = (option: NavItemProps) =>
    option.target ? (
      <NavigationMenuLink href={option.value} target={option.target}>
        {option.label}
        <CallMade sx={{ width: 20, marginLeft: '4px' }} />
      </NavigationMenuLink>
    ) : (
      <NavigationMenuNavLink to={option.value || ''}>
        {option.label}
      </NavigationMenuNavLink>
    );

  return (
    <NavigationStyles>
      <NavigationMenuList>
        {options.map((option) => (
          <NavigationMenuItem key={option.id}>
            <NavigationMenuDropItem>
              {option.value ? (
                renderDropdown(option)
              ) : (
                <NavigationMenuDropValue>
                  {option.label}
                  {option.children && (
                    <ExpandMore sx={{ width: 20, marginLeft: '4px' }} />
                  )}
                </NavigationMenuDropValue>
              )}
              {option.children && (
                <NavigationMenuDropdown>
                  {option.children?.map((c) =>
                    c.target ? (
                      <NavigationMenuLink
                        key={c.id}
                        href={c.value}
                        target={c.target}
                      >
                        {c.label}
                        <CallMade sx={{ width: 20, marginLeft: '4px' }} />
                      </NavigationMenuLink>
                    ) : (
                      <NavigationMenuNavLink key={c.id} to={c.value}>
                        {c.label}
                      </NavigationMenuNavLink>
                    ),
                  )}
                </NavigationMenuDropdown>
              )}
            </NavigationMenuDropItem>
          </NavigationMenuItem>
        ))}
        <NavigationSwitchTheme />
      </NavigationMenuList>
    </NavigationStyles>
  );
}
