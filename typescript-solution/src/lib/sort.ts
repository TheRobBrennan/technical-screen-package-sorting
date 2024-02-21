import { isPackageBulky } from "./isPackageBulky";
import { isPackageHeavy } from "./isPackageHeavy";
import { isPackageReal } from "./isPackageReal";

type Stack = 'STANDARD' | 'SPECIAL' | 'REJECTED';

/**
 * Checks if the package has valid dimensions and mass.
 * @param width The width of the package in cm.
 * @param height The height of the package in cm.
 * @param length The length of the package in cm.
 * @param mass The mass of the package in kg.
 * @returns string containing the Stack this package should be placed in.
 */
export function sort(width: number, height: number, length: number, mass: number): Stack {
  // Reject non-sensical package dimensions and/or mass
  if (isPackageReal(width, height, length, mass) === false) {
    return 'REJECTED';
  }

  // Specialized handling is necessary for heavy and/or bulky packages
  const isHeavy = isPackageHeavy(mass)
  const isBulky = isPackageBulky(width, height, length);

  if (isHeavy || isBulky) {
    return 'SPECIAL';
  }

  // No special handling is necessary 🤓
  return 'STANDARD';
}
