const RadioOption = (props) => (
  <div class="field">
    <div class="ui radio checkbox">
      <input type="radio" name={props.name} value={props.value} required/>
      <label>{props.label}</label>
    </div>
  </div>
)

const BinaryRadioInput = (props) => (
  <div class="ui form">
    <div class="inline fields">
      <label>{props.label}</label>
      <RadioOption name={props.label.toLowerCase()} value="1" label={props.options[0]}/>
      <RadioOption name={props.label.toLowerCase()} value="0" label={props.options[1]}/>
    </div>
  </div>
)

export default BinaryRadioInput
