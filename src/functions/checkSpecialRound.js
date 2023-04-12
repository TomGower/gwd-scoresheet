function checkSpecialRound(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const bonusRounds = formData.getAll('bonus');
  bonusRounds.forEach((r) => {
    const roundName = `${r}info`;
    if (!this.state[roundName].special) {
      const currentInfo = this.state[roundName];
      currentInfo.special = true;
      currentInfo.scores = Array(16).fill(null);
      currentInfo.answers = Array(16).fill('');
      this.setState({
        [roundName]: currentInfo,
      });
    }
  });
}

export default checkSpecialRound;
