function getColors(scores) {
  return scores.map((score) => {
    const val = parseInt(score, 10);
    if (val === 1) return 'green';
    if (val === 0) return 'red';
    return 'black';
  });
}

export default getColors;
