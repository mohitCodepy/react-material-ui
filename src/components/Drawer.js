import React, { useState } from 'react'
import { Container, Box, Typography, Chip } from '@material-ui/core'
import drawerData from '../Jsondata/drawerData.json'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

export default function Drawer() {

    const [divHeight, setdivHeight] = useState('auto');
    const changeHeight = () => {
        console.log('clicked')
        divHeight === 'auto' ? setdivHeight('5vh') : setdivHeight('auto') ;
    }
    
    
    return (
        <div>
            <Container style={{ marginTop: '40px' }}>
                <Box>
                    <Box sx={{ color: 'white',  margin: '20px auto', width: '100%', 'textAlign': 'left', height: divHeight , overflow:  'hidden' }}>
                        {drawerData['data'].map((dt) => {
                            return (
                                <a href='/'  key={dt.name} style={{ 'margin': '5px', lineHeight: '40px', 'color': 'white', 'textDecoration': 'none' }}>
                                    <Typography style={{ 'display': 'inline', 'marginRight': '5px', color: 'rgb(255 255 255/var(1))' }} variant="body2">{dt.name}</Typography>
                                    <Chip label={dt.num} size="small" style={{backgroundColor: 'hsla(0,0%,100%,.1)', color: 'rgba(239,242,246,.6)'}}/>
                                </a>
                            )
                        })}
                    </Box>
                    <Box sx={{ width: '100%', color: 'white', 'marginTop': '-50px'}}>
                        <Typography variant='subtitle2' style={{'alignItems': 'center', 'display': 'flex', 'justifyContent': 'end'}} onClick={changeHeight}>
                           {divHeight==='auto'?'Collapse': 'Expand'} {divHeight==='auto'? <KeyboardDoubleArrowUpIcon fontSize="small"/>: <KeyboardDoubleArrowDownIcon fontSize="small"/>}
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}
