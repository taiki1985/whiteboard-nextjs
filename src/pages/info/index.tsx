import MainFrame from '../../components/MainFrame'
import type { NextPage } from 'next'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import BasicSpeedDial from '../../components/SpeedDial';
import BasicBreadcrumbs from '../../components/Breadcrumbs';

const Info: NextPage = () => {
  return (
      <MainFrame>
        <BasicBreadcrumbs />
        <Typography variant='h2' gutterBottom>会社</Typography>
        <BasicSpeedDial/>
      </MainFrame>
  )
}

export default Info
