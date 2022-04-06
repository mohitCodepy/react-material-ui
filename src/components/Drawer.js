import React, { useState } from 'react'
import { Container, Box, Typography, Chip } from '@material-ui/core'
import drawerData from '../Jsondata/drawerData.json'

export default function Drawer() {

    const [divHeight, setdivHeight] = useState('80vh');
    const [overFlow, setoverFlow] = useState('auto');
    const changeHeight = () => {
        console.log('clicked')
        divHeight === '80vh' ? setdivHeight('9vh') : setdivHeight('80vh') ;
        overFlow === 'auto'? setoverFlow('hidden'): setoverFlow('auto')
    }
    

    return (
        <div>
            <Container style={{ marginTop: '40px' }}>
                <Box>
                    <Box sx={{ color: 'white',  margin: '20px auto', width: '100%', 'textAlign': 'left', lineHeight: '40px', height: divHeight , overflow:  overFlow }}>
                        {drawerData['data'].map((dt) => {
                            return (
                                <a href='/' key={dt.name} style={{ 'margin': '5px', 'color': 'white', 'textDecoration': 'none' }}>
                                    <Typography style={{ 'display': 'inline', 'marginRight': '5px', color: 'rgb(255 255 255/var(1))' }} variant="body2">{dt.name}</Typography>
                                    <Chip label={dt.num} size="small" style={{backgroundColor: 'hsla(0,0%,100%,.1)', color: 'rgba(239,242,246,.6)'}}/>
                                </a>
                            )
                        })}
                    </Box>
                    <Box sx={{ width: '100%' }} onClick={changeHeight}>
                        hide
                    </Box>
                </Box>
            </Container>
        </div>
    )
}
