import { STANDARD_PACKAGE } from "../constants";

export function isPackageHeavy(mass: number): boolean {
  return mass >= STANDARD_PACKAGE.MAX_MASS_IN_KG;
}
