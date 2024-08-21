const threeConsecutiveOdds = (arr: number[]): boolean => {
  for (let i = 0; i < arr.length - 2; i += 1) {
    if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && arr[i + 2] % 2 !== 0) return true;
  }

  return false;
};

export default threeConsecutiveOdds;
