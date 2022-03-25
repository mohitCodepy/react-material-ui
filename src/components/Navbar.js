import React from 'react'
import {
  Container,
  Toolbar,
  Box,
  AppBar,
  Typography
} from '@material-ui/core';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

export default function Navbar() {
  
  const currentNav = 'Problems'
    const NavItems = [{ 'name': 'Explore' },
    { 'name': 'Problems' },
    { 'name': 'Contest' },
    { 'name': 'Discuss' },
    { 'name': 'Interview', type: 'dropdown' },
    { 'name': 'Store', type: 'dropdown', color:'orange' }];
  

    const NavStyle = (it) =>{
      return {
        margin: '10px',
        padding: '13px 0px', 
        color: currentNav === it.name ? 'rgba(255,255,255,var(1))' : (it.color? it.color: 'rgba(239,241,246,.75)'),
        fontWeight: currentNav === it.name ? '1000px' : '100px',
        borderBottom: currentNav === it.name ? '2px solid white' : 'none', 
        borderRadius: '2px', 
        borderBottomWidth: 3,
        fontSize: '15px'
        
      }
    }
    

  return (
    <Box component={'nav'}>
      <AppBar mb={0} style={{ 'background': '#292829', 'opacity': 0.97, 'height': '7vh', 'justifyContent': 'center' }}>
        <Container maxWidth='lg'>
          <Toolbar style={{height: '100%', width: '100%'}}>
            <img alt='leetcode logo' src="https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png" width={18} height={23} />
            <Box style={{ display: 'flex', alignItems: 'center', textAlign: 'center', margin: '0px 25px' }}>
              {NavItems.map((it) => {
                return (<><Typography style={NavStyle(it)} key={it.name}>{it.name}</Typography>{it.type ?<ArrowDropDownOutlinedIcon/>: ''}</>)
              })}

            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
