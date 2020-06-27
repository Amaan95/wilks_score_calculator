import WilksForm from "./WilksForm";

interface CardProps {
  title: string;
}

const Card = (props: CardProps) => (
  <div className="ui two column centered grid">
    <div className="column ui card">
      <div className="content">
        <div className="header">{props.title}</div>
      </div>
      <div className="content">
        <WilksForm />
      </div>
    </div>
  </div>
);

export default Card;
