function handleClick(event) {
  this.setState({
    currentPage: Number(event.target.id),
  });
}

export default handleClick;
