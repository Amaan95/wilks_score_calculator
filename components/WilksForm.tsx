import React from "react";

import NumericInput from "./NumericInput";
import BinaryRadioInput from "./BinaryRadioInput";

import { WeightUnit, Gender, computeWilksScore } from "../utils/utils";
import { POUNDS_TO_KG } from "../utils/consts";

interface Props {}

interface State {
  wilksScore: number;
  unit: WeightUnit;
  gender: Gender;
  bodyweight: string;
  squat: string;
  bench: string;
  deadlift: string;
}

class Form extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      wilksScore: 0,
      unit: WeightUnit.Pound,
      gender: Gender.Male,
      bodyweight: "180",
      squat: "100",
      bench: "100",
      deadlift: "100",
    };
  }

  updateState = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = event.currentTarget.name as keyof State;
    const value = event.currentTarget.value;
    this.setState({ [key]: value } as any);
  };

  getWilksScore = () => {
    let gender = this.state.gender;
    let unit = this.state.unit;
    var weight = parseInt(this.state.bodyweight);
    let squat = parseInt(this.state.squat);
    let bench = parseInt(this.state.bench);
    let deadlift = parseInt(this.state.deadlift);

    var lift_total = squat + bench + deadlift;

    if (unit === WeightUnit.Pound) {
      lift_total /= POUNDS_TO_KG;
      weight /= POUNDS_TO_KG;
    }

    var score = computeWilksScore(gender, weight, lift_total);
    this.setState({ wilksScore: score });
  };

  render() {
    const form = (
      <form onSubmit={this.getWilksScore} className="ui form">
        <BinaryRadioInput
          label="Gender"
          onChange={this.updateState}
          options={["Male", "Female"]}
          values={["m", "f"]}
        />
        <BinaryRadioInput
          label="Unit"
          onChange={this.updateState}
          options={["Kilograms", "Pounds"]}
          values={["kg", "lbs"]}
        />
        <NumericInput
          name="bodyweight"
          unit={this.state.unit}
          onChange={this.updateState}
        />
        <NumericInput
          name="squat"
          unit={this.state.unit}
          onChange={this.updateState}
        />
        <NumericInput
          name="bench"
          unit={this.state.unit}
          onChange={this.updateState}
        />
        <NumericInput
          name="deadlift"
          unit={this.state.unit}
          onChange={this.updateState}
        />
        <button type="submit" className="ui button">
          Submit
        </button>
      </form>
    );

    return (
      <React.Fragment>
        {form}
        {this.state.wilksScore ? (
          <div className="column ui card">
            <div className="content">
              <div className="header">Score</div>
            </div>
            <div className="content">
              <h3>Score: {this.state.wilksScore}</h3>
            </div>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

export default Form;
