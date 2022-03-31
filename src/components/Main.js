import React from 'react'
import { Container, Grid, Divider } from '@material-ui/core'
import Contest from './Contest'
import SideBar from './SideBar'
import StudyPlan from './StudyPlan'
import Drawer from './Drawer'

export default function Main() {
    return (
        <div style={{ marginTop: '25px', display: 'block' }}>
            <Container>
                <Grid container>
                    <Grid item lg={9}>
                        <Contest />
                        <StudyPlan />
                        <Divider variant='fullWidth' sx={{color: 'white'}}/>
                        <Drawer />
                    </Grid>
                    <Grid item lg={3}>
                        <SideBar />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}


