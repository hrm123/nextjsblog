import React, { FC } from 'react'
import Nav from './nav'

interface LayoutProps {
  children: React.ReactElement
}

const Layout: FC<LayoutProps> = (props) => {
  return (
    <>
        <Nav></Nav>
        <main>{props.children}</main>
    </>
  )
}

export default Layout;