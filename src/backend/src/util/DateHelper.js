module.exports = {
  calculateDate(date, days) {
    let dateCopied = new Date(date.getTime());
    let dateAdjusted = dateCopied.getDate() - days;
    dateCopied.setDate(dateAdjusted);

    return dateCopied;
  },

  getQueryConsideringGivenDays(day) {
    let minDate = this.calculateDate(new Date(), day);
    let query = {
      createdAt: {
        $gte: minDate,
      }
    }
    return query;
  }
};