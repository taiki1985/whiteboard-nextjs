import MainFrame from '../../components/MainFrame'
import type { NextPage } from 'next'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import DataGridInfo from '../../components/DataGrid';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import BasicSpeedDial from '../../components/SpeedDial';
import CreateIcon from '@mui/icons-material/Create';
import BasicBreadcrumbs from '../../components/Breadcrumbs';

const Info: NextPage = () => {
  return (
      <MainFrame>
        <BasicBreadcrumbs />
        <Grid container columns={{ xs:2, sm:3 }} spacing={2} sx={{ width: {xs: '100%', md: '65%'}}}>
            <Grid item xs={1}>
              <Typography variant='h3'>会社</Typography>
            </Grid>
            <Grid item xs={3} textAlign='right'>
            <Fab variant="extended" color='primary'>
              <CreateIcon  sx={{ mr: 1 }} />
              新規作成
            </Fab>
            </Grid>
            <Grid item xs={3}>
              <DataGridInfo />
            </Grid>
            <Grid item xs={3} textAlign='right'>
            <Fab color="secondary" aria-label="add">
                <FirstPageIcon />
              </Fab>
            </Grid>
          </Grid>
      </MainFrame>
  )
}

export default Info
