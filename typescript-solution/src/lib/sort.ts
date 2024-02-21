import { isPackageBulky } from "./isPackageBulky";
import { isPackageHeavy } from "./isPackageHeavy";

type Stack = 'STANDARD' | 'SPECIAL' | 'REJECTED';

export function sort(width: number, height: number, length: number, mass: number): Stack {
  const isHeavy = isPackageHeavy(mass)
  const isBulky = isPackageBulky(width, height, length);

  if (mass <= 0 || width <= 0 || height <= 0 || length <= 0) {
    return 'REJECTED';
  } else if (isHeavy || isBulky) {
    return 'SPECIAL';
  } else {
    return 'STANDARD';
  }
}
