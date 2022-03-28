import React from 'react'
import { Container, Grid, GridList } from '@material-ui/core'
import Contest from './Contest'

export default function Main(){
    return (
        <div style={{marginTop: '80px'}}>
            <Container>
            <Grid>
                <Grid item lg={8}>
                    <Contest />
                </Grid>
                <Grid item lg={4}>
                    
                </Grid>
            </Grid>
            </Container>
        </div>
    )
}


