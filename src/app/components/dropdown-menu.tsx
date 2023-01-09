import { MouseEvent, useState } from 'react';
import { Dropdown, CustomMenu } from './dropdown-menu.styled';

export interface DropdownMenuProps {
  icon: React.ReactNode;
  disabled?: boolean;
  children: React.ReactNode;
}

export default function DropdownMenu({
  icon,
  disabled,
  children,
}: DropdownMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
  ) => {
    const target = event.target as HTMLElement;

    if (target.classList.contains('MuiBackdrop-root')) {
      setAnchorEl(null);
    }
  };

  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <Dropdown aria-describedby={id} disabled={disabled} onClick={handleClick}>
        {icon}
      </Dropdown>
      <CustomMenu
        anchorEl={anchorEl}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        onClick={handleClose}
        open={open}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        {children}
      </CustomMenu>
    </>
  );
}
