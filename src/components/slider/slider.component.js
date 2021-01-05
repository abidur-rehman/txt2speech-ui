import React from 'react';
import { Typography, Slider, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
  span: {
    marginLeft: 65
  },
  langSpan: {
    minWidth: 140,
  }
});

const SliderComponent = (props) => {
  const { callback, label, marks, defaultVal} = props;
  const classes = useStyles();

  const valuetext = (value) => {
    return `${value}°C`;
  }
  
  const valueLabelFormat = (value) => {
    const labelTemp = marks.find((mark) => mark.value === value).label;
    return labelTemp;
  }

  const handleChange = (event, newValue) => {
    const labelTemp = marks.find((mark) => mark.value === newValue).label;
    callback(labelTemp);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={0} alignItems="center">
        <Grid item className={classes.langSpan}>
          <Typography id="discrete-slider-restrict" gutterBottom>
            {label}
          </Typography>
        </Grid>
        <Grid item xs>
          <Slider
            onChange={handleChange}
            defaultValue={defaultVal}
            valueLabelFormat={valueLabelFormat}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-restrict"
            step={null}
            valueLabelDisplay="auto"
            marks={marks}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default SliderComponent;