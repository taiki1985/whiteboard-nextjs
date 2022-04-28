import MainFrame from '../../components/MainFrame'
import type { NextPage } from 'next'
import * as React from 'react';
import DeleteDialog from '../../components/DeleteDialog'


const Info: NextPage = () => {
  return (
    <>
      <MainFrame>
        <DeleteDialog />
      </MainFrame>
    </>
  )
}

export default Info
