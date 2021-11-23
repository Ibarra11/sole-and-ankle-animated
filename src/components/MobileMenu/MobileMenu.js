/* eslint-disable no-unused-vars */
import React from 'react';
import styled, {keyframes} from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { CSSTransition } from 'react-transition-group';

import { QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  console.log(isOpen);
  return (
    
    <Wrapper isOpen={isOpen} onDismiss={onDismiss}>
      <Backdrop />
      <Content isOpen={isOpen}   aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          <NavLink delay="900ms" href="/sale">Sale</NavLink>
          <NavLink delay="920ms" href="/new">New&nbsp;Releases</NavLink>
          <NavLink delay="940ms" href="/men">Men</NavLink>
          <NavLink delay="960ms" href="/women">Women</NavLink>
          <NavLink delay="980ms" href="/kids">Kids</NavLink>
          <NavLink delay="1000ms" href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <SubLink href="/terms">Terms and Conditions</SubLink>
          <SubLink href="/privacy">Privacy Policy</SubLink>
          <SubLink href="/contact">Contact Us</SubLink>
        </Footer>
      </Content>

    </Wrapper>
  );
};

const fadeIn = keyframes`
  0%{
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const slide = keyframes`
  0%{
    transform: translateX(100%);
  }
  100%{
    transform: translateX(0%);
  }
`;

const Wrapper = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  display: flex;
  justify-content: flex-end;
  
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.8);
  animation: ${fadeIn} 1s ease-out;
`;

const Content = styled(DialogContent)`
--overfill: 16px;
position: relative;
  background: white;
  width: calc(300px + var(--overfill));
  height: 100%;
  padding: 24px 32px;
  margin-right: calc(var(--overfill) * -1);
  display: flex;
  flex-direction: column;
  animation: ${slide} 500ms cubic-bezier(.09,.63,.36,1.20) both;
  animation-delay: 300ms;

`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: var(--overfill);
  padding: 16px;
  animation: ${fadeIn} 200ms ease-out backwards;
  animation-delay: 1000ms;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;
  &:first-of-type {
    color: var(--color-secondary);
  }
  animation: ${fadeIn} 200ms ease-out backwards;
  animation-delay: ${p => p.delay};
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
  animation: ${fadeIn} 200ms ease-out backwards;
  animation-delay: 1000ms;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;



export default MobileMenu;
