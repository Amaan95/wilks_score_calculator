import React from "react";

interface Props {
  score: number;
}

class ResultCard extends React.Component<Props> {
  render() {
    if (this.props.score) {
      return (
        <div className="ui two column centered grid">
          <div className="column ui card">
            <div className="content">
              <div className="header">Wilks Score</div>
            </div>

            <div className="content">
              <p>Score: {this.props.score}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ResultCard;
