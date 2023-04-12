function updateScore(event) {
  const round = event.target.value;
  const roundName = `r${round}info`;
  const answerBoxes = Array.from(document.querySelectorAll(`input[id~='round${round}answer']`));
  const answers = answerBoxes.map((answer) => answer.value);
  const checkboxes = Array.from(document.querySelectorAll(`input[id~='round${round}']`));
  const checkedBoxes = checkboxes.map((checkbox) => (checkbox.checked ? 1 : 0));
  const newRoundScore = checkedBoxes.reduce((acc, cur) => (acc + cur), 0);
  const currentInfo = this.state[roundName];
  currentInfo.score = newRoundScore;
  currentInfo.answers = answers;
  currentInfo.scores = checkedBoxes;
  if (`r${round}` === this.state.joker) {
    this.setState({
      jokerScore: newRoundScore,
      [roundName]: currentInfo,
    });
  } else {
    this.setState({
      [roundName]: currentInfo,
    });
  }
}

export default updateScore;
