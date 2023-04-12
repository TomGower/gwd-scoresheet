function pickJoker(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const formDataObject = Object.fromEntries(formData.entries());
  const jokerRound = formDataObject.joker;
  this.setState({
    joker: jokerRound,
  });
}

export default pickJoker;
