// src/lib/isPackageReal.ts

/**
 * Checks if the package has valid dimensions and mass.
 * @param width The width of the package in cm.
 * @param height The height of the package in cm.
 * @param length The length of the package in cm.
 * @param mass The mass of the package in kg.
 * @returns true if the package has positive dimensions and mass, false otherwise.
 */
export function isPackageReal(width: number, height: number, length: number, mass: number): boolean {
  return mass > 0 && width > 0 && height > 0 && length > 0;
}
