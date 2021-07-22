// function checkSpecialRoundOriginal() {
//   const specialRound = document.querySelectorAll('input[name=\'bonus\']');
//   for (let i = 0; i < specialRound.length; i += 1) {
//     let special = 0;
//     if (i === 0) special = 1;
//     else special = i + 2;
//     const roundName = `r${special}info`;
//     const currentInfo = this.state[roundName];
//     if (specialRound[i].checked && !currentInfo.special) {
//       currentInfo.special = true;
//       currentInfo.scores = Array(16).fill(null);
//       currentInfo.answers = Array(16).fill('');
//       this.setState({
//         [roundName]: currentInfo,
//       });
//     }
//   }
// }

function checkSpecialRound() {
  const specialRound = (Array.from(document.querySelectorAll('input[name=\'bonus\']'))).filter((round) => round.checked);
  specialRound.forEach((round) => {
    const roundName = `${round.value}info`;
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
