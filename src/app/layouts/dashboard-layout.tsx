import { Theme, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '../components';
import { menuItems, menuItemsMobile } from '../utils/menu';
import { Root } from './dashboard-layout.styled';
import Footer from './footer';
import Header from './header';
import MobileActions from './mobile-actions';

export default function DashboardLayout() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleMenuToggle = (isOpen: boolean) => {
    setMenuIsOpen(isOpen);
  };

  const isDownMd = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down('md'),
  );
  const isDownLg = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down('lg'),
  );
  return (
    <Root>
      <Header
        handleMenuToggle={handleMenuToggle}
        menu={isDownMd ? menuItemsMobile : menuItems}
        variant="default"
      />
      <Container>
        <Outlet />
      </Container>
      {isDownLg ? (
        <MobileActions
          handleMenuToggle={handleMenuToggle}
          menuIsOpen={menuIsOpen}
        />
      ) : (
        <Footer />
      )}
    </Root>
  );
}
