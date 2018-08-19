class ResultCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: null
    }
  }

  setScore(score) {
    this.state.score = score;
  }


  render() {
    const { score } = this.state;

    if (score) {
      return (
        <div class="ui two column centered grid">
          <div class="column ui card">
            <div class="content">
              <div class="header">Wilks Score</div>
            </div>

            <div class="content">
              <p>Score: {this.state.score}</p>
            </div>
          </div>
        </div>
      );
    }
    else {
      return null;
    }

  }
}

export default ResultCard
