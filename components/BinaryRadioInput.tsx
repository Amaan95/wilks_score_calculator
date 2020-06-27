import React from "react";

interface Props {
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  values: string[];
  options: string[];
}

interface State {
  selected: string;
}

class BinaryRadioInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selected: this.props.values[0],
    };
  }

  render() {
    const inputs = this.props.values.map((val, idx) => {
      <div className="field">
        <div className="ui radio checkbox">
          <input
            type="radio"
            name={this.props.label.toLowerCase()}
            onChange={this.props.onChange}
            value={val}
            checked={this.state.selected === val}
            required
          />
          <label>{this.props.options[idx]}</label>
        </div>
      </div>;
    });

    return this.props.values ? (
      <div className="ui form">
        <div className="inline fields">
          <label>{this.props.label}</label>
          {inputs}
        </div>
      </div>
    ) : null;
  }
}

export default BinaryRadioInput;
