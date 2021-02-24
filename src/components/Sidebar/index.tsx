import React from 'react'
import { SidebarStyles } from './style'

interface SidebarProps {
  children: React.ReactNode
}

const Sidebar = ({ children }: SidebarProps) => {
  const [visible, setVisible] = React.useState(true)
  const { SidebarBase, Content, SideButton } = SidebarStyles

  return (
    <SidebarBase visible={visible}>
      <Content>
        {children}
        <SideButton onClick={() => setVisible(!visible)}>{'>'}</SideButton>
      </Content>
    </SidebarBase>
  )
}

export default Sidebar
