import { Box, Container } from '@material-ui/core'
import React from 'react'

export default function Contest() {

    const imageStyle = {
        width: '100%',
        height: '100%',
        borderRadius: '4%',
    }

    const imageUrl = [{
        'image': 'https://assets.leetcode.com/users/images/66e6ca04-89ae-4219-b33a-dcdbac52db24_1648238641.63336.png'
    },
    {
        'image': 'https://assets.leetcode.com/users/images/46bbe046-6030-45ee-b6cb-f334d02db90f_1624653186.6738565.png'
    }]
    return (
        <div>
            <Container style={{ 'display': 'flex', 'border': '3px solid white', 'justifyContent': 'start' }}>
                {imageUrl.map((im) => {
                    return (<Box key={im.image} sx={{ border: '3px solid white', width: '250px', height: '140px' }}>
                        <img src={im.image} alt={im.image} style={imageStyle} />
                    </Box>
                    )
                })}
            </Container>
        </div>
    )
}
