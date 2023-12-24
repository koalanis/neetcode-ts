
type FrequencyMap = {
  [ch: string]: number
}

function getFrequencyMap(str: string): FrequencyMap {
  let map: FrequencyMap = {};

  str.split("").forEach(ch => {
    map[ch] = (map[ch] ?? 0) + 1;
  });
  console.log(map);
  return map;
}

function frequencyMapEqual(a: FrequencyMap, b: FrequencyMap): boolean {
  if(Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }
  const aIsInB = Object.keys(a).every(key => key in b && a[key] === b[key]);
  const bIsInA = Object.keys(b).every(key => key in a && a[key] === b[key])

  return aIsInB && bIsInA;
}


function solveWithFreqMap(s: string, t: string): boolean {
  const freqMapS = getFrequencyMap(s);
  const freqMapT = getFrequencyMap(t);
  return frequencyMapEqual(freqMapS, freqMapT);
};

function solveWithSorting(s: string, t: string): boolean {
  const sortedS = s.split("").sort().join();
  const sortedT = t.split("").sort().join();
  return sortedS === sortedT;
};

export function isAnagram(s: string, t: string): boolean {
  return solveWithSorting(s,t);
};
