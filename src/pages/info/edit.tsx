import MainFrame from '../../components/MainFrame'
import type { NextPage } from 'next'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import BasicBreadcrumbs from '../../components/Breadcrumbs';
import Text from '../../components/forms/Text';
import Select from '../../components/forms/Select';
import Textarea from '../../components/forms/Textarea';
// import WbButton from '../../components/forms/Buton';
import Grid from '@mui/material/Grid';
import LocalizedDatePicker from '../../components/forms/DatePicker';
import LocalizedTimePicker from '../../components/forms/TimePicker';
import { Button } from '@mui/material';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ShowModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>Show</Button>
      <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Modal>
    </div>
  )
}

const Info: NextPage = () => {
  return (
      <MainFrame>
        <BasicBreadcrumbs />
        <Typography variant='h3'>新規作成</Typography><Typography variant='h4'>会社</Typography>
        <Grid container columns={12}>
          <Grid item xs={10} sm={8}>
            <Text />
            <Select />
            <Textarea />
            <LocalizedDatePicker />
            <LocalizedTimePicker />
            {/* <WbButton /> */}
            {/* <Button onClick={showModal}>Show</Button> */}
            {/* <Button variant="contained" onClick={showModal}>Show</Button> */}

            <ShowModal />
          </Grid>
        </Grid>
      </MainFrame>
  )
}

export default Info
