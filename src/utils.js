export const toDate = (timestamp) => {
  const date = new Date(timestamp);

  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;

  return `${day}.${month}.${date.getFullYear()}`;
};

export const standardizationJog = (data) => {
  const { id, distance, time, date, user_id: userId } = data;

  return {
    id,
    distance,
    time,
    user_id: userId.toString(),
    date: Date.parse(date),
  };
};
