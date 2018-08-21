class BinaryRadioInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selected: this.props.values[0]}
  }

  handleChange(e) {
    this.props.update(this.props.label.toLowerCase(), e);
    this.setState({selected: e.target.value})
  }

  render() {
    return (
      <div class="ui form">
        <div class="inline fields">
          <label>{this.props.label}</label>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name={this.props.label.toLowerCase()} onChange={this.handleChange.bind(this)} value={this.props.values[0]} checked={this.state.selected === this.props.values[0]} required/>
              <label>{this.props.options[0]}</label>
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name={this.props.label.toLowerCase()} onChange={this.handleChange.bind(this)} value={this.props.values[1]} checked={this.state.selected === this.props.values[1]} required/>
              <label>{this.props.options[1]}</label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BinaryRadioInput
