import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({

}));

function createData(
  head: string,
  item: string,
) {
  return { head, item };
}

const detail = [
  createData('メールアドレス',  'Jonああああああ' ),
  createData('Snow',  'Jon' ),
  createData('Snow',  'Jon' ),
  createData('Snow',  'Jon' ),
  createData('メールアドレス',  'Jonああああああ' ),
  createData('Snow',  'Jon' ),
  createData('Snow',  'Jon' ),
  createData('Snow',  'Jon' ),
];

export default function DetailTable () {
  return(
  <Card sx={{ width: {xs: '100%'}}}>
  <CardContent>
    <Table>
      <TableBody>
      {detail.map((row) => (
        <StyledTableRow>
          <TableCell align='center'><Typography variant="subtitle2" noWrap sx={{ fontWeight : 'bold' }}>{row.head}</Typography></TableCell>
          <TableCell>{row.item}</TableCell>
        </StyledTableRow>
          ))}
      </TableBody>
    </Table>
  </CardContent>
  </Card>
  );
};
