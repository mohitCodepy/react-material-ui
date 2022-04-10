import React from 'react'
import { Container, Grid, Divider } from '@material-ui/core'
import Contest from './Contest'
import SideBar from './SideBar'
import StudyPlan from './StudyPlan'
import Drawer from './Drawer'
import CategoryChips from './CategoryChips'

export default function Main() {
    return (
        <div style={{ marginTop: '25px', display: 'block'}}>
            <Container>
                <Grid container>
                    <Grid item lg={9} style={{'marginBottom': '100px'}}>
                        <Contest />
                        <StudyPlan />
                        <Container>
                            <Divider style={{ marginTop: '80px', width: '100%', backgroundColor: 'rgba(255,255,255,15%)' }} />
                        </Container>
                        <Drawer />
                        <CategoryChips />
                    </Grid>
                    <Grid item lg={3}>
                        <SideBar />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}


