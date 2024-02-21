// src/lib/isPackageReal.ts

/**
 * Validates the physical feasibility of a package based on its dimensions and mass.
 * @param width The width of the package in cm.
 * @param height The height of the package in cm.
 * @param length The length of the package in cm.
 * @param mass The mass of the package in kg.
 * @returns Returns true if all dimensions (width, height, and length) and the mass of the package are positive values, indicating a physically plausible package. 
 *          Returns false if any dimension or the mass is zero or negative, indicating an invalid or physically impossible package.
 */
export function isPackageReal(width: number, height: number, length: number, mass: number): boolean {
  return mass > 0 && width > 0 && height > 0 && length > 0;
}
