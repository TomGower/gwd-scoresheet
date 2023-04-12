function pickJoker(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const formDataObject = Object.fromEntries(formData.entries());
  const jokerRound = formDataObject.joker;
  const jokerRoundName = `${jokerRound}info`;
  const jokerScore = this.state[jokerRoundName].score;
  this.setState({
    joker: jokerRound,
    jokerScore,
  });
}

export default pickJoker;
