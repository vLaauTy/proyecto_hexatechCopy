import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import { FaMagento } from 'react-icons/fa'

export const Nav = styled.nav`
  background: ${({scrollNav}) => (scrollNav ? '#324093' : 'transparent')};
 background:var(--BlueColor200);
  height: 140px;
  margin-top: -140px;
  display:flex;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top:0;
  left:0;
  z-index:10;
  width:100%;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 1rem;
  max-width: 1700px;
`
export const NavLogo = styled(LinkR) `
  color:#fff;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: 400;
  text-decoration: none;
  width:50%;

  @media screen and (max-width:480px) {
    width:10%
  }
`
export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 1024px) {
    display: block;
    position: absolute;
    top: 0;
    right: 5%;
    transform: translate(-100%, 60%);
    font-size: 2rem;
    cursor: pointer;
    color: #324093;
  }

  @media screen and (max-width: 480px) {
    right: 0;
    font-size:1.3rem;
  }
`
export const NavMenu = styled.ul`
  display:flex;
  justify-content: flex-end;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  width:50%;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`
export const NavItem = styled.li`
  height: 80px;
  padding:1.5rem 0;
`
export const NavLinks = styled(LinkS)`
  color: var(--NavLinkOff);
  display: flex;
  align-items: center;
  padding: 0 0.2rem;
  height: 100%;
  cursor: pointer;
  margin:0 4rem;
  font-family:'Teko', sans-serif;
  font-weight:500;
  font-size:20px;
  line-height:100px;

  &.active {
    border-bottom: 3px solid var(--BlueColor);
    color:var(--BlueColor);
  }

  @media screen and (max-width: 1000px) {
    margin:0 2.5rem;
  }

  @media screen and (max-width: 860px) {
    margin:0 1.5rem;
  }
`
export const NavIcon = styled.img `
    margin-right:1rem;
    font-size:3rem;
`;

export const NavText=styled.span`
color:var(--BlueColor);
font-weight:500;
font-size:20px;
width:10%;
  font-weight:400;
  letter-spacing:1.5px;
  line-height:25px;
`;