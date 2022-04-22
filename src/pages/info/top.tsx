import MainFrame from '../../components/MainFrame'
import type { NextPage } from 'next'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import Link from '@mui/material/Link';
import TopCard from '../../components/TopCard';
import ApartmentIcon from '@mui/icons-material/Apartment';
import HotelIcon from '@mui/icons-material/Hotel';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import {blue, green, amber} from '@mui/material/colors';


const Info: NextPage = () => {
  return (
    <>
      <MainFrame>
        <Breadcrumbs  aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            TOP
          </Link>
          <Typography color="text.primary">基本情報</Typography>
        </Breadcrumbs>
        {/* 基本情報カード群 */}
          <Grid container columns={{ xs:2, sm:3 }} spacing={2} sx={{ width: {xs: '100%', md: '65%'}}}>
            <Grid item xs={1}>
              <TopCard title='会社' themeColor= {green[500]} themeIcon={<ApartmentIcon fontSize='large' />}/>
            </Grid>
            <Grid item xs={1}>
              <TopCard title='航空会社' themeColor={blue[500]} themeIcon={<AirplanemodeActiveIcon fontSize='large' />}/>
            </Grid>
            <Grid item xs={1}>
              <TopCard title='ホテル' themeColor={amber[500]} themeIcon={<HotelIcon fontSize='large' />}/>
            </Grid>
            <Grid item xs={3} textAlign='left'>
              <Fab color="primary" aria-label="add">
                <FirstPageIcon />
              </Fab>
            </Grid>
          </Grid>
      </MainFrame>
    </>
  )
}

export default Info
