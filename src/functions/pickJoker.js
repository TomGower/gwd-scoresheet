function pickJoker() {
  const radio = document.querySelectorAll('input[name=\'joker\']');
  for (let i = 0; i < radio.length; i += 1) {
    if (radio[i].checked) {
      this.setState({ joker: radio[i].value });
      break;
    }
  }
}

export default pickJoker;
