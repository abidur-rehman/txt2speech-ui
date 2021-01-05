import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, Select, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select: {
    width: 200,
  },
  langSpan: {
    marginRight: 30,
    minWidth: 80,
  }
}));

const SelectComponent = (props) => {
  const classes = useStyles();


  const handleChange = (event) => {
    props.callback(event.target.value);

  };
  return(
    <>
      <FormControl className={classes.formControl}>
        <Grid container spacing={0} alignItems="center">
          <Grid item className={classes.langSpan}>
            <Typography id="discrete-slider-restrict" gutterBottom>
              {props.label}
            </Typography>
          </Grid>
          <Grid item xs className={classes.span}>
            <Select
              className={classes.select}
              native
              value={props.default}
              onChange={handleChange}
              inputProps={{
                name: 'lang',
                id: 'age-native-simple',
              }}
            >
              {props.options.map(o => 
                <option key={o} value={o}>{o}</option>
              )}
            </Select>
          </Grid>
        </Grid>
      </FormControl>
    </>
  );
};

export default SelectComponent;