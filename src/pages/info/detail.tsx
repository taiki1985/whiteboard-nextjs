import MainFrame from '../../components/MainFrame'
import type { NextPage } from 'next'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import BasicSpeedDial from '../../components/SpeedDial';
import BasicBreadcrumbs from '../../components/Breadcrumbs';
import DetailTable from '../../components/DetailTable';


const Info: NextPage = () => {
  return (
      <MainFrame>
        <BasicBreadcrumbs />
        <Typography variant='h3'>会社</Typography>
        <Grid container columns={12}>
          <Grid item xs={10} sm={8}>
            <DetailTable />
          </Grid>
        </Grid>
        <BasicSpeedDial />
      </MainFrame>
  )
}

export default Info
