import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
        
             <NavLinkWrapper>
            <NavLink href="/sale">Sale</NavLink>
            <BoldNavLink>Sale</BoldNavLink>
          </NavLinkWrapper>
          <NavLinkWrapper>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <BoldNavLink>New&nbsp;Releases</BoldNavLink>
          </NavLinkWrapper>
          <NavLinkWrapper>
            <NavLink href="/men">Men</NavLink>
            <BoldNavLink>Men</BoldNavLink>
          </NavLinkWrapper>
          <NavLinkWrapper>
            <NavLink href="/women">Women</NavLink>
            <BoldNavLink>Women</BoldNavLink>
          </NavLinkWrapper>
          <NavLinkWrapper>
            <NavLink href="/kids">Kids</NavLink>
            <BoldNavLink>Kids</BoldNavLink>
          </NavLinkWrapper>
          <NavLinkWrapper>
            <NavLink href="/collections">Collections</NavLink>
            <BoldNavLink>Collections</BoldNavLink>
          </NavLinkWrapper>
          
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavLinkWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const NavLink = styled.a`
  display: block;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  transition: transform 300ms;
  will-change: transform;
 transform: translateY(0);
  ${NavLinkWrapper}:first-of-type > & {
    color: var(--color-secondary);
  }

   @media (prefers-reduced-motion: no-preference){
    ${NavLinkWrapper}:hover &, ${NavLinkWrapper}:focus & {
    transform: translateY(-100%);
    transition: transform 600ms;
   
  }
  }
`;

const BoldNavLink = styled(NavLink)`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(100%);
  font-weight: ${WEIGHTS.bold};
  @media (prefers-reduced-motion: no-preference){
    ${NavLinkWrapper}:hover &, ${NavLinkWrapper}:focus & {
     transform: translateY(0);
    transition: transform 600ms;
   }   
  }
   
`;



export default Header;
