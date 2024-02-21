// src/lib/isSpecializedHandlingNeeded.ts

import { isPackageBulky } from "./isPackageBulky";
import { isPackageHeavy } from "./isPackageHeavy";

/**
 * Determines if a package requires special handling based on its dimensions and mass.
 * @param width The width of the package in cm.
 * @param height The height of the package in cm.
 * @param length The length of the package in cm.
 * @param mass The mass of the package in kg.
 * @returns true if the package is either heavy or bulky, requiring specialized handling.
 */
export function isSpecialHandlingNeeded(width: number, height: number, length: number, mass: number): boolean {
  const isHeavy = isPackageHeavy(mass);
  const isBulky = isPackageBulky(width, height, length);

  return isHeavy || isBulky;
}
