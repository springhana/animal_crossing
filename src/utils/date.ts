export const MonthDay = (date: string | undefined, value: string) => {
  if (!date) return;
  const dateSplit = date.split(value);

  return `${dateSplit[0]}월 ${dateSplit[1]}일`;
};
