import React from 'react'
import {
  Container,
  Toolbar,
  Box,
  AppBar,
  Typography,
  Button,
  Avatar
} from '@material-ui/core';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import QueuePlayNextOutlinedIcon from '@mui/icons-material/QueuePlayNextOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

export default function Navbar() {

  const currentNav = 'Problems'
  const NavItems = [
    { 'name': 'Explore' },
    { 'name': 'Problems' },
    { 'name': 'Contest' },
    { 'name': 'Discuss' },
    { 'name': 'Interview', type: 'dropdown' },
    { 'name': 'Store', type: 'dropdown', color: 'orange' }
  ];


  const NavStyle = (it) => {
    return {
      margin: it.type ? '20px 5px' : '10px 14px',
      padding: '13px 0px',
      color: currentNav === it.name ? 'rgba(255,255,255,var(1))' : (it.color ? it.color : 'rgba(239,241,246,.75)'),
      fontWeight: currentNav === it.name ? '1000px' : '100px',
      borderBottom: currentNav === it.name ? '3px solid #fff ' : 'none',
      borderRadius: '1px',
      borderBottomWidth: 3,
      fontSize: '15px'

    }
  }

  return (
    <Box component={'nav'}  sx={{ position: 'sticky' }} >
      <AppBar mb={0} position="static" style={{ 'background': '#292829', 'opacity': 0.97, 'height': '7vh', 'justifyContent': 'center' }}>
        <Container maxWidth='lg'>
          <Toolbar style={{ height: '100%', width: '100%' }}>
            <img alt='leetcode logo' src="https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png" width={19} height={23} />
            <Box style={{ display: 'flex', alignItems: 'center', textAlign: 'center', margin: '0px 25px' }}>
              {NavItems.map((it) => {
                return (<><Typography style={NavStyle(it)} key={it.name}>{it.name}</Typography>{it.type ? <ArrowDropDownOutlinedIcon /> : ''}</>)
              })}
            </Box>
            <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'end', marginRight: '50px', textAlign: 'center', width: "100%" }}>
              <Button size='medium' variant="contained" style={{ textTransform: 'capitalize', backgroundColor: 'hsla(0,0%,100%,.1)', color: 'orange' }}>Premium</Button>
              <Button style={{ 'marginLeft': '13px', color: '#8B8A8B' }}><QueuePlayNextOutlinedIcon /></Button>
              <Button style={{ 'marginRight': '5px', color: '#8B8A8B' }}><NotificationsOutlinedIcon /></Button>
              <Avatar alt="mohit rathore" src="https://assets.leetcode.com/users/mohitOnlyCodeLover/avatar_1621591285.png" style={{ height: 23, width: 23 }} />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
