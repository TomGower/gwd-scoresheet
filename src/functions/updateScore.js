function updateScore(event) {
  const round = event.target.value;
  const roundName = `r${round}info`;
  const answerBoxes = Array.from(document.querySelectorAll(`input[id~='round${round}answer']`));
  const answers = answerBoxes.map((answer) => answer.value);
  const checkboxes = Array.from(document.querySelectorAll(`input[id~='round${round}']`));
  const checkedBoxes = checkboxes.map((checkbox) => (checkbox.checked ? 1 : 0));
  const newRoundScore = checkedBoxes.reduce((acc, cur) => (acc + cur), 0);
  const currentInfo = this.state[roundName];
  const newTotalScore = this.state.score + newRoundScore
    - currentInfo.score - this.state.jokerScore;
  currentInfo.score = newRoundScore;
  currentInfo.answers = answers;
  currentInfo.scores = checkedBoxes;
  if (`r${round}` === this.state.joker) {
    this.setState({
      jokerScore: newRoundScore,
      [roundName]: currentInfo,
      score: newTotalScore + newRoundScore,
    });
  } else {
    this.setState({
      [roundName]: currentInfo,
      score: newTotalScore,
    });
  }
}

export default updateScore;
