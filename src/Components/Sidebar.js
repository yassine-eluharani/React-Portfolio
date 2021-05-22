import React from 'react'
import styled from 'styled-components'
import Navigation from '../Components/Navigation'
function Sidebar() {
    return (
        <SidebarStyle>
            <Navigation />
        </SidebarStyle>
    )
}

const SidebarStyle = styled.div`
    width : 16.3rem;
    height : 100vh;
    position : fixed;
    background-color : var(--sidebar-dark-color);
`

export default Sidebar
