import React from 'react'
import { Container, Grid } from '@material-ui/core'
import Contest from './Contest'
import SideBar from './SideBar'
import StudyPlan from './StudyPlan'

export default function Main() {
    return (
        <div style={{ marginTop: '80px' }}>
            <Container>
                <Grid container>
                    <Grid item lg={10}>
                        <Contest />
                        <StudyPlan />
                    </Grid>
                    <Grid item lg={2}>
                        <SideBar />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}


