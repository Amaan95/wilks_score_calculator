function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const NumericInput = (props) => (
  <div class="field">
    <label>{capitalize(props.name)}</label>
    <div class="ui right labeled input">
      <input type="number" min='0' name={props.name} placeholder={capitalize(props.name)} required/>
      <div class="ui basic label">kg</div>
    </div>
  </div>
)

export default NumericInput
