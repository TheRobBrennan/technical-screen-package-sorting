// src/lib/sort.ts
import { isPackageReal } from "./isPackageReal";
import { isSpecialHandlingNeeded } from "./isSpecialHandlingNeeded";

type Stack = 'STANDARD' | 'SPECIAL' | 'REJECTED';

/**
 * Categorizes a package into a specific stack based on its dimensions and mass for handling and storage.
 * @param width The width of the package in cm.
 * @param height The height of the package in cm.
 * @param length The length of the package in cm.
 * @param mass The mass of the package in kg.
 * @returns Returns 'REJECTED' if the package has non-positive dimensions or mass, indicating it is not a valid physical item.
 *          Returns 'SPECIAL' if the package requires special handling due to being heavy or bulky. 
 *          Returns 'STANDARD' for packages that do not require special handling and have valid dimensions and mass. 
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