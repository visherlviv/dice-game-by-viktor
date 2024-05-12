import React from "react";
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Slider,
} from "@mui/material";
import { Conditions, GameControlsProps } from "@/types";

const GameControls: React.FC<GameControlsProps> = ({
  condition,
  number,
  handleConditionChange,
  handleNumberChange,
  rollDice,
  score,
}) => {
  const marks = [
    { value: 0, label: "" },
    { value: 25, label: "" },
    { value: 50, label: "" },
    { value: 75, label: "" },
    { value: 100, label: "" },
  ];

  return (
    <div className="controls-wrapper">
      <div className="controls-score-display">
        <h2>Dice Result: {score}</h2>
      </div>
      <FormControl component="fieldset" className="controls-radio-group">
        <RadioGroup
          row
          aria-label="condition"
          name="condition"
          value={condition}
          onChange={handleConditionChange}
        >
          <FormControlLabel
            value={Conditions.Over}
            control={<Radio color="secondary" />}
            label="Over"
            labelPlacement="start"
          />
          <FormControlLabel
            value={Conditions.Under}
            control={<Radio color="secondary" />}
            label="Under"
            labelPlacement="start"
          />
        </RadioGroup>
      </FormControl>
      <Slider
        value={number}
        onChange={handleNumberChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        min={1}
        max={100}
        color="secondary"
        marks={marks}
      />
      <Button variant="contained" color="secondary" onClick={rollDice}>
        Play
      </Button>
    </div>
  );
};

export default GameControls;
