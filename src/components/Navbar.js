import React from 'react'
import { 
    Toolbar,
    ListItem,
    IconCutton,
    ListItemText,
    Avatar,
    Divider,
    Box,
    AppBar
} from '@material-ui/core';
export default function Navbar() {
  return (
    <Box component={'nav'}>
      <AppBar mb={0} style={{'background': '#292829', 'opacity':0.9, 'height': '9vh',  'justifyContent': 'center'}}>
          <Toolbar my={0}>
          <img src="https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png" width={20} height={24} />
          </Toolbar>
      </AppBar>
    </Box>
  )
}
