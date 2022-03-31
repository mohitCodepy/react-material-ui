import React from 'react'
import { Container, Box, Typography } from '@material-ui/core'

export default function StudyPlan() {

    const planBox = [
        {
            image: 'https://assets.leetcode.com/users/images/a4da2027-f24d-4f5c-a422-acbee37a57f2_1631074524.9040322.webp',
            title: '14 Days Study Plan to Crack Algo'
        },
        {
            image: 'https://assets.leetcode.com/users/images/64e7e7fe-de92-4d45-a8ce-dfd4a4651413_1631074567.1577404.webp',
            title: '2 Weeks Study Plan to Tackle DS'
        },
        {
            image: 'https://assets.leetcode.com/users/images/8b485cbb-d0ec-46ee-a7ba-40a352427bc1_1631074616.9355948.webp',
            title: 'Ultimate DP Study Plan'
        },
        {
            image: 'https://assets.leetcode.com/users/images/300d5e2b-c2e4-4932-bfbd-919bd6e840c2_1645773508.4999166.png',
            title: 'Programming Skills Study Plan'
        },
        {
            image: 'https://assets.leetcode.com/users/images/69c446f4-d95d-4b13-9545-9cac78b537d9_1645773548.983013.png',
            title: 'Graph Theory Study Plan'
        },

    ]

    const boxImageStyle = {
        width: '152.4px',
        height: '150px',
    }


    return (
        <div style={{ display: 'block' }}>
            <Container style={{ marginTop: '50px', display: 'flex', justifyContent: 'space-between' }}>
                {planBox.map((ps) => {
                    return (<Box key={ps.title} sx={boxImageStyle}>
                        <img src={ps.image} alt="" style={{ borderRadius: '6%', width: '100%', height: '100%' }} />
                        <Typography variant='subtitle1' style={{
                            color: 'white', textAlign: 'center', fontSize: '.875rem',
                            lineHeight: '1.25rem', fontWeight: 'normal'
                        }}>
                            {ps.title}
                        </Typography>
                    </Box>)
                })}
            </Container>
        </div>
    )
}
