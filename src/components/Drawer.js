import React, { useState } from 'react'
import { Container, Box, Typography, Chip } from '@material-ui/core'
import drawerData from '../Jsondata/drawerData.json'

export default function Drawer() {

    const [divHeight, setdivHeight] = useState('80vh');
    const [overFlow, setoverFlow] = useState('auto');
    const changeHeight = () => {
        console.log('clicked')
        setdivHeight('5vh');
        setoverFlow('hide');
    }

    return (
        <div>
            <Container style={{ marginTop: '40px' }}>
                <Container style={{ justifyContent: 'space-between', color: 'white', margin: '20px auto', width: '100%', border: '2px solid red' }}>
                    <Box sx={{ color: 'white', lineHeight: '80px', height: { divHeight }, overflow: { overFlow } }}>
                    {drawerData['data'].map((dt)=>{
                        return (
                            <a href='/' key={dt.name} style={{'margin': '15px', 'color': 'white', 'textDecoration': 'none'}}>
                                <Typography style={{'display': 'inline', 'marginRight': '5px'}} variant="body2">{dt.name}</Typography>
                                <Chip label={dt.num} size="small"/>
                            </a>
                        )
                    })}
                    </Box>
                    <Box sx={{ width: '100%' }} onClick={changeHeight}>
                        hide
                    </Box>
                </Container>
            </Container>
        </div>
    )
}
