import React, { useState } from 'react'
import {
  Container,
  Toolbar,
  Box,
  AppBar,
  Typography
} from '@material-ui/core';


export default function Navbar() {

  const [currentNav, setcurrentNav] = useState('Problems')
  const [NavItems, setNavItems] = useState([{ 'name': 'Explore' },
  { 'name': 'Problems' },
  { 'name': 'Contest' },
  { 'name': 'Discuss' },
  { 'name': 'Interview' }])



  return (
    <Box component={'nav'}>
      <AppBar mb={0} style={{ 'background': '#292829', 'opacity': 0.97, 'height': '7vh', 'justifyContent': 'center' }}>
        <Container maxWidth='lg'>
          <Toolbar>
            <img  alt='leetcode logo' src="https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png" width={18} height={23} />
            <Box style={{ display: 'flex', alignItems: 'center', textAlign: 'center', margin: '0px 25px'  }}>
              {NavItems.map((it) => {
                return <Typography variant='xs' style={{ margin: '10px', padding:'14px 0px', color:currentNav === it.name?'rgba(255,255,255,var(1));':'rgba(239,241,246,.75)', fontWeight:currentNav === it.name?'1000px':'100px', borderBottom:currentNav === it.name?'2px solid white':'none', borderRadius:'2px', borderBottomWidth:3}}>{it.name}</Typography>
              })}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
