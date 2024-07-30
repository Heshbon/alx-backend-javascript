function cleanSet(set, startString) {
  if (!(set instanceof Set)) {
    throw new TypeError('The first argument must be a Set');
  }

  if (typeof startString !== 'string' || !startString) {
    return '';
  }

  return [...set]
    .filter((item) => typeof item === 'string' && item.startsWith(startString))
    .map((item) => item.slice(startString.length))
    .join('-');
}

export default cleanSet;
