import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Input from './Input';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, fat, carbs, protein) {
  const cals = fat * 9 + 4 * (carbs + protein);
  return { name, cals, fat, carbs, protein };
}

const rows = [
  createData('food-1', 6.0, 24, 4.0),
];

export default function BasicTable() {
  const classes = useStyles();

  const [inputVal, setInputVal] = useState('');
  const [numFoods, setNumFoods] = useState(1);

  const setNumFoods_callback = (evt) => {

    let num_foods = numFoods;
    num_foods++;
    rows.push(createData('food-2', 1, 2, 3));
    
    setNumFoods(num_foods);
  };


  return (
    <>
      <Button variant="contained" color="primary" onClick={setNumFoods_callback}>Add food</Button>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
              <TableCell align="right">Input Val</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.cals}</TableCell>
                <TableCell align="right"><Input inputVal={inputVal} setInputVal={setInputVal}></Input></TableCell>
                
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{inputVal}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}