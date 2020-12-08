function pickJoker() {
  const radio = document.querySelectorAll('input[name=\'joker\']');
  for (let i = 0; i < radio.length; i += 1) {
    if (radio[i].checked) {
      const roundName = `r${i + 1}info`;
      const jokerScore = this.state[roundName].score;
      this.setState({
        joker: radio[i].value,
        jokerScore,
        score: this.state.r1info.score + this.state.r2info.score + this.state.r3info.score
        + this.state.r4info.score + this.state.r5info.score + this.state.r6info.score
        + this.state.r7info.score + jokerScore,
      });
      break;
    }
  }
}

export default pickJoker;
