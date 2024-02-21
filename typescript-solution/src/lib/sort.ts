import { isPackageReal } from "./isPackageReal";
import { isSpecialHandlingNeeded } from "./isSpecialHandlingNeeded";

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
  if (!isPackageReal(width, height, length, mass)) {
    return 'REJECTED';
  }

  if (isSpecialHandlingNeeded(width, height, length, mass)) {
    return 'SPECIAL';
  }

  return 'STANDARD';
}