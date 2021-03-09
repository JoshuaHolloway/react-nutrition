import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect({known_foods, nut_facts_map, setIsInChooseFoodState, setNumFoods, numFoods}) {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {

    // Handle change
    // Handle change
    // Handle change
    // Handle change
    // Handle change

    debugger;

    const food_name = event.target.value;

    setAge(event.target.value);

    if (food_name === 'new-food') {
      // Add new food to database:
      known_foods.push(food_name);

      // TODO: Have popup display to get info from user...
      const key = food_name;
      nut_facts_map.set(food_name, {
        protein: 0,
        carbs: 0,
        fat: 0,
      });
    } else {
      // Get known food data to render to table
      const key = food_name;
   
      // TODO: -Change rows array in BasicTable.js into a state array.
      // TODO: -Then, update values in new row with data from here (should be rendered automatically, since a value change on a state varaible occured).

    }

    // Stop displaying drop-down
    setIsInChooseFoodState(false);

    // Increase number of foods in table
    setNumFoods(numFoods + 1);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          {known_foods.map(known_food => (
            <MenuItem value={known_food}>{known_food}</MenuItem>
          ))}
          <MenuItem value='new-food'>Add New Food</MenuItem>

        </Select>
      </FormControl>
    </div>
  );
}