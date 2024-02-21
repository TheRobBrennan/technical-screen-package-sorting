// src/lib/isPackageHeavy.ts
import { STANDARD_PACKAGE } from "../constants";

/**
 * Determines if the package is considered heavy based on its mass.
 * @param mass The mass of the package in kg.
 * @returns Returns true if the mass of the package equals or exceeds the maximum mass threshold, indicating that the package is heavy.
 *          Returns false if the mass is below the maximum mass threshold; the package is not considered heavy.
 */
export function isPackageHeavy(mass: number): boolean {
  return mass >= STANDARD_PACKAGE.MAX_MASS_IN_KG;
}
