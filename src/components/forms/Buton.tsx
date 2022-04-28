import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function WbButton() {
  return (
    <Box sx={{ '& button': { mt: 1 } }}>
      <Button variant="contained" size="large">
        Large
      </Button>
    </Box>
  );
}
