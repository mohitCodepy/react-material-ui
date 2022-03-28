import React from 'react'
import { Container, Grid } from '@material-ui/core'
import Contest from './Contest'

export default function Main(){
    return (
        <div style={{marginTop: '80px'}}>
            <Container>
                <Grid lg={8}>
                    <Contest />
                </Grid>
            </Container>
        </div>
    )
}


