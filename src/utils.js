export const sort = (array) =>
  array.sort((a, b) => (a.index < b.index ? -1 : a.index > b.index ? 1 : 0));

export const compareObjects = (o1, o2) => {
  for (var p in o1) {
    if (o1.hasOwnProperty(p)) {
      if (o1[p] !== o2[p]) {
        return false;
      }
    }
  }
  for (var p in o2) {
    if (o2.hasOwnProperty(p)) {
      if (o1[p] !== o2[p]) {
        return false;
      }
    }
  }
  return true;
};
