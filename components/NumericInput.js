function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

class NumericInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: null}
    this.handleChange.bind(this)
  }

  updateValue(e) {
    this.setState({value: e.target.value})
  }

  handleChange(e) {
    this.updateValue(e)
    this.props.update(this.props.name, e)
  }

  render() {
    return (
      <div class="field">
        <label>{capitalize(this.props.name)}</label>
        <div class="ui right labeled input">
          <input type="number" min='0' name={this.props.name} placeholder={capitalize(this.props.name)} onChange={(e) => this.handleChange(e)} required/>
          <div class="ui basic label">{this.props.unit}</div>
        </div>
      </div>
    );
  }

}

export default NumericInput
