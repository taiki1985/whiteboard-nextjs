import MainFrame from '../../components/MainFrame'
import type { NextPage } from 'next'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';


const Info: NextPage = () => {
  return (
    <>
      <MainFrame>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            TOP
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            基本情報
          </Link>
          <Typography color="text.primary">新規作成</Typography>
        </Breadcrumbs>
      </MainFrame>
    </>
  )
}

export default Info
