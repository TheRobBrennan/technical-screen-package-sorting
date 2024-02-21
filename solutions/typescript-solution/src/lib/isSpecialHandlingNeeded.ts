// src/lib/isSpecialHandlingNeeded.ts

import { isPackageBulky } from "./isPackageBulky";
import { isPackageHeavy } from "./isPackageHeavy";

/**
 * Checks whether a package requires special handling due to its size or weight.
 * @param width The width of the package in cm.
 * @param height The height of the package in cm.
 * @param length The length of the package in cm.
 * @param mass The mass of the package in kg.
 * @returns Returns true if the package meets or exceeds the criteria for being considered heavy or bulky, indicating that it requires special handling.
 * 
 *          Specifically, a package is deemed to require special handling if: 
 *            - Its mass is equal to or greater than the maximum mass threshold 
 *            - Any of its dimensions are equal to or larger than the maximum dimension thresholds, thus making it bulky.
 * 
 *          Returns false if the package does not meet these criteria and thus does not require special handling.
 */
export function isSpecialHandlingNeeded(width: number, height: number, length: number, mass: number): boolean {
  const isHeavy = isPackageHeavy(mass);
  const isBulky = isPackageBulky(width, height, length);

  return isHeavy || isBulky;
}
