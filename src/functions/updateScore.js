/* eslint-disable react/no-access-state-in-setstate */
function updateScore(event) {
  const round = event.target.value;
  const answerBoxes = document.querySelectorAll(`input[id~='round${round}answer']`);
  const answers = [];
  answerBoxes.forEach((answer) => answers.push(answer.value));
  const checkboxes = document.querySelectorAll(`input[id~='round${round}']`);
  const check = [];
  checkboxes.forEach((checkbox) => (checkbox.checked ? check.push(1) : check.push(0)));
  const thisScore = check.reduce((acc, cur) => (acc + cur));
  const roundName = `r${round}info`;
  const currentInfo = this.state[roundName];
  const newTotal = this.state.score - currentInfo.score + thisScore;
  currentInfo.score = thisScore;
  currentInfo.answers = answers;
  currentInfo.scores = check;
  if (`r${round}` === this.state.joker) {
    this.setState({
      jokerScore: thisScore,
      [roundName]: currentInfo,
    }, () => {
      this.setState({
        score: this.state.r1info.score + this.state.r2info.score + this.state.r3info.score
        + this.state.r4info.score + this.state.r5info.score + this.state.r6info.score
        + this.state.r7info.score + this.state.r8info.score + this.state.jokerScore,
      });
    });
  } else {
    this.setState({
      [roundName]: currentInfo,
      score: newTotal,
    });
  }
}

export default updateScore;
