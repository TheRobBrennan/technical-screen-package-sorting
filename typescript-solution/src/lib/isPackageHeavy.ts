import { STANDARD_PACKAGE } from "../constants";

/**
 * Checks if the package has valid dimensions and mass.
 * @param mass The mass of the package in kg.
 * @returns true if the package has positive dimensions and mass, false otherwise.
 */
export function isPackageHeavy(mass: number): boolean {
  return mass >= STANDARD_PACKAGE.MAX_MASS_IN_KG;
}
