import styled from 'styled-components';
import Link from 'next/link';

const NavbarContainer = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
`;

// ------------------------------------

const NavBrand = styled.a`
  /* max-width: 300px; */
  align-items: center;
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  font-family: ${(props) => props.theme.fontFamilies.primary};
  font-size: 1.5rem;
  justify-content: center;
  padding: 0.5rem 0.5rem;
  text-decoration: none;

  @media (max-width: 900px) {
    font-size: 1rem;
    max-width: 200px;
  }
`;

// ------------------------------------

const NavMenu = styled.ul`
  display: flex;
  font-size: 1.2rem;
  list-style: none;
  padding: 0.5rem 0.5rem;

  @media (max-width: 900px) {
    /* align-items: center; */
    background-color: ${(props) => props.theme.colors.white};
    display: ${(props) => (props.open ? 'flex' : 'none')};
    flex-direction: column;
    font-size: 2.6rem;
    height: 100%;
    justify-content: center;
    left: 0;
    margin-top: 0;
    opacity: ${(props) => (props.open ? 0.95 : 1)};
    padding: 0 1rem;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9998;
  }
`;

// ------------------------------------

const NavItem = styled.li`
  margin-left: 1rem;
  position: relative;

  /* add a vertical line on desktop screens */
  &:not(:last-child)::after {
    border-right: 1px solid ${(props) => props.theme.colors.primary};
    content: '';
    height: 100%;
    position: absolute;
    right: -0.5rem;
    top: 0;
  }

  @media (max-width: 900px) {
    /* hide the vertical lines on mobile screens */
    &:not(:last-child)::after {
      display: none;
    }
  }
`;

const NavLink = styled(Link)`
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  font-family: ${(props) => props.theme.fontFamilies.secondary};
  text-decoration: none;

  &:hover {
    /* color: #ccc; */
  }
`;

// ------------------------------------

const HamburgerMenu = styled.div`
  cursor: pointer;
  display: none;
  position: absolute;
  right: 1rem;
  top: 1rem;
  z-index: 10000;

  @media (max-width: 900px) {
    display: ${(props) => (props.open ? 'none' : 'block')};
  }
`;

// ------------------------------------

const CloseButton = styled.div`
  cursor: pointer;
  display: none;
  position: absolute;
  right: 1rem;
  top: 1rem;
  z-index: 10000;

  @media (max-width: 900px) {
    display: block;
    z-index: 9999;
  }
`;

// ------------------------------------

export {
  CloseButton,
  HamburgerMenu,
  NavbarContainer,
  NavBrand,
  NavItem,
  NavLink,
  NavMenu,
};
