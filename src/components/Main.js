import React from 'react'
import { Container, Grid } from '@material-ui/core'
import Contest from './Contest'
import SideBar from './SideBar'

export default function Main() {
    return (
        <div style={{ marginTop: '80px' }}>
            <Container>
                <Grid container>
                    <Grid item lg={10}>
                        <Contest />
                    </Grid>
                    <Grid item lg={2}>
                        <SideBar />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}


