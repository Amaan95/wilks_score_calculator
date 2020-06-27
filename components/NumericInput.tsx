import React from "react";

import { WeightUnit, capitalize } from "../utils/utils";

interface Props {
  name: string;
  unit: WeightUnit;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class NumericInput extends React.Component<Props> {
  render() {
    return (
      <div className="field">
        <label>{capitalize(this.props.name)}</label>
        <div className="ui right labeled input">
          <input
            type="number"
            min="0"
            name={this.props.name}
            placeholder={capitalize(this.props.name)}
            onChange={this.props.onChange}
            required
          />
          <div className="ui basic label">{this.props.unit}</div>
        </div>
      </div>
    );
  }
}

export default NumericInput;
