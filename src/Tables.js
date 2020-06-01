
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  {
    id:'States',
    label: 'States',
    minWidth: 70,
    align: 'right',
    format: (value) =>value.toLocalString('en-US')},
    
  {
    id:'Confirmed',
    label: 'Confirmed',
    minWidth: 70,
    align: 'center',
    format: (value) =>value.toLocalString('en-US')
  },
  {
    id:'Active',
    label: 'Active',
    minWidth: 70,
    align: 'center',
    format: (value) =>value.toLocalString('en-US')
  },
  {
    id:'Recovered',
    label: 'Recovered',
    minWidth: 70,
    align: 'center',
    format: (value) =>value.toLocalString('en-US')
  },
  {
    id:'Deaths',
    label: 'Deaths',
    minWidth: 70,
    align: 'center',
    format: (value) =>value.toLocalString('en-US')
  },
];

const useStyles = makeStyles({
  root: {
    width: '100%',
    margin: '0 2px',
  },
  container: {
    maxHeight: '100%',
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 10,
  },
  body: {
    fontSize: 11,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const rows = [];
const Tables = ({states, district}) => {

  const classes = useStyles();
  
  const createData = (States, Confirmed, Active, Recovered, Deaths) => {
    return {
      States, Confirmed, Active, Recovered, Deaths,
    districts: [district]
    }
  }
  

  if(rows.length < states.length - 1) {
    for(let i=1; i<states.length; i++) {
      rows.push(createData(states[i].state, states[i].confirmed, states[i].active, states[i].recovered, states[i].deaths));
      }
  }
  return (
    <div>
      <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <StyledTableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <StyledTableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </StyledTableCell>
                    );
                  })}
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      
    </Paper>
    </div>
  )
}

export default Tables;








