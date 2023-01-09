export const trimming = (str: string | undefined) => {
  if (str && str.length > 6) {
    return [
      str.substring(0, 6),
      str.substring(str.length - 3, str.length),
    ].join('...');
  }
  return str;
};
