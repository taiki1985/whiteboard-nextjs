import MainFrame from '../../components/MainFrame'
import type { NextPage } from 'next'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import DataGridInfo from '../../components/DataGrid';
import Grid from '@mui/material/Grid';
import BasicSpeedDial from '../../components/SpeedDial';
import BasicBreadcrumbs from '../../components/Breadcrumbs';
import Divider from '@mui/material/Divider';
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
            <BasicSpeedDial />
        </Grid>
      </MainFrame>
  )
}

export default Info
