function getColors(scores) {
  const colors = [];
  for (let i = 0; i < scores.length; i += 1) {
    if (parseInt(scores[i], 10) === 1) {
      colors.push('green');
    } else if (parseInt(scores[i], 10) === 0) {
      colors.push('red');
    } else {
      colors.push('black');
    }
  }
  return colors;
}

export default getColors;
