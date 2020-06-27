import React from "react";

import { WeightUnit, capitalize } from "../utils/utils";

interface Props {
  name: string;
  unit: WeightUnit;
}

class NumericInput extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = { value: null };
    this.handleChange.bind(this);
  }

  updateValue(e: Event) {
    this.setState({ value: e.target ? e.target.value : null });
  }

  handleChange(e: Event) {
    this.updateValue(e);
    this.props.update(this.props.name, e);
  }

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
            onChange={(e) => this.handleChange(e)}
            required
          />
          <div className="ui basic label">{this.props.unit}</div>
        </div>
      </div>
    );
  }
}

export default NumericInput;
