import NumericInput from '../components/NumericInput'
import BinaryRadioInput from '../components/BinaryRadioInput'

const Form = () => (
  <form action="/" method="post" class="ui form">
    <BinaryRadioInput label="Gender" options={["Male", "Female"]}/>
    <BinaryRadioInput label="Unit" options={["Kilograms", "Pounds"]}/>
    <NumericInput name="weight" />
    <NumericInput name="squat" />
    <NumericInput name="bench" />
    <NumericInput name="deadlift" />
    <button type="submit" class="ui button">Submit</button>
  </form>
)

export default Form
