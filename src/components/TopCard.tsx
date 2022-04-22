import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

type Props = {
  title : string,
  themeColor : any,
  themeIcon : any,
}

export default function TopCard(props: Props) {
  return (
    <Card sx={{
        width: {xs: 100, sm: 135},
        height: {xs: 100, sm: 135},
        color: 'white',
        bgcolor: props.themeColor}}>
      <CardActionArea sx={{ width: 'inherit', height: 'inherit' }}>
        <CardContent sx={{ textAlign:'center' }}>
            {props.themeIcon}
          <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: {xs: '16px', sm: '24px'}}}>
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

  );
}
