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
import SimpleSelect from './Select';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, fat, carbs, protein, row_num) {
  const cals = fat * 9 + 4 * (carbs + protein);
  return { name, cals, fat, carbs, protein, row_num };
}

const foods_in_table = [
  // createData('food-1', 6.0, 24, 4.0),
];

// Easy iteration via array
const known_foods = ['apple', 'orange'];

// Easy key-value lookup via map:

// Map to store the nutrition facts for the key of name of food from known_foods
const nut_facts_map = new Map();
nut_facts_map.set(known_foods[0], { // apple
  protein: 0.3,
  carbs: 13.8,
  fat: 0.2,
});
nut_facts_map.set(known_foods[1], { // orange
  protein: 0.9,
  carbs: 11,
  fat: 0.1,
});

export default function BasicTable() {
  const classes = useStyles();

  const [inputVal, setInputVal] = useState('');
  const [numFoods, setNumFoods] = useState(1);
  const [isInChooseFoodState, setIsInChooseFoodState] = useState(false);

  const setNumFoods_callback = (evt) => {

    // TODO: Grab the data for this food from the database:
    const protein_per_serving = 1;
    const fat_per_serving = 1;
    const carbs_per_serving = 1;

    const protein = inputVal * protein_per_serving;
    const fat = inputVal * fat_per_serving;
    const carbs = inputVal * carbs_per_serving;
    foods_in_table.push(createData(`food-${numFoods}`, fat, carbs, protein, numFoods));
    
    

    setIsInChooseFoodState(true);
  };


  return (
    <>
      

      <Button variant="contained" color="primary" onClick={setNumFoods_callback}>Add food</Button>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Servings</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
              <TableCell align="right">Cals</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {foods_in_table.map((food_in_table, idx) => (
              <TableRow key={food_in_table.name}>
                <TableCell component="th" scope="row">

                  {isInChooseFoodState && idx===numFoods-1 
                    ? <SimpleSelect known_foods={known_foods} nut_facts_map={nut_facts_map} setIsInChooseFoodState={setIsInChooseFoodState} setNumFoods={setNumFoods} numFoods={numFoods}></SimpleSelect> 
                    : `${food_in_table.name}, row-num: ${foods_in_table[idx].row_num}, idx=${idx}, numFoods=${numFoods}`}

                </TableCell>
                <TableCell align="right"><Input inputVal={inputVal} setInputVal={setInputVal}></Input></TableCell>
                <TableCell align="right">{food_in_table.cals}</TableCell>
                
                <TableCell align="right">{food_in_table.fat}</TableCell>
                <TableCell align="right">{food_in_table.carbs}</TableCell>
                <TableCell align="right">{inputVal}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}