import NumericInput from '../components/NumericInput'
import BinaryRadioInput from '../components/BinaryRadioInput'

const male_coeffs = [-216.0475144, 16.2606339, -0.002388645, -0.00113732, 7.01863e-06, -1.291e-08];
const female_coeffs = [594.31747775582, -27.23842536447, 0.82112226871, -0.00930733913, 4.731582e-05, -9.054e-08];
const poundsToKg = 2.20462;

function computeWilksScore(gender, weight, lift_total) {
  var x = weight;

  if (gender === 'f') {
    var c = female_coeffs;
  } else {
    var c = male_coeffs;
  }

  var denominator = 0;
  c.map((num, i) => {denominator += c[i] * Math.pow(x, i)});

  return (500 / denominator) * lift_total;
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {wilks_score: 0,
                  unit: 'kg'};
  }

  updateState(key, event) {
    this.setState({[key]: event.target.value});
    console.log(key, event.target.value);
  }

  getScore(event) {
    event.preventDefault();

    let gender = this.state.gender;
    let unit = this.state.unit;
    var weight = parseInt(this.state.weight);
    let squat = parseInt(this.state.squat);
    let bench = parseInt(this.state.bench);
    let deadlift = parseInt(this.state.deadlift);

    // get lift totals and convert to kg if units are pounds
    var lift_total = squat + bench + deadlift;
    console.log("nose")

    if (unit === 'lbs') {
      console.log("triggered")
      lift_total /= poundsToKg;
      weight /= poundsToKg;
    }

    var score = computeWilksScore(gender, weight, lift_total)
    this.setState({wilks_score: score})
  }

  render() {

    const form = (
    <form onSubmit={this.getScore.bind(this)} class="ui form">
      <BinaryRadioInput label="Gender" update={this.updateState.bind(this)} options={["Male", "Female"]} values={['m', 'f']}/>
      <BinaryRadioInput label="Unit" update={this.updateState.bind(this)} options={["Kilograms", "Pounds"]} values={['kg', 'lbs']}/>
      <NumericInput name="bodyweight" unit={this.state.unit} update={this.updateState.bind(this)}/>
      <NumericInput name="squat" unit={this.state.unit} update={this.updateState.bind(this)}/>
      <NumericInput name="bench" unit={this.state.unit} update={this.updateState.bind(this)}/>
      <NumericInput name="deadlift" unit={this.state.unit} update={this.updateState.bind(this)}/>
      <button type="submit" class="ui button">Submit</button>
    </form>);


    if (this.state.wilks_score) {
      return (
        <React.Fragment>
          {form}

          <div class="column ui card">
            <div class="content">
              <div class="header">Score</div>
            </div>
            <div class="content">
              <h3>Score: {this.state.wilks_score}</h3>
            </div>
          </div>

        </React.Fragment>
      );
    } else {
      return (
      <React.Fragment>
        {form}
      </React.Fragment>
      )
    }
  }
}

export default Form
