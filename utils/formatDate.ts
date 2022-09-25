function formatDate(date: Date): string {
  return `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
}

export default formatDate;
