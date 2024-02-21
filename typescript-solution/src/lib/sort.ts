// src/lib/sort.ts
type Stack = 'STANDARD' | 'SPECIAL' | 'REJECTED';

export function sort(width: number, height: number, length: number, mass: number): Stack {
  const volume = width * height * length;
  const isBulky = volume >= 1000000 || width >= 150 || height >= 150 || length >= 150;
  const isHeavy = mass >= 20;

  if (isBulky || isHeavy) {
    return 'SPECIAL';
  } else if (width <= 0 || height <= 0 || length <= 0 || mass <= 0) {
    return 'REJECTED';
  } else {
    return 'STANDARD';
  }
}
