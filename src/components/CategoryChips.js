import React from 'react'
import { Container, Chip, Box } from '@mui/material';
import SchemaOutlinedIcon from '@mui/icons-material/SchemaOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import SdStorageOutlinedIcon from '@mui/icons-material/SdStorageOutlined';
import RouteOutlinedIcon from '@mui/icons-material/RouteOutlined';
import PriceCheckOutlinedIcon from '@mui/icons-material/PriceCheckOutlined';


const chipData = [
  { name: 'All Topics', 'image': <Inventory2OutlinedIcon fontSize="small" />, 'active': 'true' },
  { name: 'Algorithms', 'image': <SchemaOutlinedIcon fontSize="small" style={{ color: "orange" }} /> },
  { name: 'Database', 'image': <SdStorageOutlinedIcon fontSize="small" style={{ color: "blue" }} /> },
  { name: 'Shell', 'image': <PriceCheckOutlinedIcon fontSize="small" style={{ color: "green" }} /> },
  { name: 'Concurrency', 'image': <RouteOutlinedIcon fontSize="small" style={{ color: "purple" }} /> },

]

const chipStyle = (ch) => {
  return {
    marginLeft: '5px',
    marginRight: '5px',
    color: ch.active === 'true' ? 'black': 'white',
    backgroundColor: ch.active === 'true' ? 'whitesmoke' : 'hsla(0,0%,100%,.1)',
    width: '130px',
    height: '40px',
    borderRadius: '26px',
    border: 'transparent'
  }
}

export default function CategoryChips() {
  return (
    <Box>
      <Container style={{ justifyContent: 'flex-start', display: 'flex' }}>
        {chipData.map((ch) => {
          return (<Chip sx={chipStyle(ch)} icon={ch.image} label={ch.name} size='big' variant="outlined" />)
        })
        }
      </Container>
    </Box>
  )
}
