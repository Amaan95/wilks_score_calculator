import Form from '../components/Form'

const Card = (props) => (
  <div class="ui two column centered grid">
    <div class="column ui card">
      <div class="content">
        <div class="header">{props.card_title}</div>
      </div>
      <div class="content">
        <Form />
      </div>
    </div>
  </div>
)

export default Card
