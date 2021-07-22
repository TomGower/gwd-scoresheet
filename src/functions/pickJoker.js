function pickJoker() {
  const jokerRound = (Array.from(document.querySelectorAll('input[name=\'joker\']')).find((round) => round.checked));
  const roundName = `${jokerRound.value}info`;
  const jokerScore = this.state[roundName].score;
  this.setState({
    joker: jokerRound.value,
    jokerScore,
    score: this.state.r1info.score + this.state.r2info.score + this.state.r3info.score
    + this.state.r4info.score + this.state.r5info.score + this.state.r6info.score
    + this.state.r7info.score + jokerScore,
  });
}

export default pickJoker;
