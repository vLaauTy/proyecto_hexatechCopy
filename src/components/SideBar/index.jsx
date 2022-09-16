import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='home' onClick={toggle}>Inicio</SidebarLink>
          <SidebarLink to='nosotros' onClick={toggle}>Nosotros</SidebarLink>
          <SidebarLink to='productos' onClick={toggle}>Productos</SidebarLink>
          <SidebarLink to='contacto' onClick={toggle}>Contacto</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
